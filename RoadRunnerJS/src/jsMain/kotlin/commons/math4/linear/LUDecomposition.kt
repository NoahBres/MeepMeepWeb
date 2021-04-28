/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package commons.math4.linear

import kotlin.math.abs

/**
 * Calculates the LUP-decomposition of a square matrix.
 *
 * The LUP-decomposition of a matrix A consists of three matrices L, U and
 * P that satisfy: PA = LU. L is lower triangular (with unit
 * diagonal terms), U is upper triangular and P is a permutation matrix. All
 * matrices are mm.
 *
 * As shown by the presence of the P matrix, this decomposition is
 * implemented using partial pivoting.
 *
 * This class is based on the class with similar name from the
 * [JAMA](http://math.nist.gov/javanumerics/jama/) library.
 *
 *  * a [getP][.getP] method has been added,
 *  * the `det` method has been renamed as [   getDeterminant][.getDeterminant],
 *  * the `getDoublePivot` method has been removed (but the int based
 * [getPivot][.getPivot] method has been kept),
 *  * the `solve` and `isNonSingular` methods have been replaced
 * by a [getSolver][.getSolver] method and the equivalent methods
 * provided by the returned [DecompositionSolver].
 *
 *
 * @see [MathWorld](http://mathworld.wolfram.com/LUDecomposition.html)
 *
 * @see [Wikipedia](http://en.wikipedia.org/wiki/LU_decomposition)
 *
 * @since 2.0 (changed to concrete class in 3.0)
 */
class LUDecomposition constructor(matrix: commons.math4.linear.Array2DRowRealMatrix, singularityThreshold: Double = DEFAULT_TOO_SMALL) {
    /** Entries of LU decomposition.  */
    private val lu: Array<DoubleArray>

    /** Pivot permutation associated with LU decomposition.  */
    private val pivot: IntArray

    /** Parity of the permutation associated with the LU decomposition.  */
    private var even: Boolean

    /** Singularity indicator.  */
    private var singular: Boolean

    /** Cached value of L.  */
    private var cachedL: commons.math4.linear.Array2DRowRealMatrix?

    /** Cached value of U.  */
    private var cachedU: commons.math4.linear.Array2DRowRealMatrix?

    /** Cached value of P.  */
    private var cachedP: commons.math4.linear.Array2DRowRealMatrix?

    /**
     * Returns the matrix L of the decomposition.
     *
     * L is a lower-triangular matrix
     * @return the L matrix (or null if decomposed matrix is singular)
     */
    val l: commons.math4.linear.Array2DRowRealMatrix?
        get() {
            if (cachedL == null && !singular) {
                val m = pivot.size
                cachedL = commons.math4.linear.Array2DRowRealMatrix(m, m)
                for (i in 0 until m) {
                    val luI = lu[i]
                    for (j in 0 until i) {
                        cachedL!!.setEntry(i, j, luI[j])
                    }
                    cachedL!!.setEntry(i, i, 1.0)
                }
            }

            return cachedL
        }

    /**
     * Returns the matrix U of the decomposition.
     *
     * U is an upper-triangular matrix
     * @return the U matrix (or null if decomposed matrix is singular)
     */
    val u: commons.math4.linear.Array2DRowRealMatrix?
        get() {
            if (cachedU == null && !singular) {
                val m = pivot.size
                cachedU = commons.math4.linear.Array2DRowRealMatrix(m, m)
                for (i in 0 until m) {
                    val luI = lu[i]
                    for (j in i until m) {
                        cachedU!!.setEntry(i, j, luI[j])
                    }
                }
            }
            return cachedU
        }

    /**
     * Returns the P rows permutation matrix.
     *
     * P is a sparse matrix with exactly one element set to 1.0 in
     * each row and each column, all other elements being set to 0.0.
     *
     * The positions of the 1 elements are given by the [ pivot permutation vector][.getPivot].
     * @return the P rows permutation matrix (or null if decomposed matrix is singular)
     * @see .getPivot
     */
    val p: commons.math4.linear.Array2DRowRealMatrix?
        get() {
            if (cachedP == null && !singular) {
                val m = pivot.size
                cachedP = commons.math4.linear.Array2DRowRealMatrix(m, m)
                for (i in 0 until m) {
                    cachedP!!.setEntry(i, pivot[i], 1.0)
                }
            }
            return cachedP
        }

    /**
     * Returns the pivot permutation vector.
     * @return the pivot permutation vector
     * @see .getP
     */
    fun getPivot(): IntArray {
        return pivot.copyOf()
    }

    /**
     * Return the determinant of the matrix
     * @return determinant of the matrix
     */
    val determinant: Double
        get() = if (singular) {
            0.0
        } else {
            val m = pivot.size
            var determinant: Double = if (even) 1.0 else -1.0
            for (i in 0 until m) {
                determinant *= lu[i][i]
            }
            determinant
        }

