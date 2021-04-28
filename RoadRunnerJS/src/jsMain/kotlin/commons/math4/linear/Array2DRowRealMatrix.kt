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

/**
 * Implementation of [RealMatrix] using a `double[][]` array to
 * store entries.
 */
class Array2DRowRealMatrix {
    /**
     * Get a reference to the underlying data array.
     *
     * @return 2-dimensional array of entries.
     */
    /** Entries of the matrix.  */
    var dataRef: Array<DoubleArray>

    /**
     * Create a new RealMatrix using the input array as the underlying
     * data array.
     * If an array is built specially in order to be embedded in a
     * RealMatrix and not used directly, the `copyArray` may be
     * set to `false`. This will prevent the copying and improve
     * performance as no new array will be built and no data will be copied.
     *
     * @param d Data for new matrix.
     * @param copyArray if `true`, the input array will be copied,
     * otherwise it will be referenced.
     * @throws DimensionMismatchException if `d` is not rectangular.
     * @throws NoDataException if `d` row or column dimension is zero.
     * @throws NullArgumentException if `d` is `null`.
     * @see .Array2DRowRealMatrix
     */
    constructor(d: Array<DoubleArray>) {
        dataRef = d
    }

    constructor(rowDimension: Int, columnDimension: Int) {
        dataRef = Array(rowDimension) { DoubleArray(columnDimension) }
    }

    /** {@inheritDoc}  */
    fun getEntry(row: Int, column: Int): Double {
        return dataRef[row][column]
    }

    fun setEntry(row: Int, column: Int, value: Double) {
        dataRef[row][column] = value
    }

    val columnDimension
        get() = dataRef[0].size

    fun transpose(): commons.math4.linear.Array2DRowRealMatrix {
        val m = dataRef.size
        val n = dataRef[0].size

        val transposedMatrix = Array(n) { DoubleArray(m) }

        for(x in 0 until n) {
            for(y in 0 until m) {
                transposedMatrix[x][y] = dataRef[y][x]
            }
        }

        return commons.math4.linear.Array2DRowRealMatrix(transposedMatrix)
    }
}