    /**
     * Get a solver for finding the A  X = B solution in exact linear
     * sense.
     * @return a solver
     */
    val solver: DecompositionSolver
        get() = Solver(lu, pivot, singular)

    /** Specialized solver.  */
    private class Solver
    /**
     * Build a solver from decomposed matrix.
     * @param lu entries of LU decomposition
     * @param pivot pivot permutation associated with LU decomposition
     * @param singular singularity indicator
     */(
        /** Entries of LU decomposition.  */
        private val lu: Array<DoubleArray>,
        /** Pivot permutation associated with LU decomposition.  */
        private val pivot: IntArray,
        /** Singularity indicator.  */
        private val singular: Boolean
    ) : DecompositionSolver {
        /** {@inheritDoc}  */
        override val isNonSingular: Boolean
            get() = !singular

        /** {@inheritDoc}  */
        override fun solve(b: commons.math4.linear.Array2DRowRealMatrix): commons.math4.linear.Array2DRowRealMatrix {
            val m = pivot.size
            val nColB = b.columnDimension

            // Apply permutations to b
            val bp = Array(m) { DoubleArray(nColB) }
            for (row in 0 until m) {
                val bpRow = bp[row]
                val pRow = pivot[row]
                for (col in 0 until nColB) {
                    bpRow[col] = b.getEntry(pRow, col)
                }
            }

            // Solve LY = b
            for (col in 0 until m) {
                val bpCol = bp[col]
                for (i in col + 1 until m) {
                    val bpI = bp[i]
                    val luICol = lu[i][col]
                    for (j in 0 until nColB) {
                        bpI[j] -= bpCol[j] * luICol
                    }
                }
            }

            // Solve UX = Y
            for (col in m - 1 downTo 0) {
                val bpCol = bp[col]
                val luDiag = lu[col][col]
                for (j in 0 until nColB) {
                    bpCol[j] /= luDiag
                }
                for (i in 0 until col) {
                    val bpI = bp[i]
                    val luICol = lu[i][col]
                    for (j in 0 until nColB) {
                        bpI[j] -= bpCol[j] * luICol
                    }
                }
            }
            return commons.math4.linear.Array2DRowRealMatrix(bp)
        }
    }

    companion object {
        /** Default bound to determine effective singularity in LU decomposition.  */
        private const val DEFAULT_TOO_SMALL = 1e-11
    }
    /**
     * Calculates the LU-decomposition of the given matrix.
     * @param matrix The matrix to decompose.
     * @param singularityThreshold threshold (based on partial row norm)
     * under which a matrix is considered singular
     * @throws NonSquareMatrixException if matrix is not square
     */
    /**
     * Calculates the LU-decomposition of the given matrix.
     * This constructor uses 1e-11 as default value for the singularity
     * threshold.
     *
     * @param matrix Matrix to decompose.
     * @throws NonSquareMatrixException if matrix is not square.
     */
    init {
        val m = matrix.columnDimension
        lu = matrix.dataRef
        pivot = IntArray(m)
        cachedL = null
        cachedU = null
        cachedP = null

        // Initialize permutation array and parity
        for (row in 0 until m) {
            pivot[row] = row
        }
        even = true
        singular = false

        // Loop over columns
        for (col in 0 until m) {

            // upper
            for (row in 0 until col) {
                val luRow = lu[row]
                var sum = luRow[col]
                for (i in 0 until row) {
                    sum -= luRow[i] * lu[i][col]
                }
                luRow[col] = sum
            }

            // lower
            var max = col // permutation row
            var largest = Double.NEGATIVE_INFINITY
            for (row in col until m) {
                val luRow = lu[row]
                var sum = luRow[col]
                for (i in 0 until col) {
                    sum -= luRow[i] * lu[i][col]
                }
                luRow[col] = sum

                // maintain best permutation choice
                if (abs(sum) > largest) {
                    largest = abs(sum)
                    max = row
                }
            }

            // Singularity check
            if (abs(lu[max][col]) < singularityThreshold) {
                singular = true
            } else {
                // Pivot if necessary
                if (max != col) {
                    var tmp: Double
                    val luMax = lu[max]
                    val luCol = lu[col]
                    for (i in 0 until m) {
                        tmp = luMax[i]
                        luMax[i] = luCol[i]
                        luCol[i] = tmp
                    }
                    val temp = pivot[max]
                    pivot[max] = pivot[col]
                    pivot[col] = temp
                    even = !even
                }

                // Divide the lower elements by the "winning" diagonal elt.
                val luDiag = lu[col][col]
                for (row in col + 1 until m) {
                    lu[row][col] /= luDiag
                }
            }
        }
    }
}