(function (_, mathjs) {
  'use strict';
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  UninitializedPropertyAccessException.prototype = Object.create(RuntimeException.prototype);
  UninitializedPropertyAccessException.prototype.constructor = UninitializedPropertyAccessException;
  LineSegment.prototype = Object.create(ParametricCurve.prototype);
  LineSegment.prototype.constructor = LineSegment;
  PathBuilderException.prototype = Object.create(RuntimeException.prototype);
  PathBuilderException.prototype.constructor = PathBuilderException;
  PathContinuityViolationException.prototype = Object.create(PathBuilderException.prototype);
  PathContinuityViolationException.prototype.constructor = PathContinuityViolationException;
  EmptyPathSegmentException.prototype = Object.create(PathBuilderException.prototype);
  EmptyPathSegmentException.prototype.constructor = EmptyPathSegmentException;
  QuinticSpline.prototype = Object.create(ParametricCurve.prototype);
  QuinticSpline.prototype.constructor = QuinticSpline;
  ConstantInterpolator.prototype = Object.create(HeadingInterpolator.prototype);
  ConstantInterpolator.prototype.constructor = ConstantInterpolator;
  LinearInterpolator.prototype = Object.create(HeadingInterpolator.prototype);
  LinearInterpolator.prototype.constructor = LinearInterpolator;
  SplineInterpolator.prototype = Object.create(HeadingInterpolator.prototype);
  SplineInterpolator.prototype.constructor = SplineInterpolator;
  TangentInterpolator.prototype = Object.create(HeadingInterpolator.prototype);
  TangentInterpolator.prototype.constructor = TangentInterpolator;
  PiecewiseVelocityConstraint.prototype = Object.create(TrajectoryVelocityConstraint.prototype);
  PiecewiseVelocityConstraint.prototype.constructor = PiecewiseVelocityConstraint;
  PiecewiseAccelerationConstraint.prototype = Object.create(TrajectoryAccelerationConstraint.prototype);
  PiecewiseAccelerationConstraint.prototype.constructor = PiecewiseAccelerationConstraint;
  AngularVelocityConstraint.prototype = Object.create(TrajectoryVelocityConstraint.prototype);
  AngularVelocityConstraint.prototype.constructor = AngularVelocityConstraint;
  MecanumVelocityConstraint.prototype = Object.create(TrajectoryVelocityConstraint.prototype);
  MecanumVelocityConstraint.prototype.constructor = MecanumVelocityConstraint;
  MinVelocityConstraint.prototype = Object.create(TrajectoryVelocityConstraint.prototype);
  MinVelocityConstraint.prototype.constructor = MinVelocityConstraint;
  ProfileAccelerationConstraint.prototype = Object.create(TrajectoryAccelerationConstraint.prototype);
  ProfileAccelerationConstraint.prototype.constructor = ProfileAccelerationConstraint;
  UnsatisfiableConstraint.prototype = Object.create(RuntimeException.prototype);
  UnsatisfiableConstraint.prototype.constructor = UnsatisfiableConstraint;
  function first(_this_) {
    if (_this_.length === 0)
      throw NoSuchElementException_init_$Create$_0('Array is empty.');
    else {
    }
    return _this_[0];
  }
  function last(_this_) {
    if (_this_.length === 0)
      throw NoSuchElementException_init_$Create$_0('Array is empty.');
    else {
    }
    return _this_[_get_lastIndex_(_this_)];
  }
  function toMutableList(_this_) {
    return ArrayList_init_$Create$_1(asCollection(_this_));
  }
  function toList(_this_) {
    var tmp0_subject = _this_.length;
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf_0(_this_[0]);
      default:return toMutableList(_this_);
    }
  }
  function _get_lastIndex_(_this_) {
    return _this_.length - 1 | 0;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_2(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_1 = indexedObject.length;
    $l$break: while (inductionVariable < last_1) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_2(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_2(truncated);
      Unit_getInstance();
    }buffer.append_2(postfix);
    Unit_getInstance();
    return buffer;
  }
  function zip(_this_, other) {
    var first_1_0 = _this_.iterator_20();
    var second_2 = other.iterator_20();
    var tmp0_minOf_0 = collectionSizeOrDefault(_this_, 10);
    var tmp1_minOf_0 = collectionSizeOrDefault(other, 10);
    var list_3 = ArrayList_init_$Create$_0(function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([tmp0_minOf_0, tmp1_minOf_0]))));
    }.call(this));
    while (first_1_0.hasNext_6() ? second_2.hasNext_6() : false) {
      var tmp2__anonymous__4 = first_1_0.next_6();
      var tmp3__anonymous__4 = second_2.next_6();
      list_3.add_6(to(tmp2__anonymous__4, tmp3__anonymous__4));
      Unit_getInstance();
    }
    return list_3;
  }
  function last_0(_this_) {
    if (_this_.isEmpty_8())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_25(_get_lastIndex__0(_this_));
  }
  function lastOrNull(_this_) {
    return _this_.isEmpty_8() ? null : _this_.get_25(_this_._get_size__7() - 1 | 0);
  }
  function reversed(_this_) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__7() <= 1;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return toList_0(_this_);
    else {
    }
    var list = toMutableList_1(_this_);
    reverse(list);
    return list;
  }
  function minOrNull(_this_) {
    var iterator = _this_.iterator_20();
    if (!iterator.hasNext_6())
      return null;
    var min = iterator.next_6();
    while (iterator.hasNext_6()) {
      var e = iterator.next_6();
      var tmp0_minOf_0 = min;
      min = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_minOf_0, e]))));
      }.call(this);
    }
    return min;
  }
  function toMutableList_0(_this_) {
    return ArrayList_init_$Create$_1(_this_);
  }
  function dropLast(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_2));
    }return take(_this_, coerceAtLeast(_this_._get_size__7() - n | 0, 0));
  }
  function plus(_this_, elements) {
    if (isInterface(elements, Collection)) {
      var result = ArrayList_init_$Create$_0(_this_._get_size__7() + elements._get_size__7() | 0);
      result.addAll_2(_this_);
      Unit_getInstance();
      result.addAll_2(elements);
      Unit_getInstance();
      return result;
    } else {
      {
        var result_0 = ArrayList_init_$Create$_1(_this_);
        addAll(result_0, elements);
        Unit_getInstance();
        return result_0;
      }
    }
  }
  function toList_0(_this_) {
    if (isInterface(_this_, Collection)) {
      var tmp0_subject = _this_._get_size__7();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this_, List)) {
            tmp_0 = _this_.get_25(0);
          } else {
            {
              tmp_0 = _this_.iterator_20().next_6();
            }
          }

          tmp = listOf_0(tmp_0);
          break;
        default:tmp = toMutableList_0(_this_);
          break;
      }
      return tmp;
    } else {
    }
    return optimizeReadOnlyList(toMutableList_1(_this_));
  }
  function toMutableList_1(_this_) {
    if (isInterface(_this_, Collection))
      return toMutableList_0(_this_);
    else {
    }
    return toCollection(_this_, ArrayList_init_$Create$());
  }
  function take(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$(toString_0(message_2));
    }if (n === 0)
      return emptyList();
    if (isInterface(_this_, Collection)) {
      if (n >= _this_._get_size__7())
        return toList_0(_this_);
      if (n === 1)
        return listOf_0(first_0(_this_));
    } else {
    }
    var count = 0;
    var list = ArrayList_init_$Create$_0(n);
    var tmp0_iterator = _this_.iterator_20();
    $l$break: while (tmp0_iterator.hasNext_6()) {
      var item = tmp0_iterator.next_6();
      list.add_6(item);
      Unit_getInstance();
      count = count + 1 | 0;
      if (count === n)
        break $l$break;
      else {
      }
    }
    return optimizeReadOnlyList(list);
  }
  function toCollection(_this_, destination) {
    var tmp0_iterator = _this_.iterator_20();
    while (tmp0_iterator.hasNext_6()) {
      var item = tmp0_iterator.next_6();
      destination.add_6(item);
      Unit_getInstance();
    }
    return destination;
  }
  function first_0(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return first_1(_this_);
    else {
      {
        var iterator = _this_.iterator_20();
        if (!iterator.hasNext_6())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        return iterator.next_6();
      }
    }
  }
  function first_1(_this_) {
    if (_this_.isEmpty_8())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_25(0);
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_2(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_20();
    $l$break: while (tmp0_iterator.hasNext_6()) {
      var element = tmp0_iterator.next_6();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_2(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_2(truncated);
      Unit_getInstance();
    }buffer.append_2(postfix);
    Unit_getInstance();
    return buffer;
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString(it);
  };
  _no_name_provided_.prototype.invoke_78 = function (p1) {
    return this.invoke((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.isEmpty_8 = function () {
    return this._get_size__7() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkPositionIndex = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.orderedHashCode = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_20();
    while (tmp0_iterator.hasNext_6()) {
      var e = tmp0_iterator.next_6();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals = function (c, other) {
    if (!(c._get_size__7() === other._get_size__7()))
      return false;
    var otherIterator = other.iterator_20();
    var tmp0_iterator = c.iterator_20();
    while (tmp0_iterator.hasNext_6()) {
      var elem = tmp0_iterator.next_6();
      var elemOther = otherIterator.next_6();
      if (!equals(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function listOf(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function mutableListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function _get_lastIndex__0(_this_) {
    return _this_._get_size__7() - 1 | 0;
  }
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__7();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf_0(_this_.get_25(0));
      default:return _this_;
    }
  }
  function ArrayAsCollection(values, isVarargs) {
    this._values = values;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_size__7 = function () {
    return this._values.length;
  };
  ArrayAsCollection.prototype.isEmpty_8 = function () {
    var tmp0_isEmpty_0 = this._values;
    return tmp0_isEmpty_0.length === 0;
  };
  ArrayAsCollection.prototype.iterator_20 = function () {
    return arrayIterator(this._values);
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_8();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__7 = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_8 = function () {
    return true;
  };
  EmptyList.prototype.get_25 = function (index) {
    throw IndexOutOfBoundsException_init_$Create$('' + "Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.iterator_20 = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_6 = function () {
    return false;
  };
  EmptyIterator.prototype.next_6 = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function asCollection(_this_) {
    return new ArrayAsCollection(_this_, false);
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__7();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function addAll(_this_, elements) {
    var tmp0_subject = elements;
    if (isInterface(tmp0_subject, Collection))
      return _this_.addAll_2(elements);
    else {
      {
        var result = false;
        var tmp1_iterator = elements.iterator_20();
        while (tmp1_iterator.hasNext_6()) {
          var item = tmp1_iterator.next_6();
          if (_this_.add_6(item))
            result = true;
        }
        return result;
      }
    }
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_2(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_2(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_1(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_2(toString(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function Pair(first_2, second) {
    this._first = first_2;
    this._second = second;
  }
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1_1 = function () {
    return this._first;
  };
  Pair.prototype.component2_1 = function () {
    return this._second;
  };
  Pair.prototype.hashCode = function () {
    var result = this._first == null ? 0 : hashCode(this._first);
    result = imul(result, 31) + (this._second == null ? 0 : hashCode(this._second)) | 0;
    return result;
  };
  Pair.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals(this._first, tmp0_other_with_cast._first))
      return false;
    if (!equals(this._second, tmp0_other_with_cast._second))
      return false;
    return true;
  };
  Pair.$metadata$ = {
    simpleName: 'Pair',
    kind: 'class',
    interfaces: [Serializable]
  };
  function to(_this_, that) {
    return new Pair(_this_, that);
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_6 = function () {
    return this.nextInt_0();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator]
  };
  function IntProgressionIterator(first_2, last_1, step) {
    IntIterator.call(this);
    this._step = step;
    this._finalElement = last_1;
    this._hasNext = this._step > 0 ? first_2 <= last_1 : first_2 >= last_1;
    this._next = this._hasNext ? first_2 : this._finalElement;
  }
  IntProgressionIterator.prototype.hasNext_6 = function () {
    return this._hasNext;
  };
  IntProgressionIterator.prototype.nextInt_0 = function () {
    var value = this._next;
    if (value === this._finalElement) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next = tmp0_this._next + this._step | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_0();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE)
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_0 = start;
    this._last = getProgressionLastElement(start, endInclusive, step);
    this._step_0 = step;
  }
  IntProgression.prototype._get_first__0 = function () {
    return this._first_0;
  };
  IntProgression.prototype._get_last__0 = function () {
    return this._last;
  };
  IntProgression.prototype.iterator_20 = function () {
    return new IntProgressionIterator(this._first_0, this._last, this._step_0);
  };
  IntProgression.prototype.isEmpty_8 = function () {
    return this._step_0 > 0 ? this._first_0 > this._last : this._first_0 < this._last;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_8() ? other.isEmpty_8() : false) ? true : (this._first_0 === other._first_0 ? this._last === other._last : false) ? this._step_0 === other._step_0 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_8() ? -1 : imul(31, imul(31, this._first_0) + this._last | 0) + this._step_0 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this._step_0 > 0 ? '' + this._first_0 + '..' + this._last + ' step ' + this._step_0 : '' + this._first_0 + ' downTo ' + this._last + ' step ' + (-this._step_0 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_2() {
    Companion_instance_1 = this;
    this._EMPTY = new IntRange(1, 0);
  }
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_1();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype.isEmpty_8 = function () {
    return this._get_first__0() > this._get_last__0();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_8() ? other.isEmpty_8() : false) ? true : this._get_first__0() === other._get_first__0() ? this._get_last__0() === other._get_last__0() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_8() ? -1 : imul(31, this._get_first__0()) + this._get_last__0() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__0() + '..' + this._get_last__0();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod_0 = a % b;
    return mod_0 >= 0 ? mod_0 : mod_0 + b | 0;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE = -2147483648;
    this._MAX_VALUE = 2147483647;
    this._SIZE_BYTES = 4;
    this._SIZE_BITS = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE_ = function () {
    return this._MIN_VALUE;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE_ = function () {
    return this._MAX_VALUE;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES_ = function () {
    return this._SIZE_BYTES;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS_ = function () {
    return this._SIZE_BITS;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE_
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE_
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES_
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS_
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function listOf_0(element) {
    return arrayListOf([element]);
  }
  function copyToArray_0(collection) {
    var tmp;
    if (collection.toArray !== undefined) {
      var tmp0_unsafeCast_0 = collection.toArray();
      tmp = tmp0_unsafeCast_0;
    } else {
      {
        var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
        tmp = tmp1_unsafeCast_0;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var array = [];
    var iterator = collection.iterator_20();
    while (iterator.hasNext_6()) {
      array.push(iterator.next_6());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.addAll_2 = function (elements) {
    this.checkIsMutable_1();
    var modified = false;
    var tmp0_iterator = elements.iterator_20();
    while (tmp0_iterator.hasNext_6()) {
      var element = tmp0_iterator.next_6();
      if (this.add_6(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_1 = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last_0 = -1;
  }
  IteratorImpl.prototype.hasNext_6 = function () {
    return this._index < this._$this._get_size__7();
  };
  IteratorImpl.prototype.next_6 = function () {
    if (!this.hasNext_6())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last_0 = tmp1;
    return this._$this.get_25(this._last_0);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__0 = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0 = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_6 = function (element) {
    this.checkIsMutable_1();
    this.add_5(this._get_size__7(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_20 = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function ArrayList_init_$Init$($this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    ArrayList.call($this, []);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    ArrayList.call($this, copyToArray_0(elements));
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    Companion_getInstance().checkElementIndex(index, $this._get_size__7());
    return index;
  }
  function insertionRangeCheck($this, index) {
    Companion_getInstance().checkPositionIndex(index, $this._get_size__7());
    return index;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__7 = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_25 = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.set_1 = function (index, element) {
    this.checkIsMutable_1();
    rangeCheck(this, index);
    Unit_getInstance();
    var tmp0_apply_0 = this._array[index];
    this._array[index] = element;
    var tmp = tmp0_apply_0;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_6 = function (element) {
    this.checkIsMutable_1();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_5 = function (index, element) {
    this.checkIsMutable_1();
    var tmp0_asDynamic_0 = this._array;
    tmp0_asDynamic_0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0();
    tmp0_this._set_modCount__0(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_2 = function (elements) {
    this.checkIsMutable_1();
    if (elements.isEmpty_8())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp0_plus_0 = tmp0_this._array;
    var tmp1_plus_0 = copyToArray_0(elements);
    tmp._array = tmp0_plus_0.concat(tmp1_plus_0);
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__0();
    tmp1_this._set_modCount__0(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0 = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0();
  };
  ArrayList.prototype.checkIsMutable_1 = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function roundToInt(_this_) {
    var tmp;
    if (isNaN_0(_this_)) {
      throw IllegalArgumentException_init_$Create$('Cannot round NaN value.');
    } else if (_this_ > IntCompanionObject_getInstance()._MAX_VALUE) {
      tmp = IntCompanionObject_getInstance()._MAX_VALUE;
    } else if (_this_ < IntCompanionObject_getInstance()._MIN_VALUE) {
      tmp = IntCompanionObject_getInstance()._MIN_VALUE;
    } else {
      tmp = numberToInt(Math.round(_this_));
    }
    return tmp;
  }
  function abs(x) {
    return Math.abs(x);
  }
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__2();
  }
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__2 = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals(this._get_jClass__2(), other._get_jClass__2());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__2();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__2();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__2 = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__2 = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__2 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp0_safe_receiver = jClass.$metadata$;
    var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
    tmp._simpleName_0 = tmp0_unsafeCast_0;
  }
  SimpleKClassImpl.prototype._get_simpleName__2 = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  var functionClasses;
  function _no_name_provided__0() {
  }
  _no_name_provided__0.prototype.invoke_41 = function (it) {
    return isObject(it);
  };
  _no_name_provided__0.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__1() {
  }
  _no_name_provided__1.prototype.invoke_41 = function (it) {
    return isNumber(it);
  };
  _no_name_provided__1.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2() {
  }
  _no_name_provided__2.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__2.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3() {
  }
  _no_name_provided__3.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__3.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__4() {
  }
  _no_name_provided__4.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__4.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__5.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__6.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__7.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8() {
  }
  _no_name_provided__8.prototype.invoke_41 = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__8.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9() {
  }
  _no_name_provided__9.prototype.invoke_41 = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__9.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10() {
  }
  _no_name_provided__10.prototype.invoke_41 = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__10.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11() {
  }
  _no_name_provided__11.prototype.invoke_41 = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__11.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_41 = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__12.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_41 = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__13.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_41 = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__14.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_41 = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__15.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_41 = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__16.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_41 = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__17.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_41 = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__18.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__19.prototype.invoke_41 = function (it) {
    var tmp;
    if (typeof it === 'function') {
      tmp = it.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__19.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    var tmp_0 = tmp0_unsafeCast_0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_0());
    var tmp_1 = this;
    var tmp0_unsafeCast_0_0 = Number;
    var tmp_2 = tmp0_unsafeCast_0_0;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_1());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    var tmp_4 = tmp0_unsafeCast_0_1;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_2());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_2 = Number;
    var tmp_6 = tmp0_unsafeCast_0_2;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_3());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_3 = Number;
    var tmp_8 = tmp0_unsafeCast_0_3;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_4());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_4 = Number;
    var tmp_10 = tmp0_unsafeCast_0_4;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_5());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_5 = Number;
    var tmp_12 = tmp0_unsafeCast_0_5;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_6());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_6 = Number;
    var tmp_14 = tmp0_unsafeCast_0_6;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_7());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_7 = Array;
    var tmp_16 = tmp0_unsafeCast_0_7;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_8());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_8 = String;
    var tmp_18 = tmp0_unsafeCast_0_8;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_9());
    var tmp_19 = this;
    var tmp0_unsafeCast_0_9 = Error;
    var tmp_20 = tmp0_unsafeCast_0_9;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_10());
    var tmp_21 = this;
    var tmp0_unsafeCast_0_10 = Array;
    var tmp_22 = tmp0_unsafeCast_0_10;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_11());
    var tmp_23 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    var tmp_24 = tmp0_unsafeCast_0_11;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_12());
    var tmp_25 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    var tmp_26 = tmp0_unsafeCast_0_12;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_13());
    var tmp_27 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    var tmp_28 = tmp0_unsafeCast_0_13;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_14());
    var tmp_29 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    var tmp_30 = tmp0_unsafeCast_0_14;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_15());
    var tmp_31 = this;
    var tmp0_unsafeCast_0_15 = Array;
    var tmp_32 = tmp0_unsafeCast_0_15;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_16());
    var tmp_33 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    var tmp_34 = tmp0_unsafeCast_0_16;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_17());
    var tmp_35 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    var tmp_36 = tmp0_unsafeCast_0_17;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_18());
  }
  PrimitiveClasses_0.prototype._get_anyClass_ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass_ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass_ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass_ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass_ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass_ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass_ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass_ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass_ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass_ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass_ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass_ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass_ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass_ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass_ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass_ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass_ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass_ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass_ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass_ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp0_unsafeCast_0_3 = Function;
      var tmp_0 = tmp0_unsafeCast_0_3;
      var tmp_1 = '' + 'Function' + arity;
      var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_19(arity));
      var tmp1_asDynamic_0_5 = functionClasses;
      tmp1_asDynamic_0_5[arity] = result_2;
      tmp = result_2;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass_
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass_
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_0() {
    var i = new _no_name_provided__0();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__1();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__2();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__3();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__4();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__5();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function _no_name_provided_$factory_19($arity) {
    var i = new _no_name_provided__19($arity);
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function functionClasses$init$() {
    var tmp0_arrayOfNulls_0 = 0;
    return fillArrayVal(Array(tmp0_arrayOfNulls_0), null);
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      tmp = getKClassM_0(jClass);
    } else {
      tmp = getKClass1_0(jClass);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
        tmp = tmp0_unsafeCast_0;
        break;
      default:var tmp1_unsafeCast_0 = new ErrorKClass();
        tmp = tmp1_unsafeCast_0;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
      return tmp0_unsafeCast_0;
    }var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype.append_1 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_2 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString(value);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function Char() {
  }
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function toString(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_0(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last_1 = array.length - 1 | 0;
    if (inductionVariable <= last_1)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last_1));
    return array;
  }
  function arrayIterator(array) {
    return new _no_name_provided__20(array);
  }
  function _no_name_provided__20($array) {
    this._$array = $array;
    this._index_0 = 0;
  }
  _no_name_provided__20.prototype.hasNext_6 = function () {
    return !(this._index_0 === this._$array.length);
  };
  _no_name_provided__20.prototype.next_6 = function () {
    var tmp;
    if (!(this._index_0 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_0);
    }
    return tmp;
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator]
  };
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
    if (tmp0_unsafeCast_0 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp0_unsafeCast_0 = new Float64Array(buf);
    return tmp0_unsafeCast_0;
  }
  function bufInt32$init$() {
    var tmp0_unsafeCast_0 = new Int32Array(buf);
    return tmp0_unsafeCast_0;
  }
  function lowIndex$init$() {
    bufFloat64[0] = -1.0;
    return !(bufInt32[0] === 0) ? 1 : 0;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_20(), 24, null);
  }
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_41 = function (it) {
    return toString_0(it);
  };
  _no_name_provided__21.prototype.invoke_78 = function (p1) {
    return this.invoke_41((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_41(p1);
    };
  }
  function compareTo(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_4());
          } else {
            {
              tmp_0 = primitiveCompareTo(a, b);
            }
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        var tmp0_asDynamic_0 = 1;
        var ia = tmp0_asDynamic_0 / a;
        var tmp_1;
        var tmp1_asDynamic_0 = 1;
        if (ia === tmp1_asDynamic_0 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            {
              tmp_1 = 1;
            }
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.compareTo_1(b);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
    return tmp0_unsafeCast_0;
  }
  function toString_0(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp0_unsafeCast_0 = o.toString();
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        if (obj) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(hashCode$outlinedJsCode$(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last_1 = length - 1 | 0;
    if (inductionVariable <= last_1)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last_1));
    return hash;
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp0_asDynamic_0 = 1;
          var tmp_1 = tmp0_asDynamic_0 / obj1;
          var tmp1_asDynamic_0 = 1;
          tmp_0 = tmp_1 === tmp1_asDynamic_0 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      instance.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
    return tmp0_unsafeCast_0;
  }
  function hashCode$outlinedJsCode$(obj) {
    return String(obj);
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('' + 'lateinit property ' + name + ' has not been initialized');
  }
  function Companion_3() {
    Companion_instance_2 = this;
    this._MIN_VALUE_0 = new Long(0, -2147483648);
    this._MAX_VALUE_0 = new Long(-1, 2147483647);
    this._SIZE_BYTES_0 = 8;
    this._SIZE_BITS_0 = 64;
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function Long(low, high) {
    Companion_getInstance_2();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_30 = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_1 = function (other) {
    return this.compareTo_30(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.plus_28 = function (other) {
    return add(this, other);
  };
  Long.prototype.div_27 = function (other) {
    return divide(this, other);
  };
  Long.prototype.unaryMinus_4 = function () {
    return this.inv_0().plus_28(new Long(1, 0));
  };
  Long.prototype.inv_0 = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toInt_4 = function () {
    return this._low;
  };
  Long.prototype.toDouble_4 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_4();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_4());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_27(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_27(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_27(negate(other));
      } else {
        tmp = negate(negate(_this_).div_27(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_27(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([1.0, Math.floor(approxDouble)]))));
      }.call(this);
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_27(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_4();
        var tmp = toStringImpl(div, radix);
        var tmp0_unsafeCast_0 = rem.toString(radix);
        return tmp + tmp0_unsafeCast_0;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_27(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_4();
      var tmp1_unsafeCast_0 = intval.toString(radix);
      var digits = tmp1_unsafeCast_0;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_4();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_4();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
      tmp = tmp0_unsafeCast_0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp0_unsafeCast_0 = Array.isArray(obj);
    return tmp0_unsafeCast_0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last_1 = indexedObject.length;
      while (inductionVariable < last_1) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function asList(_this_) {
    return new ArrayList(_this_);
  }
  function reverse(_this_) {
    var midPoint = (_this_._get_size__7() / 2 | 0) - 1 | 0;
    if (midPoint < 0)
      return Unit_getInstance();
    var reverseIndex = _get_lastIndex__0(_this_);
    var inductionVariable = 0;
    if (inductionVariable <= midPoint)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = _this_.get_25(index);
        _this_.set_1(index, _this_.get_25(reverseIndex));
        Unit_getInstance();
        _this_.set_1(reverseIndex, tmp);
        Unit_getInstance();
        var tmp1 = reverseIndex;
        reverseIndex = tmp1 - 1 | 0;
        Unit_getInstance();
      }
       while (!(index === midPoint));
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(message, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  UninitializedPropertyAccessException.$metadata$ = {
    simpleName: 'UninitializedPropertyAccessException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$_0(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$_1(value_hack);
    return tmp0_unsafeCast_0;
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$_2(obj_hack, jsClass_hack);
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$_3(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$_0(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$_1(value_hack) {
    return typeof value_hack;
  }
  function jsInstanceOf$outlinedJsCode$_2(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$_3(lhs_hack, rhs_hack) {
    return lhs_hack & rhs_hack;
  }
  function Pose2d_init_$Init$(x, y, heading, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      x = 0.0;
    if (!(($mask0 & 2) === 0))
      y = 0.0;
    if (!(($mask0 & 4) === 0))
      heading = 0.0;
    Pose2d.call($this, x, y, heading);
    return $this;
  }
  function Pose2d_init_$Create$(x, y, heading, $mask0, $marker) {
    return Pose2d_init_$Init$(x, y, heading, $mask0, $marker, Object.create(Pose2d.prototype));
  }
  function Pose2d(x, y, heading) {
    var x_0 = x === void 1 ? 0.0 : x;
    var y_0 = y === void 1 ? 0.0 : y;
    var heading_0 = heading === void 1 ? 0.0 : heading;
    this._x = x_0;
    this._y = y_0;
    this._heading = heading_0;
  }
  Pose2d.prototype._get_x__1 = function () {
    return this._x;
  };
  Pose2d.prototype._get_y__0 = function () {
    return this._y;
  };
  Pose2d.prototype._get_heading_ = function () {
    return this._heading;
  };
  Pose2d.prototype.vec = function () {
    return new Vector2d(this._x, this._y);
  };
  Pose2d.prototype.headingVec = function () {
    var tmp0_cos_0 = this._heading;
    var tmp = Math.cos(tmp0_cos_0);
    var tmp1_sin_0 = this._heading;
    return new Vector2d(tmp, Math.sin(tmp1_sin_0));
  };
  Pose2d.prototype.plus = function (other) {
    return new Pose2d(this._x + other._x, this._y + other._y, this._heading + other._heading);
  };
  Pose2d.prototype.minus = function (other) {
    return new Pose2d(this._x - other._x, this._y - other._y, this._heading - other._heading);
  };
  Pose2d.prototype.times = function (scalar) {
    return new Pose2d(scalar * this._x, scalar * this._y, scalar * this._heading);
  };
  Pose2d.prototype.div = function (scalar) {
    return new Pose2d(this._x / scalar, this._y / scalar, this._heading / scalar);
  };
  Pose2d.prototype.unaryMinus = function () {
    return new Pose2d(-this._x, -this._y, -this._heading);
  };
  Pose2d.prototype.epsilonEquals = function (other) {
    return (epsilonEquals(this._x, other._x) ? epsilonEquals(this._y, other._y) : false) ? epsilonEquals(this._heading, other._heading) : false;
  };
  Pose2d.prototype.epsilonEqualsHeading = function (other) {
    return (epsilonEquals(this._x, other._x) ? epsilonEquals(this._y, other._y) : false) ? epsilonEquals(Angle_getInstance().normDelta(this._heading - other._heading), 0.0) : false;
  };
  Pose2d.prototype.toString = function () {
    return '' + '(' + this._x + ', ' + this._y + ', ' + this._heading * 180 / 3.141592653589793 + ')';
  };
  Pose2d.prototype.component1 = function () {
    return this._x;
  };
  Pose2d.prototype.component2 = function () {
    return this._y;
  };
  Pose2d.prototype.component3 = function () {
    return this._heading;
  };
  Pose2d.prototype.copy = function (x, y, heading) {
    return this.copy_0(x === void 1 ? this._x : x, y === void 1 ? this._y : y, heading === void 1 ? this._heading : heading);
  };
  Pose2d.prototype.copy_0 = function (x, y, heading) {
    return new Pose2d(x, y, heading);
  };
  Pose2d.prototype.copy$default = function (x, y, heading, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this._x;
    if (!(($mask0 & 2) === 0))
      y = this._y;
    if (!(($mask0 & 4) === 0))
      heading = this._heading;
    return this.copy_0(x, y, heading);
  };
  Pose2d.prototype.hashCode = function () {
    var result = getNumberHashCode(this._x);
    result = imul(result, 31) + getNumberHashCode(this._y) | 0;
    result = imul(result, 31) + getNumberHashCode(this._heading) | 0;
    return result;
  };
  Pose2d.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pose2d))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Pose2d ? other : THROW_CCE();
    if (!equals(this._x, tmp0_other_with_cast._x))
      return false;
    if (!equals(this._y, tmp0_other_with_cast._y))
      return false;
    if (!equals(this._heading, tmp0_other_with_cast._heading))
      return false;
    return true;
  };
  Pose2d.$metadata$ = {
    simpleName: 'Pose2d',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Pose2d.prototype, 'x', {
    configurable: true,
    get: Pose2d.prototype._get_x__1
  });
  Object.defineProperty(Pose2d.prototype, 'y', {
    configurable: true,
    get: Pose2d.prototype._get_y__0
  });
  Object.defineProperty(Pose2d.prototype, 'heading', {
    configurable: true,
    get: Pose2d.prototype._get_heading_
  });
  function Vector2d_init_$Init$(x, y, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      x = 0.0;
    if (!(($mask0 & 2) === 0))
      y = 0.0;
    Vector2d.call($this, x, y);
    return $this;
  }
  function Vector2d_init_$Create$(x, y, $mask0, $marker) {
    return Vector2d_init_$Init$(x, y, $mask0, $marker, Object.create(Vector2d.prototype));
  }
  function Companion_4() {
    Companion_instance_3 = this;
  }
  Companion_4.prototype.polar = function (r, theta) {
    var tmp = r * Math.cos(theta);
    return new Vector2d(tmp, r * Math.sin(theta));
  };
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function Vector2d(x, y) {
    Companion_getInstance_3();
    var x_0 = x === void 1 ? 0.0 : x;
    var y_0 = y === void 1 ? 0.0 : y;
    this._x_0 = x_0;
    this._y_0 = y_0;
  }
  Vector2d.prototype._get_x__1 = function () {
    return this._x_0;
  };
  Vector2d.prototype._get_y__0 = function () {
    return this._y_0;
  };
  Vector2d.prototype.norm = function () {
    var tmp0_sqrt_0 = this._x_0 * this._x_0 + this._y_0 * this._y_0;
    return Math.sqrt(tmp0_sqrt_0);
  };
  Vector2d.prototype.angle = function () {
    var tmp = Angle_getInstance();
    var tmp0_atan2_0 = this._y_0;
    var tmp1_atan2_0 = this._x_0;
    return tmp.norm(Math.atan2(tmp0_atan2_0, tmp1_atan2_0));
  };
  Vector2d.prototype.angleBetween = function (other) {
    var tmp0_acos_0 = this.dot(other) / (this.norm() * other.norm());
    return Math.acos(tmp0_acos_0);
  };
  Vector2d.prototype.plus = function (other) {
    return new Vector2d(this._x_0 + other._x_0, this._y_0 + other._y_0);
  };
  Vector2d.prototype.minus = function (other) {
    return new Vector2d(this._x_0 - other._x_0, this._y_0 - other._y_0);
  };
  Vector2d.prototype.times = function (scalar) {
    return new Vector2d(scalar * this._x_0, scalar * this._y_0);
  };
  Vector2d.prototype.div = function (scalar) {
    return new Vector2d(this._x_0 / scalar, this._y_0 / scalar);
  };
  Vector2d.prototype.unaryMinus = function () {
    return new Vector2d(-this._x_0, -this._y_0);
  };
  Vector2d.prototype.dot = function (other) {
    return this._x_0 * other._x_0 + this._y_0 * other._y_0;
  };
  Vector2d.prototype.distTo = function (other) {
    return this.minus(other).norm();
  };
  Vector2d.prototype.projectOnto = function (other) {
    return other.times(this.dot(other)).div(other.dot(other));
  };
  Vector2d.prototype.rotated = function (angle) {
    var tmp = this._x_0 * Math.cos(angle);
    var newX = tmp - this._y_0 * Math.sin(angle);
    var tmp_0 = this._x_0 * Math.sin(angle);
    var newY = tmp_0 + this._y_0 * Math.cos(angle);
    return new Vector2d(newX, newY);
  };
  Vector2d.prototype.epsilonEquals = function (other) {
    return epsilonEquals(this._x_0, other._x_0) ? epsilonEquals(this._y_0, other._y_0) : false;
  };
  Vector2d.prototype.toString = function () {
    return '' + '(' + this._x_0 + ', ' + this._y_0 + ')';
  };
  Vector2d.prototype.component1 = function () {
    return this._x_0;
  };
  Vector2d.prototype.component2 = function () {
    return this._y_0;
  };
  Vector2d.prototype.copy = function (x, y) {
    return this.copy_1(x === void 1 ? this._x_0 : x, y === void 1 ? this._y_0 : y);
  };
  Vector2d.prototype.copy_1 = function (x, y) {
    return new Vector2d(x, y);
  };
  Vector2d.prototype.copy$default_0 = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this._x_0;
    if (!(($mask0 & 2) === 0))
      y = this._y_0;
    return this.copy_1(x, y);
  };
  Vector2d.prototype.hashCode = function () {
    var result = getNumberHashCode(this._x_0);
    result = imul(result, 31) + getNumberHashCode(this._y_0) | 0;
    return result;
  };
  Vector2d.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Vector2d))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Vector2d ? other : THROW_CCE();
    if (!equals(this._x_0, tmp0_other_with_cast._x_0))
      return false;
    if (!equals(this._y_0, tmp0_other_with_cast._y_0))
      return false;
    return true;
  };
  Vector2d.$metadata$ = {
    simpleName: 'Vector2d',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Vector2d.prototype, 'x', {
    configurable: true,
    get: Vector2d.prototype._get_x__1
  });
  Object.defineProperty(Vector2d.prototype, 'y', {
    configurable: true,
    get: Vector2d.prototype._get_y__0
  });
  function Kinematics() {
    Kinematics_instance = this;
  }
  Kinematics.prototype.fieldToRobotVelocity = function (fieldPose, fieldVel) {
    var rotated = fieldVel.vec().rotated(-fieldPose._heading);
    return new Pose2d(rotated._x_0, rotated._y_0, fieldVel._heading);
  };
  Kinematics.$metadata$ = {
    simpleName: 'Kinematics',
    kind: 'object',
    interfaces: []
  };
  var Kinematics_instance;
  function Kinematics_getInstance() {
    if (Kinematics_instance == null)
      new Kinematics();
    return Kinematics_instance;
  }
  function MecanumKinematics() {
    MecanumKinematics_instance = this;
  }
  MecanumKinematics.prototype.robotToWheelVelocities = function (robotVel, trackWidth, wheelBase, lateralMultiplier) {
    var k = (trackWidth + wheelBase) / 2.0;
    return listOf([robotVel._x - lateralMultiplier * robotVel._y - k * robotVel._heading, robotVel._x + lateralMultiplier * robotVel._y - k * robotVel._heading, robotVel._x - lateralMultiplier * robotVel._y + k * robotVel._heading, robotVel._x + lateralMultiplier * robotVel._y + k * robotVel._heading]);
  };
  MecanumKinematics.$metadata$ = {
    simpleName: 'MecanumKinematics',
    kind: 'object',
    interfaces: []
  };
  var MecanumKinematics_instance;
  function MecanumKinematics_getInstance() {
    if (MecanumKinematics_instance == null)
      new MecanumKinematics();
    return MecanumKinematics_instance;
  }
  function LineSegment(start, end) {
    ParametricCurve.call(this);
    this._start = start;
    this._diff = end.minus(this._start);
  }
  LineSegment.prototype.length = function () {
    return this._diff.norm();
  };
  LineSegment.prototype.internalGet_1 = function (t) {
    return this._start.plus(this._diff.times(t));
  };
  LineSegment.prototype.internalDeriv_3 = function (t) {
    return this._diff;
  };
  LineSegment.prototype.internalSecondDeriv_3 = function (t) {
    return new Vector2d(0.0, 0.0);
  };
  LineSegment.prototype.internalThirdDeriv_1 = function (t) {
    return new Vector2d(0.0, 0.0);
  };
  LineSegment.prototype.reparam_2 = function (s) {
    return s / this.length();
  };
  LineSegment.prototype.paramDeriv_1 = function (t) {
    return 1.0 / this.length();
  };
  LineSegment.prototype.paramSecondDeriv_1 = function (t) {
    return 0.0;
  };
  LineSegment.prototype.paramThirdDeriv_1 = function (t) {
    return 0.0;
  };
  LineSegment.prototype.toString = function () {
    return '' + '(' + this._start._x_0 + '+' + this._diff._x_0 + '*t,' + this._start._y_0 + '+' + this._diff._y_0 + '*t)';
  };
  LineSegment.$metadata$ = {
    simpleName: 'LineSegment',
    kind: 'class',
    interfaces: []
  };
  function ParametricCurve() {
  }
  ParametricCurve.prototype.get = function (s, t) {
    return this.get_8(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.get_8 = function (s, t) {
    return this.internalGet_1(t);
  };
  ParametricCurve.prototype.get$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.get_8(s, t);
  };
  ParametricCurve.prototype.deriv = function (s, t) {
    return this.deriv_4(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.deriv_4 = function (s, t) {
    return this.internalDeriv_3(t).times(this.paramDeriv_1(t));
  };
  ParametricCurve.prototype.deriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.deriv_4(s, t);
  };
  ParametricCurve.prototype.secondDeriv = function (s, t) {
    return this.secondDeriv_4(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.secondDeriv_4 = function (s, t) {
    var deriv = this.internalDeriv_3(t);
    var secondDeriv = this.internalSecondDeriv_3(t);
    var paramDeriv = this.paramDeriv_1(t);
    var paramSecondDeriv = this.paramSecondDeriv_1(t);
    return secondDeriv.times(paramDeriv).times(paramDeriv).plus(deriv.times(paramSecondDeriv));
  };
  ParametricCurve.prototype.secondDeriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.secondDeriv_4(s, t);
  };
  ParametricCurve.prototype.thirdDeriv = function (s, t) {
    return this.thirdDeriv_0(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.thirdDeriv_0 = function (s, t) {
    var deriv = this.internalDeriv_3(t);
    var secondDeriv = this.internalSecondDeriv_3(t);
    var thirdDeriv = this.internalThirdDeriv_1(t);
    var paramDeriv = this.paramDeriv_1(t);
    var paramSecondDeriv = this.paramSecondDeriv_1(t);
    var paramThirdDeriv = this.paramThirdDeriv_1(t);
    return thirdDeriv.times(paramDeriv).times(paramDeriv).times(paramDeriv).plus(secondDeriv.times(paramSecondDeriv).times(paramDeriv).times(3.0)).plus(deriv.times(paramThirdDeriv));
  };
  ParametricCurve.prototype.thirdDeriv$default_0 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.thirdDeriv_0(s, t);
  };
  ParametricCurve.prototype.start = function () {
    return this.get_8(0.0, 0.0);
  };
  ParametricCurve.prototype.startDeriv = function () {
    return this.deriv_4(0.0, 0.0);
  };
  ParametricCurve.prototype.startSecondDeriv = function () {
    return this.secondDeriv_4(0.0, 0.0);
  };
  ParametricCurve.prototype.startThirdDeriv = function () {
    return this.thirdDeriv_0(0.0, 0.0);
  };
  ParametricCurve.prototype.end = function () {
    return this.get_8(this.length(), 1.0);
  };
  ParametricCurve.prototype.endDeriv = function () {
    return this.deriv_4(this.length(), 1.0);
  };
  ParametricCurve.prototype.endSecondDeriv = function () {
    return this.secondDeriv_4(this.length(), 1.0);
  };
  ParametricCurve.prototype.endThirdDeriv = function () {
    return this.thirdDeriv_0(this.length(), 1.0);
  };
  ParametricCurve.prototype.tangentAngle = function (s, t) {
    return this.tangentAngle_1(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.tangentAngle_1 = function (s, t) {
    return this.deriv_4(s, t).angle();
  };
  ParametricCurve.prototype.tangentAngle$default_1 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.tangentAngle_1(s, t);
  };
  ParametricCurve.prototype.tangentAngleDeriv = function (s, t) {
    return this.tangentAngleDeriv_0(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.tangentAngleDeriv_0 = function (s, t) {
    var deriv = this.deriv_4(s, t);
    var secondDeriv = this.secondDeriv_4(s, t);
    return deriv._x_0 * secondDeriv._y_0 - deriv._y_0 * secondDeriv._x_0;
  };
  ParametricCurve.prototype.tangentAngleDeriv$default_0 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.tangentAngleDeriv_0(s, t);
  };
  ParametricCurve.prototype.tangentAngleSecondDeriv = function (s, t) {
    return this.tangentAngleSecondDeriv_0(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.tangentAngleSecondDeriv_0 = function (s, t) {
    var deriv = this.deriv_4(s, t);
    var thirdDeriv = this.thirdDeriv_0(s, t);
    return deriv._x_0 * thirdDeriv._y_0 - deriv._y_0 * thirdDeriv._x_0;
  };
  ParametricCurve.prototype.tangentAngleSecondDeriv$default_0 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.tangentAngleSecondDeriv_0(s, t);
  };
  ParametricCurve.$metadata$ = {
    simpleName: 'ParametricCurve',
    kind: 'class',
    interfaces: []
  };
  function Path(segments) {
    this._segments = segments;
  }
  Path.prototype._get_segments__0 = function () {
    return this._segments;
  };
  Path.prototype.length = function () {
    var tmp0_sumByDouble_0 = this._segments;
    var sum_1 = 0.0;
    var indexedObject = tmp0_sumByDouble_0;
    var inductionVariable = 0;
    var last_1 = indexedObject.length;
    while (inductionVariable < last_1) {
      var element_3 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp = sum_1;
      sum_1 = tmp + element_3.length();
    }
    return sum_1;
  };
  Path.prototype.segment = function (s) {
    if (s <= 0.0) {
      return to(first(this._segments), 0.0);
    }var remainingDisplacement = s;
    var indexedObject = this._segments;
    var inductionVariable = 0;
    var last_1 = indexedObject.length;
    while (inductionVariable < last_1) {
      var segment = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (remainingDisplacement <= segment.length()) {
        return to(segment, remainingDisplacement);
      }remainingDisplacement = remainingDisplacement - segment.length();
    }
    return to(last(this._segments), last(this._segments).length());
  };
  Path.prototype.get = function (s, t) {
    return this.get_8(s, t === void 1 ? this.reparam_2(s) : t);
  };
  Path.prototype.get_8 = function (s, t) {
    var tmp0_container = this.segment(s);
    var segment = tmp0_container.component1_1();
    var remainingDisplacement = tmp0_container.component2_1();
    return segment.get_8(remainingDisplacement, t);
  };
  Path.prototype.get$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.get_8(s, t);
  };
  Path.prototype.getSingleParam = function (s) {
    return this.get_8(s, this.reparam_2(s));
  };
  Path.prototype.deriv = function (s, t) {
    return this.deriv_4(s, t === void 1 ? this.reparam_2(s) : t);
  };
  Path.prototype.deriv_4 = function (s, t) {
    var tmp0_container = this.segment(s);
    var segment = tmp0_container.component1_1();
    var remainingDisplacement = tmp0_container.component2_1();
    return segment.deriv_4(remainingDisplacement, t);
  };
  Path.prototype.deriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.deriv_4(s, t);
  };
  Path.prototype.secondDeriv = function (s, t) {
    return this.secondDeriv_4(s, t === void 1 ? this.reparam_2(s) : t);
  };
  Path.prototype.secondDeriv_4 = function (s, t) {
    var tmp0_container = this.segment(s);
    var segment = tmp0_container.component1_1();
    var remainingDisplacement = tmp0_container.component2_1();
    return segment.secondDeriv_4(remainingDisplacement, t);
  };
  Path.prototype.secondDeriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.secondDeriv_4(s, t);
  };
  Path.prototype.internalDeriv_8 = function (s, t) {
    var tmp0_container = this.segment(s);
    var segment = tmp0_container.component1_1();
    var remainingDisplacement = tmp0_container.component2_1();
    return segment.internalDeriv_8(remainingDisplacement, t);
  };
  Path.prototype.internalDeriv$default_0 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.internalDeriv_8(s, t);
  };
  Path.prototype.internalSecondDeriv_8 = function (s, t) {
    var tmp0_container = this.segment(s);
    var segment = tmp0_container.component1_1();
    var remainingDisplacement = tmp0_container.component2_1();
    return segment.internalSecondDeriv_8(remainingDisplacement, t);
  };
  Path.prototype.internalSecondDeriv$default_0 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.internalSecondDeriv_8(s, t);
  };
  Path.prototype.reparam_2 = function (s) {
    var tmp0_container = this.segment(s);
    var segment = tmp0_container.component1_1();
    var remainingDisplacement = tmp0_container.component2_1();
    return segment.reparam(remainingDisplacement);
  };
  Path.prototype.fastProject = function (queryPoint, projectGuess) {
    return this.fastProject_0(queryPoint, projectGuess === void 1 ? this.length() / 2.0 : projectGuess);
  };
  Path.prototype.fastProject_0 = function (queryPoint, projectGuess) {
    var s = projectGuess;
    var tmp0_repeat_0 = 200;
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat_0)
      do {
        var index_2 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        l$ret$1: do {
          var t_4 = this.reparam_2(s);
          var pathPoint_5 = this.get_8(s, t_4).vec();
          var deriv_6 = this.deriv_4(s, t_4).vec();
          var ds_7 = queryPoint.minus(pathPoint_5).dot(deriv_6);
          if (epsilonEquals(ds_7, 0.0)) {
            tmp$ret$0 = Unit_getInstance();
            break l$ret$1;
          }s = s + ds_7;
          if (s <= 0.0) {
            tmp$ret$0 = Unit_getInstance();
            break l$ret$1;
          }if (s >= this.length()) {
            tmp$ret$0 = Unit_getInstance();
            break l$ret$1;
          }}
         while (false);
      }
       while (inductionVariable < tmp0_repeat_0);
    var tmp3_max_0 = 0.0;
    var tmp1_min_0 = s;
    var tmp2_min_0 = this.length();
    var tmp4_max_0 = function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp1_min_0, tmp2_min_0]))));
    }.call(this);
    return function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp3_max_0, tmp4_max_0]))));
    }.call(this);
  };
  Path.prototype.fastProject$default = function (queryPoint, projectGuess, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      projectGuess = this.length() / 2.0;
    return this.fastProject_0(queryPoint, projectGuess);
  };
  Path.prototype.project = function (queryPoint, ds) {
    return this.project_0(queryPoint, ds === void 1 ? 0.25 : ds);
  };
  Path.prototype.project_0 = function (queryPoint, ds) {
    var samples = roundToInt(this.length() / ds);
    var guesses = Companion_getInstance_4().fromClosedInterval(0.0, this.length(), samples);
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(guesses, 10));
    var tmp0_iterator_1_2 = guesses.iterator_20();
    while (tmp0_iterator_1_2.hasNext_6()) {
      var item_2_3 = tmp0_iterator_1_2.next_6();
      tmp0_mapTo_0_1.add_6(this.fastProject_0(queryPoint, item_2_3));
      Unit_getInstance();
    }
    var results = tmp0_mapTo_0_1;
    var tmp$ret$0;
    l$ret$1: do {
      var iterator_1 = results.iterator_20();
      if (!iterator_1.hasNext_6()) {
        tmp$ret$0 = null;
        break l$ret$1;
      }var minElem_2 = iterator_1.next_6();
      if (!iterator_1.hasNext_6()) {
        tmp$ret$0 = minElem_2;
        break l$ret$1;
      }var tmp0__anonymous__6 = minElem_2;
      var minValue_3 = this.get$default_3(tmp0__anonymous__6, 0.0, 2, null).vec().distTo(queryPoint);
      do {
        var e_4 = iterator_1.next_6();
        var v_5 = this.get$default_3(e_4, 0.0, 2, null).vec().distTo(queryPoint);
        if (compareTo(minValue_3, v_5) > 0) {
          minElem_2 = e_4;
          minValue_3 = v_5;
        }}
       while (iterator_1.hasNext_6());
      tmp$ret$0 = minElem_2;
    }
     while (false);
    var tmp0_elvis_lhs = tmp$ret$0;
    return tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs;
  };
  Path.prototype.project$default = function (queryPoint, ds, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ds = 0.25;
    return this.project_0(queryPoint, ds);
  };
  Path.prototype.start = function () {
    return this.get$default_3(0.0, 0.0, 2, null);
  };
  Path.prototype.startDeriv = function () {
    return this.deriv$default_3(0.0, 0.0, 2, null);
  };
  Path.prototype.startSecondDeriv = function () {
    return this.secondDeriv$default_3(0.0, 0.0, 2, null);
  };
  Path.prototype.end = function () {
    var tmp = this.length();
    return this.get$default_3(tmp, 0.0, 2, null);
  };
  Path.prototype.endDeriv = function () {
    var tmp = this.length();
    return this.deriv$default_3(tmp, 0.0, 2, null);
  };
  Path.prototype.endSecondDeriv = function () {
    var tmp = this.length();
    return this.secondDeriv$default_3(tmp, 0.0, 2, null);
  };
  Path.$metadata$ = {
    simpleName: 'Path',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Path.prototype, 'segments', {
    configurable: true,
    get: Path.prototype._get_segments__0
  });
  function PathBuilderException() {
    RuntimeException_init_$Init$(this);
    captureStack(this, PathBuilderException);
  }
  PathBuilderException.$metadata$ = {
    simpleName: 'PathBuilderException',
    kind: 'class',
    interfaces: []
  };
  function PathContinuityViolationException() {
    PathBuilderException.call(this);
    captureStack(this, PathContinuityViolationException);
  }
  PathContinuityViolationException.$metadata$ = {
    simpleName: 'PathContinuityViolationException',
    kind: 'class',
    interfaces: []
  };
  function EmptyPathSegmentException() {
    PathBuilderException.call(this);
    captureStack(this, EmptyPathSegmentException);
  }
  EmptyPathSegmentException.$metadata$ = {
    simpleName: 'EmptyPathSegmentException',
    kind: 'class',
    interfaces: []
  };
  function PathBuilder_init_$Init$(startPose, startTangent, $this) {
    PathBuilder.call($this, startPose, startTangent, null, null);
    return $this;
  }
  function PathBuilder_init_$Create$(startPose, startTangent) {
    return PathBuilder_init_$Init$(startPose, startTangent, Object.create(PathBuilder.prototype));
  }
  function PathBuilder_init_$Init$_0(path, s, $this) {
    PathBuilder.call($this, null, null, path, s);
    return $this;
  }
  function PathBuilder_init_$Create$_0(path, s) {
    return PathBuilder_init_$Init$_0(path, s, Object.create(PathBuilder.prototype));
  }
  function makeLine($this, end) {
    var tmp;
    if ($this._currentPose == null) {
      var tmp_0 = ensureNotNull($this._path);
      var tmp_1 = ensureNotNull($this._s);
      tmp = tmp_0.get$default_3(tmp_1, 0.0, 2, null);
    } else {
      tmp = ensureNotNull($this._currentPose);
    }
    var start = tmp;
    if (start.vec().epsilonEquals(end)) {
      throw new EmptyPathSegmentException();
    }return new LineSegment(start.vec(), end);
  }
  function makeSpline($this, endPosition, endTangent) {
    var tmp;
    if ($this._currentPose == null) {
      var tmp_0 = ensureNotNull($this._path);
      var tmp_1 = ensureNotNull($this._s);
      tmp = tmp_0.get$default_3(tmp_1, 0.0, 2, null);
    } else {
      tmp = ensureNotNull($this._currentPose);
    }
    var startPose = tmp;
    if (startPose.vec().epsilonEquals(endPosition)) {
      throw new EmptyPathSegmentException();
    }var derivMag = startPose.vec().distTo(endPosition);
    var tmp_2;
    if ($this._currentPose == null) {
      var tmp_3 = ensureNotNull($this._path);
      var tmp_4 = ensureNotNull($this._s);
      var startDeriv = tmp_3.internalDeriv$default_0(tmp_4, 0.0, 2, null).vec();
      var startSecondDeriv = $this._path.internalSecondDeriv$default_0($this._s, 0.0, 2, null).vec();
      var tmp_5 = Knot_init_$Create$(startPose.vec(), startDeriv, startSecondDeriv);
      var tmp_6 = Companion_getInstance_3().polar(derivMag, endTangent);
      tmp_2 = to(tmp_5, Knot_init_$Create$_0(endPosition, tmp_6, null, 4, null));
    } else {
      var tmp_7 = startPose.vec();
      var tmp_8 = Companion_getInstance_3().polar(derivMag, ensureNotNull($this._currentTangent));
      var tmp_9 = Knot_init_$Create$_0(tmp_7, tmp_8, null, 4, null);
      var tmp_10 = Companion_getInstance_3().polar(derivMag, endTangent);
      tmp_2 = to(tmp_9, Knot_init_$Create$_0(endPosition, tmp_10, null, 4, null));
    }
    var tmp0_container = tmp_2;
    var startWaypoint = tmp0_container.component1_1();
    var endWaypoint = tmp0_container.component2_1();
    return QuinticSpline_init_$Create$(startWaypoint, endWaypoint, 0.0, 0.0, 0, 28, null);
  }
  function makeTangentInterpolator($this, curve) {
    if ($this._currentPose == null) {
      var prevInterpolator = ensureNotNull($this._path).segment(ensureNotNull($this._s))._first._interpolator;
      if (!(prevInterpolator instanceof TangentInterpolator)) {
        throw new PathContinuityViolationException();
      } else {
      }
      return new TangentInterpolator(prevInterpolator._offset);
    }var startHeading = curve.tangentAngle_1(0.0, 0.0);
    var interpolator = new TangentInterpolator(ensureNotNull($this._currentPose)._heading - startHeading);
    interpolator.init(curve);
    return interpolator;
  }
  function makeConstantInterpolator($this) {
    var tmp0_safe_receiver = $this._currentPose;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._heading;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw new PathContinuityViolationException();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var currentHeading = tmp;
    return new ConstantInterpolator(currentHeading);
  }
  function makeLinearInterpolator($this, endHeading) {
    var tmp0_safe_receiver = $this._currentPose;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._heading;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw new PathContinuityViolationException();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var startHeading = tmp;
    return new LinearInterpolator(startHeading, Angle_getInstance().normDelta(endHeading - startHeading));
  }
  function makeSplineInterpolator($this, endHeading) {
    var tmp;
    if ($this._currentPose == null) {
      var tmp_0 = ensureNotNull($this._path);
      var tmp_1 = ensureNotNull($this._s);
      var tmp_2 = tmp_0.get$default_3(tmp_1, 0.0, 2, null)._heading;
      var tmp_3 = $this._path.deriv$default_3($this._s, 0.0, 2, null)._heading;
      tmp = new SplineInterpolator(tmp_2, endHeading, tmp_3, $this._path.secondDeriv$default_3($this._s, 0.0, 2, null)._heading, null, null);
    } else {
      var tmp0_safe_receiver = $this._currentPose;
      var tmp_4 = ensureNotNull(tmp0_safe_receiver == null ? null : tmp0_safe_receiver._heading);
      tmp = SplineInterpolator_init_$Create$(tmp_4, endHeading, null, null, null, null, 60, null);
    }
    return tmp;
  }
  function addSegment($this, segment) {
    var tmp0_isNotEmpty_0 = $this._segments_0;
    if (!tmp0_isNotEmpty_0.isEmpty_8()) {
      var lastSegment = last_0($this._segments_0);
      if (!((lastSegment.end().epsilonEqualsHeading(segment.start()) ? lastSegment.endDeriv().epsilonEquals(segment.startDeriv()) : false) ? lastSegment.endSecondDeriv().vec().epsilonEquals(segment.startSecondDeriv().vec()) : false)) {
        throw new PathContinuityViolationException();
      }} else {
      if ($this._currentPose == null) {
        var tmp;
        var tmp_0;
        var tmp_1 = ensureNotNull($this._path);
        var tmp_2 = ensureNotNull($this._s);
        if (tmp_1.get$default_3(tmp_2, 0.0, 2, null).epsilonEqualsHeading(segment.start())) {
          tmp_0 = $this._path.deriv$default_3($this._s, 0.0, 2, null).epsilonEquals(segment.startDeriv());
        } else {
          {
            tmp_0 = false;
          }
        }
        if (tmp_0) {
          tmp = $this._path.secondDeriv$default_3($this._s, 0.0, 2, null).vec().epsilonEquals(segment.startSecondDeriv().vec());
        } else {
          {
            tmp = false;
          }
        }
        if (!tmp) {
          throw new PathContinuityViolationException();
        } else {
        }
      } else {
      }
    }
    $this._currentPose = segment.end();
    $this._currentTangent = segment.endTangentAngle();
    $this._segments_0.add_6(segment);
    Unit_getInstance();
    return $this;
  }
  function PathBuilder(startPose, startTangent, path, s) {
    this._path = path;
    this._s = s;
    this._currentPose = startPose;
    this._currentTangent = startTangent;
    var tmp = this;
    tmp._segments_0 = ArrayList_init_$Create$();
  }
  PathBuilder.prototype.lineTo = function (endPosition) {
    var line = makeLine(this, endPosition);
    var interpolator = makeTangentInterpolator(this, line);
    addSegment(this, new PathSegment(line, interpolator));
    Unit_getInstance();
    return this;
  };
  PathBuilder.prototype.lineToConstantHeading = function (endPosition) {
    return addSegment(this, new PathSegment(makeLine(this, endPosition), makeConstantInterpolator(this)));
  };
  PathBuilder.prototype.strafeTo = function (endPosition) {
    return this.lineToConstantHeading(endPosition);
  };
  PathBuilder.prototype.lineToLinearHeading = function (endPose) {
    return addSegment(this, new PathSegment(makeLine(this, endPose.vec()), makeLinearInterpolator(this, endPose._heading)));
  };
  PathBuilder.prototype.lineToSplineHeading = function (endPose) {
    return addSegment(this, new PathSegment(makeLine(this, endPose.vec()), makeSplineInterpolator(this, endPose._heading)));
  };
  PathBuilder.prototype.forward = function (distance) {
    var tmp;
    if (this._currentPose == null) {
      var tmp_0 = ensureNotNull(this._path);
      var tmp_1 = ensureNotNull(this._s);
      tmp = tmp_0.get$default_3(tmp_1, 0.0, 2, null);
    } else {
      tmp = ensureNotNull(this._currentPose);
    }
    var start = tmp;
    return this.lineTo(start.vec().plus(Companion_getInstance_3().polar(distance, start._heading)));
  };
  PathBuilder.prototype.back = function (distance) {
    this.forward(-distance);
    Unit_getInstance();
    return this;
  };
  PathBuilder.prototype.strafeLeft = function (distance) {
    var tmp;
    if (this._currentPose == null) {
      var tmp_0 = ensureNotNull(this._path);
      var tmp_1 = ensureNotNull(this._s);
      tmp = tmp_0.get$default_3(tmp_1, 0.0, 2, null);
    } else {
      tmp = ensureNotNull(this._currentPose);
    }
    var start = tmp;
    return this.strafeTo(start.vec().plus(Companion_getInstance_3().polar(distance, start._heading + 1.5707963267948966)));
  };
  PathBuilder.prototype.strafeRight = function (distance) {
    return this.strafeLeft(-distance);
  };
  PathBuilder.prototype.splineTo = function (endPosition, endTangent) {
    var spline = makeSpline(this, endPosition, endTangent);
    var interpolator = makeTangentInterpolator(this, spline);
    return addSegment(this, new PathSegment(spline, interpolator));
  };
  PathBuilder.prototype.splineToConstantHeading = function (endPosition, endTangent) {
    return addSegment(this, new PathSegment(makeSpline(this, endPosition, endTangent), makeConstantInterpolator(this)));
  };
  PathBuilder.prototype.splineToLinearHeading = function (endPose, endTangent) {
    return addSegment(this, new PathSegment(makeSpline(this, endPose.vec(), endTangent), makeLinearInterpolator(this, endPose._heading)));
  };
  PathBuilder.prototype.splineToSplineHeading = function (endPose, endTangent) {
    return addSegment(this, new PathSegment(makeSpline(this, endPose.vec(), endTangent), makeSplineInterpolator(this, endPose._heading)));
  };
  PathBuilder.prototype.build_0 = function () {
    var tmp0_toTypedArray_0 = this._segments_0;
    return new Path(copyToArray_0(tmp0_toTypedArray_0));
  };
  PathBuilder.$metadata$ = {
    simpleName: 'PathBuilder',
    kind: 'class',
    interfaces: []
  };
  function PathSegment_init_$Init$(curve, interpolator, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      interpolator = TangentInterpolator_init_$Create$(0.0, 1, null);
    }PathSegment.call($this, curve, interpolator);
    return $this;
  }
  function PathSegment_init_$Create$(curve, interpolator, $mask0, $marker) {
    return PathSegment_init_$Init$(curve, interpolator, $mask0, $marker, Object.create(PathSegment.prototype));
  }
  function PathSegment(curve, interpolator) {
    var tmp;
    if (interpolator === void 1) {
      tmp = TangentInterpolator_init_$Create$(0.0, 1, null);
    } else {
      tmp = interpolator;
    }
    var interpolator_0 = tmp;
    this._curve = curve;
    this._interpolator = interpolator_0;
    this._interpolator.init(this._curve);
  }
  PathSegment.prototype._get_curve__4 = function () {
    return this._curve;
  };
  PathSegment.prototype._get_interpolator_ = function () {
    return this._interpolator;
  };
  PathSegment.prototype.length = function () {
    return this._curve.length();
  };
  PathSegment.prototype.get = function (s, t) {
    return this.get_8(s, t === void 1 ? this.reparam(s) : t);
  };
  PathSegment.prototype.get_8 = function (s, t) {
    return new Pose2d(this._curve.get_8(s, t)._x_0, this._curve.get_8(s, t)._y_0, this._interpolator.get_8(s, t));
  };
  PathSegment.prototype.get$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam(s);
    return this.get_8(s, t);
  };
  PathSegment.prototype.deriv = function (s, t) {
    return this.deriv_4(s, t === void 1 ? this.reparam(s) : t);
  };
  PathSegment.prototype.deriv_4 = function (s, t) {
    return new Pose2d(this._curve.deriv_4(s, t)._x_0, this._curve.deriv_4(s, t)._y_0, this._interpolator.deriv_4(s, t));
  };
  PathSegment.prototype.deriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam(s);
    return this.deriv_4(s, t);
  };
  PathSegment.prototype.secondDeriv = function (s, t) {
    return this.secondDeriv_4(s, t === void 1 ? this.reparam(s) : t);
  };
  PathSegment.prototype.secondDeriv_4 = function (s, t) {
    return new Pose2d(this._curve.secondDeriv_4(s, t)._x_0, this._curve.secondDeriv_4(s, t)._y_0, this._interpolator.secondDeriv_4(s, t));
  };
  PathSegment.prototype.secondDeriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam(s);
    return this.secondDeriv_4(s, t);
  };
  PathSegment.prototype.tangentAngle = function (s, t) {
    return this.tangentAngle_1(s, t === void 1 ? this.reparam(s) : t);
  };
  PathSegment.prototype.tangentAngle_1 = function (s, t) {
    return this._curve.tangentAngle_1(s, t);
  };
  PathSegment.prototype.tangentAngle$default_1 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam(s);
    return this.tangentAngle_1(s, t);
  };
  PathSegment.prototype.internalDeriv_8 = function (s, t) {
    return new Pose2d(this._curve.internalDeriv_3(t)._x_0, this._curve.internalDeriv_3(t)._y_0, this._interpolator.internalDeriv_8(s, t));
  };
  PathSegment.prototype.internalDeriv$default_0 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam(s);
    return this.internalDeriv_8(s, t);
  };
  PathSegment.prototype.internalSecondDeriv_8 = function (s, t) {
    return new Pose2d(this._curve.internalSecondDeriv_3(t)._x_0, this._curve.internalSecondDeriv_3(t)._y_0, this._interpolator.internalDeriv_8(s, t));
  };
  PathSegment.prototype.internalSecondDeriv$default_0 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam(s);
    return this.internalSecondDeriv_8(s, t);
  };
  PathSegment.prototype.reparam = function (s) {
    return this._curve.reparam_2(s);
  };
  PathSegment.prototype.start = function () {
    return this.get$default_3(0.0, 0.0, 2, null);
  };
  PathSegment.prototype.startDeriv = function () {
    return this.deriv$default_3(0.0, 0.0, 2, null);
  };
  PathSegment.prototype.startSecondDeriv = function () {
    return this.secondDeriv$default_3(0.0, 0.0, 2, null);
  };
  PathSegment.prototype.startTangentAngle = function () {
    return this.tangentAngle$default_1(0.0, 0.0, 2, null);
  };
  PathSegment.prototype.startInternalDeriv = function () {
    return this.internalDeriv$default_0(0.0, 0.0, 2, null);
  };
  PathSegment.prototype.startInternalSecondDeriv = function () {
    return this.internalSecondDeriv$default_0(0.0, 0.0, 2, null);
  };
  PathSegment.prototype.end = function () {
    var tmp = this.length();
    return this.get$default_3(tmp, 0.0, 2, null);
  };
  PathSegment.prototype.endDeriv = function () {
    var tmp = this.length();
    return this.deriv$default_3(tmp, 0.0, 2, null);
  };
  PathSegment.prototype.endSecondDeriv = function () {
    var tmp = this.length();
    return this.secondDeriv$default_3(tmp, 0.0, 2, null);
  };
  PathSegment.prototype.endTangentAngle = function () {
    var tmp = this.length();
    return this.tangentAngle$default_1(tmp, 0.0, 2, null);
  };
  PathSegment.prototype.endInternalDeriv = function () {
    var tmp = this.length();
    return this.internalDeriv$default_0(tmp, 0.0, 2, null);
  };
  PathSegment.prototype.endInternalSecondDeriv = function () {
    var tmp = this.length();
    return this.internalSecondDeriv$default_0(tmp, 0.0, 2, null);
  };
  PathSegment.$metadata$ = {
    simpleName: 'PathSegment',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(PathSegment.prototype, 'curve', {
    configurable: true,
    get: PathSegment.prototype._get_curve__4
  });
  Object.defineProperty(PathSegment.prototype, 'interpolator', {
    configurable: true,
    get: PathSegment.prototype._get_interpolator_
  });
  function QuinticPolynomial(start, startDeriv, startSecondDeriv, end, endDeriv, endSecondDeriv) {
    var tmp = mathjs;
    var tmp0_arrayOf_0 = [0.0, 0.0, 0.0, 0.0, 0.0, 1.0];
    var tmp_0 = tmp0_arrayOf_0;
    var tmp1_arrayOf_0 = [0.0, 0.0, 0.0, 0.0, 1.0, 0.0];
    var tmp_1 = tmp1_arrayOf_0;
    var tmp2_arrayOf_0 = [0.0, 0.0, 0.0, 2.0, 0.0, 0.0];
    var tmp_2 = tmp2_arrayOf_0;
    var tmp3_arrayOf_0 = [1.0, 1.0, 1.0, 1.0, 1.0, 1.0];
    var tmp_3 = tmp3_arrayOf_0;
    var tmp4_arrayOf_0 = [5.0, 4.0, 3.0, 2.0, 1.0, 0.0];
    var tmp_4 = tmp4_arrayOf_0;
    var tmp5_arrayOf_0 = [20.0, 12.0, 6.0, 2.0, 0.0, 0.0];
    var tmp6_arrayOf_0 = [tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp5_arrayOf_0];
    var tmp_5 = tmp6_arrayOf_0;
    var tmp7_arrayOf_0 = [start, startDeriv, startSecondDeriv, end, endDeriv, endSecondDeriv];
    var tmp_6 = tmp.lusolve(tmp_5, tmp7_arrayOf_0);
    var coeff = isArray(tmp_6) ? tmp_6 : THROW_CCE();
    this._a = coeff[0][0];
    this._b = coeff[1][0];
    this._c = coeff[2][0];
    this._d = coeff[3][0];
    this._e = coeff[4][0];
    this._f = coeff[5][0];
  }
  QuinticPolynomial.prototype.get_14 = function (t) {
    return (this._a * t + this._b) * (t * t * t * t) + this._c * (t * t * t) + this._d * (t * t) + this._e * t + this._f;
  };
  QuinticPolynomial.prototype.deriv_3 = function (t) {
    return (5 * this._a * t + 4 * this._b) * (t * t * t) + (3 * this._c * t + 2 * this._d) * t + this._e;
  };
  QuinticPolynomial.prototype.secondDeriv_3 = function (t) {
    return (20 * this._a * t + 12 * this._b) * (t * t) + 6 * this._c * t + 2 * this._d;
  };
  QuinticPolynomial.prototype.thirdDeriv_1 = function (t) {
    return (60 * this._a * t + 24 * this._b) * t + 6 * this._c;
  };
  QuinticPolynomial.prototype.toString = function () {
    return '' + this._a + '*t^5+' + this._b + '*t^4+' + this._c + '*t^3+' + this._d + '*t^2+' + this._e + '*t+' + this._f;
  };
  QuinticPolynomial.$metadata$ = {
    simpleName: 'QuinticPolynomial',
    kind: 'class',
    interfaces: []
  };
  function Knot_init_$Init$(pos, deriv, secondDeriv, $this) {
    Knot.call($this, pos._x_0, pos._y_0, deriv._x_0, deriv._y_0, secondDeriv._x_0, secondDeriv._y_0);
    return $this;
  }
  function Knot_init_$Create$(pos, deriv, secondDeriv) {
    return Knot_init_$Init$(pos, deriv, secondDeriv, Object.create(Knot.prototype));
  }
  function Knot_init_$Init$_0(pos, deriv, secondDeriv, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      deriv = Vector2d_init_$Create$(0.0, 0.0, 3, null);
    }if (!(($mask0 & 4) === 0)) {
      secondDeriv = Vector2d_init_$Create$(0.0, 0.0, 3, null);
    }Knot_init_$Init$(pos, deriv, secondDeriv, $this);
    return $this;
  }
  function Knot_init_$Create$_0(pos, deriv, secondDeriv, $mask0, $marker) {
    return Knot_init_$Init$_0(pos, deriv, secondDeriv, $mask0, $marker, Object.create(Knot.prototype));
  }
  function QuinticSpline_init_$Init$(start, end, maxDeltaK, maxSegmentLength, maxDepth, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      maxDeltaK = 0.01;
    if (!(($mask0 & 8) === 0))
      maxSegmentLength = 0.25;
    if (!(($mask0 & 16) === 0))
      maxDepth = 30;
    QuinticSpline.call($this, start, end, maxDeltaK, maxSegmentLength, maxDepth);
    return $this;
  }
  function QuinticSpline_init_$Create$(start, end, maxDeltaK, maxSegmentLength, maxDepth, $mask0, $marker) {
    return QuinticSpline_init_$Init$(start, end, maxDeltaK, maxSegmentLength, maxDepth, $mask0, $marker, Object.create(QuinticSpline.prototype));
  }
  function Knot(x, y, dx, dy, d2x, d2y) {
    this._x_1 = x;
    this._y_1 = y;
    this._dx = dx;
    this._dy = dy;
    this._d2x = d2x;
    this._d2y = d2y;
  }
  Knot.$metadata$ = {
    simpleName: 'Knot',
    kind: 'class',
    interfaces: []
  };
  function approxLength($this, v1, v2, v3) {
    var w1 = v2.minus(v1).times(2.0);
    var w2 = v2.minus(v3).times(2.0);
    var det = w1._x_0 * w2._y_0 - w2._x_0 * w1._y_0;
    var chord = v1.distTo(v3);
    var tmp;
    if (epsilonEquals(det, 0.0)) {
      tmp = chord;
    } else {
      var x1 = v1._x_0 * v1._x_0 + v1._y_0 * v1._y_0;
      var x2 = v2._x_0 * v2._x_0 + v2._y_0 * v2._y_0;
      var x3 = v3._x_0 * v3._x_0 + v3._y_0 * v3._y_0;
      var y1 = x2 - x1;
      var y2 = x2 - x3;
      var origin = (new Vector2d(y1 * w2._y_0 - y2 * w1._y_0, y2 * w1._x_0 - y1 * w2._x_0)).div(det);
      var radius = origin.distTo(v1);
      var tmp_0 = 2.0 * radius;
      var tmp0_asin_0 = chord / (2.0 * radius);
      tmp = tmp_0 * Math.asin(tmp0_asin_0);
    }
    return tmp;
  }
  function internalCurvature($this, t) {
    var deriv = $this.internalDeriv_3(t);
    var derivNorm = deriv.norm();
    var secondDeriv = $this.internalSecondDeriv_3(t);
    var tmp0_abs_0 = secondDeriv._x_0 * deriv._y_0 - deriv._x_0 * secondDeriv._y_0;
    return Math.abs(tmp0_abs_0) / (derivNorm * derivNorm * derivNorm);
  }
  function parameterize($this, tLo, tHi, vLo, vHi, depth) {
    var tMid = 0.5 * (tLo + tHi);
    var vMid = $this.internalGet_1(tMid);
    var tmp0_abs_0 = internalCurvature($this, tLo) - internalCurvature($this, tHi);
    var deltaK = Math.abs(tmp0_abs_0);
    var segmentLength = approxLength($this, vLo, vMid, vHi);
    if (depth < $this._maxDepth ? deltaK > $this._maxDeltaK ? true : segmentLength > $this._maxSegmentLength : false) {
      parameterize($this, tLo, tMid, vLo, vMid, depth + 1 | 0);
      parameterize($this, tMid, tHi, vMid, vHi, depth + 1 | 0);
    } else {
      var tmp0_this = $this;
      tmp0_this._length = tmp0_this._length + segmentLength;
      $this._sSamples.add_6($this._length);
      Unit_getInstance();
      $this._tSamples.add_6(tHi);
      Unit_getInstance();
    }
  }
  function parameterize$default($this, tLo, tHi, vLo, vHi, depth, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      vLo = $this.internalGet_1(tLo);
    if (!(($mask0 & 16) === 0))
      vHi = $this.internalGet_1(tHi);
    if (!(($mask0 & 32) === 0))
      depth = 0;
    return parameterize($this, tLo, tHi, vLo, vHi, depth);
  }
  function interp($this, s, sLo, sHi, tLo, tHi) {
    return tLo + (s - sLo) * (tHi - tLo) / (sHi - sLo);
  }
  function QuinticSpline(start, end, maxDeltaK, maxSegmentLength, maxDepth) {
    ParametricCurve.call(this);
    this._maxDeltaK = maxDeltaK;
    this._maxSegmentLength = maxSegmentLength;
    this._maxDepth = maxDepth;
    this._x_2 = new QuinticPolynomial(start._x_1, start._dx, start._d2x, end._x_1, end._dx, end._d2x);
    this._y_2 = new QuinticPolynomial(start._y_1, start._dy, start._d2y, end._y_1, end._dy, end._d2y);
    this._length = 0.0;
    this._sSamples = mutableListOf([0.0]);
    this._tSamples = mutableListOf([0.0]);
    parameterize$default(this, 0.0, 1.0, null, null, 0, 56, null);
  }
  QuinticSpline.prototype.internalGet_1 = function (t) {
    return new Vector2d(this._x_2.get_14(t), this._y_2.get_14(t));
  };
  QuinticSpline.prototype.internalDeriv_3 = function (t) {
    return new Vector2d(this._x_2.deriv_3(t), this._y_2.deriv_3(t));
  };
  QuinticSpline.prototype.internalSecondDeriv_3 = function (t) {
    return new Vector2d(this._x_2.secondDeriv_3(t), this._y_2.secondDeriv_3(t));
  };
  QuinticSpline.prototype.internalThirdDeriv_1 = function (t) {
    return new Vector2d(this._x_2.thirdDeriv_1(t), this._y_2.thirdDeriv_1(t));
  };
  QuinticSpline.prototype.reparam_2 = function (s) {
    if (s <= 0.0)
      return 0.0;
    if (s >= this._length)
      return 1.0;
    var lo = 0;
    var hi = this._sSamples._get_size__7();
    while (lo <= hi) {
      var mid = (hi + lo | 0) / 2 | 0;
      if (s < this._sSamples.get_25(mid)) {
        hi = mid - 1 | 0;
      } else if (s > this._sSamples.get_25(mid)) {
        lo = mid + 1 | 0;
      } else {
        return this._tSamples.get_25(mid);
      }
    }
    return interp(this, s, this._sSamples.get_25(lo), this._sSamples.get_25(hi), this._tSamples.get_25(lo), this._tSamples.get_25(hi));
  };
  QuinticSpline.prototype.paramDeriv_1 = function (t) {
    var deriv = this.internalDeriv_3(t);
    var tmp0_sqrt_0 = deriv._x_0 * deriv._x_0 + deriv._y_0 * deriv._y_0;
    return 1.0 / Math.sqrt(tmp0_sqrt_0);
  };
  QuinticSpline.prototype.paramSecondDeriv_1 = function (t) {
    var deriv = this.internalDeriv_3(t);
    var secondDeriv = this.internalSecondDeriv_3(t);
    var numerator = -(deriv._x_0 * secondDeriv._x_0 + deriv._y_0 * secondDeriv._y_0);
    var denominator = deriv._x_0 * deriv._x_0 + deriv._y_0 * deriv._y_0;
    return numerator / (denominator * denominator);
  };
  QuinticSpline.prototype.paramThirdDeriv_1 = function (t) {
    var deriv = this.internalDeriv_3(t);
    var secondDeriv = this.internalSecondDeriv_3(t);
    var thirdDeriv = this.internalThirdDeriv_1(t);
    var firstNumeratorSqrt = 2.0 * (deriv._x_0 * secondDeriv._x_0 + deriv._y_0 * secondDeriv._y_0);
    var secondNumerator = secondDeriv._x_0 * secondDeriv._x_0 + secondDeriv._y_0 * secondDeriv._y_0 + deriv._x_0 * thirdDeriv._x_0 + deriv._y_0 * thirdDeriv._y_0;
    var denominator = deriv._x_0 * deriv._x_0 + deriv._y_0 * deriv._y_0;
    var tmp = firstNumeratorSqrt * firstNumeratorSqrt;
    var tmp0_pow_0 = 3.5;
    var tmp_0 = tmp / Math.pow(denominator, tmp0_pow_0);
    var tmp1_pow_0 = 2.5;
    return tmp_0 - secondNumerator / Math.pow(denominator, tmp1_pow_0);
  };
  QuinticSpline.prototype.length = function () {
    return this._length;
  };
  QuinticSpline.prototype.toString = function () {
    return '' + '(' + this._x_2 + ',' + this._y_2 + ')';
  };
  QuinticSpline.$metadata$ = {
    simpleName: 'QuinticSpline',
    kind: 'class',
    interfaces: []
  };
  function ConstantInterpolator(heading) {
    HeadingInterpolator.call(this);
    this._heading_0 = heading;
  }
  ConstantInterpolator.prototype.internalGet_6 = function (s, t) {
    return Angle_getInstance().norm(this._heading_0);
  };
  ConstantInterpolator.prototype.internalDeriv_8 = function (s, t) {
    return 0.0;
  };
  ConstantInterpolator.prototype.internalSecondDeriv_8 = function (s, t) {
    return 0.0;
  };
  ConstantInterpolator.$metadata$ = {
    simpleName: 'ConstantInterpolator',
    kind: 'class',
    interfaces: []
  };
  function HeadingInterpolator() {
  }
  HeadingInterpolator.prototype._set_curve__3 = function (_set___) {
    this._curve_0 = _set___;
  };
  HeadingInterpolator.prototype._get_curve__4 = function () {
    var tmp = this._curve_0;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('curve');
    }
  };
  HeadingInterpolator.prototype.init = function (curve) {
    this._curve_0 = curve;
  };
  HeadingInterpolator.prototype.get = function (s, t) {
    return this.get_8(s, t === void 1 ? this._get_curve__4().reparam_2(s) : t);
  };
  HeadingInterpolator.prototype.get_8 = function (s, t) {
    return this.internalGet_6(s, t);
  };
  HeadingInterpolator.prototype.get$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this._get_curve__4().reparam_2(s);
    return this.get_8(s, t);
  };
  HeadingInterpolator.prototype.deriv = function (s, t) {
    return this.deriv_4(s, t === void 1 ? this._get_curve__4().reparam_2(s) : t);
  };
  HeadingInterpolator.prototype.deriv_4 = function (s, t) {
    return this.internalDeriv_8(s, t);
  };
  HeadingInterpolator.prototype.deriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this._get_curve__4().reparam_2(s);
    return this.deriv_4(s, t);
  };
  HeadingInterpolator.prototype.secondDeriv = function (s, t) {
    return this.secondDeriv_4(s, t === void 1 ? this._get_curve__4().reparam_2(s) : t);
  };
  HeadingInterpolator.prototype.secondDeriv_4 = function (s, t) {
    return this.internalSecondDeriv_8(s, t);
  };
  HeadingInterpolator.prototype.secondDeriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this._get_curve__4().reparam_2(s);
    return this.secondDeriv_4(s, t);
  };
  HeadingInterpolator.prototype.start = function () {
    return this.get_8(0.0, 0.0);
  };
  HeadingInterpolator.prototype.startDeriv = function () {
    return this.deriv_4(0.0, 0.0);
  };
  HeadingInterpolator.prototype.startSecondDeriv = function () {
    return this.secondDeriv_4(0.0, 0.0);
  };
  HeadingInterpolator.prototype.end = function () {
    return this.get_8(this._get_curve__4().length(), 1.0);
  };
  HeadingInterpolator.prototype.endDeriv = function () {
    return this.deriv_4(this._get_curve__4().length(), 1.0);
  };
  HeadingInterpolator.prototype.endSecondDeriv = function () {
    return this.secondDeriv_4(this._get_curve__4().length(), 1.0);
  };
  HeadingInterpolator.$metadata$ = {
    simpleName: 'HeadingInterpolator',
    kind: 'class',
    interfaces: []
  };
  function LinearInterpolator(startHeading, angle) {
    HeadingInterpolator.call(this);
    this._startHeading = startHeading;
    this._angle = angle;
  }
  LinearInterpolator.prototype.internalGet_6 = function (s, t) {
    return Angle_getInstance().norm(this._startHeading + s / this._get_curve__4().length() * this._angle);
  };
  LinearInterpolator.prototype.internalDeriv_8 = function (s, t) {
    return this._angle / this._get_curve__4().length();
  };
  LinearInterpolator.prototype.internalSecondDeriv_8 = function (s, t) {
    return 0.0;
  };
  LinearInterpolator.$metadata$ = {
    simpleName: 'LinearInterpolator',
    kind: 'class',
    interfaces: []
  };
  function SplineInterpolator_init_$Init$(startHeading, endHeading, startHeadingDeriv, startHeadingSecondDeriv, endHeadingDeriv, endHeadingSecondDeriv, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      startHeadingDeriv = null;
    if (!(($mask0 & 8) === 0))
      startHeadingSecondDeriv = null;
    if (!(($mask0 & 16) === 0))
      endHeadingDeriv = null;
    if (!(($mask0 & 32) === 0))
      endHeadingSecondDeriv = null;
    SplineInterpolator.call($this, startHeading, endHeading, startHeadingDeriv, startHeadingSecondDeriv, endHeadingDeriv, endHeadingSecondDeriv);
    return $this;
  }
  function SplineInterpolator_init_$Create$(startHeading, endHeading, startHeadingDeriv, startHeadingSecondDeriv, endHeadingDeriv, endHeadingSecondDeriv, $mask0, $marker) {
    return SplineInterpolator_init_$Init$(startHeading, endHeading, startHeadingDeriv, startHeadingSecondDeriv, endHeadingDeriv, endHeadingSecondDeriv, $mask0, $marker, Object.create(SplineInterpolator.prototype));
  }
  function _get_headingSpline_($this) {
    var tmp = $this._headingSpline;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('headingSpline');
    }
  }
  function SplineInterpolator(startHeading, endHeading, startHeadingDeriv, startHeadingSecondDeriv, endHeadingDeriv, endHeadingSecondDeriv) {
    HeadingInterpolator.call(this);
    this._startHeading_0 = startHeading;
    this._endHeading = endHeading;
    this._startHeadingDeriv = startHeadingDeriv;
    this._startHeadingSecondDeriv = startHeadingSecondDeriv;
    this._endHeadingDeriv = endHeadingDeriv;
    this._endHeadingSecondDeriv = endHeadingSecondDeriv;
    var tmp = this;
    tmp._tangentInterpolator = TangentInterpolator_init_$Create$(0.0, 1, null);
  }
  SplineInterpolator.prototype.init = function (curve) {
    HeadingInterpolator.prototype.init.call(this, curve);
    this._tangentInterpolator.init(this._get_curve__4());
    var len = curve.length();
    var headingDelta = Angle_getInstance().normDelta(this._endHeading - this._startHeading_0);
    var tmp = this;
    var tmp0_elvis_lhs = this._startHeadingDeriv;
    var tmp_0 = (tmp0_elvis_lhs == null ? curve.tangentAngleDeriv_0(0.0, 0.0) : tmp0_elvis_lhs) * len;
    var tmp1_elvis_lhs = this._startHeadingSecondDeriv;
    var tmp_1 = (tmp1_elvis_lhs == null ? curve.tangentAngleSecondDeriv_0(0.0, 0.0) : tmp1_elvis_lhs) * len * len;
    var tmp2_elvis_lhs = this._endHeadingDeriv;
    var tmp_2 = (tmp2_elvis_lhs == null ? curve.tangentAngleDeriv_0(len, 1.0) : tmp2_elvis_lhs) * len;
    var tmp3_elvis_lhs = this._endHeadingSecondDeriv;
    tmp._headingSpline = new QuinticPolynomial(0.0, tmp_0, tmp_1, headingDelta, tmp_2, (tmp3_elvis_lhs == null ? curve.tangentAngleSecondDeriv_0(len, 1.0) : tmp3_elvis_lhs) * len * len);
  };
  SplineInterpolator.prototype.internalGet_6 = function (s, t) {
    return Angle_getInstance().norm(this._startHeading_0 + _get_headingSpline_(this).get_14(s / this._get_curve__4().length()));
  };
  SplineInterpolator.prototype.internalDeriv_8 = function (s, t) {
    var len = this._get_curve__4().length();
    return _get_headingSpline_(this).deriv_3(s / len) / len;
  };
  SplineInterpolator.prototype.internalSecondDeriv_8 = function (s, t) {
    var len = this._get_curve__4().length();
    return _get_headingSpline_(this).secondDeriv_3(s / len) / (len * len);
  };
  SplineInterpolator.$metadata$ = {
    simpleName: 'SplineInterpolator',
    kind: 'class',
    interfaces: []
  };
  function TangentInterpolator_init_$Init$(offset, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      offset = 0.0;
    TangentInterpolator.call($this, offset);
    return $this;
  }
  function TangentInterpolator_init_$Create$(offset, $mask0, $marker) {
    return TangentInterpolator_init_$Init$(offset, $mask0, $marker, Object.create(TangentInterpolator.prototype));
  }
  function TangentInterpolator(offset) {
    HeadingInterpolator.call(this);
    this._offset = offset;
  }
  TangentInterpolator.prototype.internalGet_6 = function (s, t) {
    return Angle_getInstance().norm(this._offset + this._get_curve__4().tangentAngle_1(s, t));
  };
  TangentInterpolator.prototype.internalDeriv_8 = function (s, t) {
    return this._get_curve__4().tangentAngleDeriv_0(s, t);
  };
  TangentInterpolator.prototype.internalSecondDeriv_8 = function (s, t) {
    return this._get_curve__4().tangentAngleSecondDeriv_0(s, t);
  };
  TangentInterpolator.$metadata$ = {
    simpleName: 'TangentInterpolator',
    kind: 'class',
    interfaces: []
  };
  function AccelerationConstraint() {
  }
  AccelerationConstraint.$metadata$ = {
    simpleName: 'AccelerationConstraint',
    kind: 'interface',
    interfaces: []
  };
  function MotionProfile(segments) {
    this._segments_1 = toMutableList(segments);
  }
  MotionProfile.prototype._get_segments__0 = function () {
    return this._segments_1;
  };
  MotionProfile.prototype.get = function (t) {
    var tmp1_max_0 = 0.0;
    var tmp0_min_0 = this.duration();
    var tmp2_max_0 = function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([t, tmp0_min_0]))));
    }.call(this);
    var remainingTime = function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp1_max_0, tmp2_max_0]))));
    }.call(this);
    var tmp0_iterator = this._segments_1.iterator_20();
    while (tmp0_iterator.hasNext_6()) {
      var segment = tmp0_iterator.next_6();
      if (remainingTime <= segment._dt) {
        return segment.get(remainingTime);
      }remainingTime = remainingTime - segment._dt;
    }
    var tmp1_safe_receiver = lastOrNull(this._segments_1);
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.end();
    var tmp;
    if (tmp2_elvis_lhs == null) {
      tmp = MotionState_init_$Create$(0.0, 0.0, 0.0, 0.0, 12, null);
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  MotionProfile.prototype.duration = function () {
    var tmp0_sumByDouble_0 = this._segments_1;
    var sum_1 = 0.0;
    var tmp0_iterator_2 = tmp0_sumByDouble_0.iterator_20();
    while (tmp0_iterator_2.hasNext_6()) {
      var element_3 = tmp0_iterator_2.next_6();
      var tmp = sum_1;
      sum_1 = tmp + element_3._dt;
    }
    return sum_1;
  };
  MotionProfile.prototype.reversed = function () {
    var tmp0_map_0 = this._segments_1;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_20();
    while (tmp0_iterator_1_2.hasNext_6()) {
      var item_2_3 = tmp0_iterator_1_2.next_6();
      tmp0_mapTo_0_1.add_6(item_2_3.reversed());
      Unit_getInstance();
    }
    var tmp1_toTypedArray_0 = reversed(tmp0_mapTo_0_1);
    return new MotionProfile(copyToArray_0(tmp1_toTypedArray_0));
  };
  MotionProfile.prototype.flipped = function () {
    var tmp0_map_0 = this._segments_1;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_20();
    while (tmp0_iterator_1_2.hasNext_6()) {
      var item_2_3 = tmp0_iterator_1_2.next_6();
      tmp0_mapTo_0_1.add_6(item_2_3.flipped());
      Unit_getInstance();
    }
    var tmp1_toTypedArray_0 = tmp0_mapTo_0_1;
    return new MotionProfile(copyToArray_0(tmp1_toTypedArray_0));
  };
  MotionProfile.prototype.start = function () {
    return this.get(0.0);
  };
  MotionProfile.prototype.end = function () {
    return this.get(this.duration());
  };
  MotionProfile.prototype.plus = function (other) {
    var builder = new MotionProfileBuilder(this.start());
    builder.appendProfile(this);
    Unit_getInstance();
    builder.appendProfile(other);
    Unit_getInstance();
    return builder.build_0();
  };
  MotionProfile.$metadata$ = {
    simpleName: 'MotionProfile',
    kind: 'class',
    interfaces: []
  };
  function MotionProfileBuilder(start) {
    this._currentState = start;
    var tmp = this;
    tmp._segments_2 = ArrayList_init_$Create$();
  }
  MotionProfileBuilder.prototype.appendJerkControl = function (jerk, dt) {
    var segment = new MotionSegment(new MotionState(this._currentState._x_3, this._currentState._v, this._currentState._a_0, jerk), dt);
    this._segments_2.add_6(segment);
    Unit_getInstance();
    this._currentState = segment.end();
    return this;
  };
  MotionProfileBuilder.prototype.appendAccelerationControl = function (accel, dt) {
    var tmp = this._currentState._x_3;
    var tmp_0 = this._currentState._v;
    var segment = new MotionSegment(MotionState_init_$Create$(tmp, tmp_0, accel, 0.0, 8, null), dt);
    this._segments_2.add_6(segment);
    Unit_getInstance();
    this._currentState = segment.end();
    return this;
  };
  MotionProfileBuilder.prototype.appendProfile = function (profile) {
    var tmp0_iterator = profile._segments_1.iterator_20();
    while (tmp0_iterator.hasNext_6()) {
      var segment = tmp0_iterator.next_6();
      if (epsilonEquals(segment._start_0._j, 0.0)) {
        this.appendAccelerationControl(segment._start_0._a_0, segment._dt);
        Unit_getInstance();
      } else {
        this.appendJerkControl(segment._start_0._j, segment._dt);
        Unit_getInstance();
      }
    }
    return this;
  };
  MotionProfileBuilder.prototype.build_0 = function () {
    var tmp0_toTypedArray_0 = this._segments_2;
    return new MotionProfile(copyToArray_0(tmp0_toTypedArray_0));
  };
  MotionProfileBuilder.$metadata$ = {
    simpleName: 'MotionProfileBuilder',
    kind: 'class',
    interfaces: []
  };
  function generateAccelProfile($this, start, maxVel, maxAccel, maxJerk) {
    var tmp;
    if (epsilonEquals(maxJerk, 0.0)) {
      var tmp0_abs_0 = start._v - maxVel;
      var deltaT1 = Math.abs(tmp0_abs_0) / maxAccel;
      var builder = new MotionProfileBuilder(start);
      if (start._v > maxVel) {
        builder.appendAccelerationControl(-maxAccel, deltaT1);
        Unit_getInstance();
      } else {
        builder.appendAccelerationControl(maxAccel, deltaT1);
        Unit_getInstance();
      }
      tmp = builder.build_0();
    } else {
      var tmp_0;
      if (start._a_0 > maxAccel) {
        var deltaT1_0 = (start._a_0 - maxAccel) / maxJerk;
        var deltaV1 = start._a_0 * deltaT1_0 - 0.5 * maxJerk * deltaT1_0 * deltaT1_0;
        tmp_0 = new Pair(deltaT1_0, deltaV1);
      } else {
        var deltaT1_1 = (maxAccel - start._a_0) / maxJerk;
        var deltaV1_0 = start._a_0 * deltaT1_1 + 0.5 * maxJerk * deltaT1_1 * deltaT1_1;
        tmp_0 = new Pair(deltaT1_1, deltaV1_0);
      }
      var tmp0_container = tmp_0;
      var deltaT1_2 = tmp0_container.component1_1();
      var deltaV1_1 = tmp0_container.component2_1();
      var deltaT3 = maxAccel / maxJerk;
      var deltaV3 = maxAccel * deltaT3 - 0.5 * maxJerk * deltaT3 * deltaT3;
      var deltaV2 = maxVel - start._v - deltaV1_1 - deltaV3;
      var tmp_1;
      if (deltaV2 < 0.0) {
        var tmp_2;
        if (start._a_0 > maxAccel ? true : start._v - maxVel > start._a_0 * start._a_0 / (2 * maxJerk)) {
          var newDeltaT1 = (start._a_0 + maxAccel) / maxJerk;
          var newDeltaV1 = start._a_0 * newDeltaT1 - 0.5 * maxJerk * newDeltaT1 * newDeltaT1;
          var newDeltaV2 = maxVel - start._v - newDeltaV1 + deltaV3;
          var tmp_3;
          if (newDeltaV2 > 0.0) {
            var roots = MathUtil_getInstance().solveQuadratic(-maxJerk, 2 * start._a_0, start._v - maxVel - start._a_0 * start._a_0 / (2 * maxJerk));
            var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
            var tmp0_iterator_1_2 = roots.iterator_20();
            while (tmp0_iterator_1_2.hasNext_6()) {
              var element_2_3 = tmp0_iterator_1_2.next_6();
              if (element_2_3 >= 0.0) {
                tmp0_filterTo_0_1.add_6(element_2_3);
                Unit_getInstance();
              } else {
              }
            }
            var finalDeltaT1 = ensureNotNull(minOrNull(tmp0_filterTo_0_1));
            var finalDeltaT3 = finalDeltaT1 - start._a_0 / maxJerk;
            tmp_3 = (new MotionProfileBuilder(start)).appendJerkControl(-maxJerk, finalDeltaT1).appendJerkControl(maxJerk, finalDeltaT3).build_0();
          } else {
            var newDeltaT2 = newDeltaV2 / -maxAccel;
            tmp_3 = (new MotionProfileBuilder(start)).appendJerkControl(-maxJerk, newDeltaT1).appendJerkControl(0.0, newDeltaT2).appendJerkControl(maxJerk, deltaT3).build_0();
          }
          tmp_2 = tmp_3;
        } else {
          var roots_0 = MathUtil_getInstance().solveQuadratic(maxJerk, 2 * start._a_0, start._v - maxVel + start._a_0 * start._a_0 / (2 * maxJerk));
          var tmp0_filterTo_0_1_0 = ArrayList_init_$Create$();
          var tmp0_iterator_1_2_0 = roots_0.iterator_20();
          while (tmp0_iterator_1_2_0.hasNext_6()) {
            var element_2_3_0 = tmp0_iterator_1_2_0.next_6();
            if (element_2_3_0 >= 0.0) {
              tmp0_filterTo_0_1_0.add_6(element_2_3_0);
              Unit_getInstance();
            } else {
            }
          }
          var newDeltaT1_0 = ensureNotNull(minOrNull(tmp0_filterTo_0_1_0));
          var newDeltaT3 = newDeltaT1_0 + start._a_0 / maxJerk;
          tmp_2 = (new MotionProfileBuilder(start)).appendJerkControl(maxJerk, newDeltaT1_0).appendJerkControl(-maxJerk, newDeltaT3).build_0();
        }
        tmp_1 = tmp_2;
      } else {
        var deltaT2 = deltaV2 / maxAccel;
        var builder_0 = new MotionProfileBuilder(start);
        if (start._a_0 > maxAccel) {
          builder_0.appendJerkControl(-maxJerk, deltaT1_2);
          Unit_getInstance();
        } else {
          builder_0.appendJerkControl(maxJerk, deltaT1_2);
          Unit_getInstance();
        }
        tmp_1 = builder_0.appendJerkControl(0.0, deltaT2).appendJerkControl(-maxJerk, deltaT3).build_0();
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function generateAccelProfile$default($this, start, maxVel, maxAccel, maxJerk, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      maxJerk = 0.0;
    return generateAccelProfile($this, start, maxVel, maxAccel, maxJerk);
  }
  function forwardPass($this, start, displacements, constraints) {
    var forwardStates = ArrayList_init_$Create$();
    var dx = displacements._step_1;
    var lastState = start;
    var tmp0_forEach_0 = dropLast(zip(displacements, constraints), 1);
    var tmp0_iterator_1 = tmp0_forEach_0.iterator_20();
    while (tmp0_iterator_1.hasNext_6()) {
      var element_2 = tmp0_iterator_1.next_6();
      var displacement_4 = element_2.component1_1();
      var constraint_5 = element_2.component2_1();
      var maxVel_6 = constraint_5._maxVel;
      var maxAccel_7 = constraint_5._maxAccel;
      var tmp;
      if (lastState._v >= maxVel_6) {
        var state_8 = MotionState_init_$Create$(displacement_4, maxVel_6, 0.0, 0.0, 8, null);
        forwardStates.add_6(new Pair(state_8, dx));
        Unit_getInstance();
        tmp = afterDisplacement(MotionProfileGenerator_getInstance(), state_8, dx);
      } else {
        var tmp0_sqrt_0_10 = lastState._v * lastState._v + 2 * maxAccel_7 * dx;
        var finalVel_9 = Math.sqrt(tmp0_sqrt_0_10);
        var tmp_0;
        if (finalVel_9 <= maxVel_6) {
          var tmp_1 = lastState._v;
          var state_11 = MotionState_init_$Create$(displacement_4, tmp_1, maxAccel_7, 0.0, 8, null);
          forwardStates.add_6(new Pair(state_11, dx));
          Unit_getInstance();
          tmp_0 = afterDisplacement(MotionProfileGenerator_getInstance(), state_11, dx);
        } else {
          var accelDx_12 = (maxVel_6 * maxVel_6 - lastState._v * lastState._v) / (2 * maxAccel_7);
          var tmp_2 = lastState._v;
          var accelState_13 = MotionState_init_$Create$(displacement_4, tmp_2, maxAccel_7, 0.0, 8, null);
          var tmp_3 = displacement_4 + accelDx_12;
          var coastState_14 = MotionState_init_$Create$(tmp_3, maxVel_6, 0.0, 0.0, 8, null);
          forwardStates.add_6(new Pair(accelState_13, accelDx_12));
          Unit_getInstance();
          forwardStates.add_6(new Pair(coastState_14, dx - accelDx_12));
          Unit_getInstance();
          tmp_0 = afterDisplacement(MotionProfileGenerator_getInstance(), coastState_14, dx - accelDx_12);
        }
        tmp = tmp_0;
      }
      lastState = tmp;
    }
    return forwardStates;
  }
  function afterDisplacement($this, state, dx) {
    var discriminant = state._v * state._v + 2 * state._a_0 * dx;
    var tmp;
    if (epsilonEquals(discriminant, 0.0)) {
      var tmp_0 = state._x_3 + dx;
      tmp = MotionState_init_$Create$(tmp_0, 0.0, state._a_0, 0.0, 8, null);
    } else {
      var tmp_1 = state._x_3 + dx;
      var tmp_2 = Math.sqrt(discriminant);
      tmp = MotionState_init_$Create$(tmp_1, tmp_2, state._a_0, 0.0, 8, null);
    }
    return tmp;
  }
  function intersection($this, state1, state2) {
    return (state1._v * state1._v - state2._v * state2._v) / (2 * state2._a_0 - 2 * state1._a_0);
  }
  function sam$profile_VelocityConstraint$0(function_0) {
    this._function = function_0;
  }
  sam$profile_VelocityConstraint$0.prototype.get_14 = function (s) {
    return this._function(s);
  };
  sam$profile_VelocityConstraint$0.$metadata$ = {
    simpleName: 'sam$profile_VelocityConstraint$0',
    kind: 'class',
    interfaces: [VelocityConstraint]
  };
  function sam$profile_AccelerationConstraint$0(function_0) {
    this._function_0 = function_0;
  }
  sam$profile_AccelerationConstraint$0.prototype.get_14 = function (s) {
    return this._function_0(s);
  };
  sam$profile_AccelerationConstraint$0.$metadata$ = {
    simpleName: 'sam$profile_AccelerationConstraint$0',
    kind: 'class',
    interfaces: [AccelerationConstraint]
  };
  function _no_name_provided__22($velocityConstraint) {
    this._$velocityConstraint = $velocityConstraint;
  }
  _no_name_provided__22.prototype.invoke_77 = function (it) {
    return this._$velocityConstraint.get_14(-it);
  };
  _no_name_provided__22.prototype.invoke_78 = function (p1) {
    return this.invoke_77((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23($accelerationConstraint) {
    this._$accelerationConstraint = $accelerationConstraint;
  }
  _no_name_provided__23.prototype.invoke_77 = function (it) {
    return this._$accelerationConstraint.get_14(-it);
  };
  _no_name_provided__23.prototype.invoke_78 = function (p1) {
    return this.invoke_77((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function MotionProfileGenerator() {
    MotionProfileGenerator_instance = this;
  }
  MotionProfileGenerator.prototype.generateSimpleMotionProfile = function (start, goal, maxVel, maxAccel, maxJerk, overshoot) {
    return this.generateSimpleMotionProfile_0(start, goal, maxVel, maxAccel, maxJerk === void 1 ? 0.0 : maxJerk, overshoot === void 1 ? false : overshoot);
  };
  MotionProfileGenerator.prototype.generateSimpleMotionProfile_0 = function (start, goal, maxVel, maxAccel, maxJerk, overshoot) {
    if (goal._x_3 < start._x_3) {
      var tmp = start.flipped();
      var tmp_0 = goal.flipped();
      return this.generateSimpleMotionProfile$default(tmp, tmp_0, maxVel, maxAccel, maxJerk, false, 32, null).flipped();
    }if (epsilonEquals(maxJerk, 0.0)) {
      var requiredAccel = (goal._v * goal._v - start._v * start._v) / (2 * (goal._x_3 - start._x_3));
      var accelProfile = generateAccelProfile$default(this, start, maxVel, maxAccel, 0.0, 16, null);
      var decelProfile = generateAccelProfile(this, new MotionState(goal._x_3, goal._v, -goal._a_0, goal._j), maxVel, maxAccel, maxJerk).reversed();
      var noCoastProfile = accelProfile.plus(decelProfile);
      var remainingDistance = goal._x_3 - noCoastProfile.end()._x_3;
      if (remainingDistance >= 0.0) {
        var deltaT2 = remainingDistance / maxVel;
        return (new MotionProfileBuilder(start)).appendProfile(accelProfile).appendAccelerationControl(0.0, deltaT2).appendProfile(decelProfile).build_0();
      } else {
        if (Math.abs(requiredAccel) > maxAccel) {
          var tmp_1;
          if (overshoot) {
            var tmp_2 = noCoastProfile.end();
            tmp_1 = noCoastProfile.plus(this.generateSimpleMotionProfile$default(tmp_2, goal, maxVel, maxAccel, 0.0, true, 16, null));
          } else {
            var dt = (goal._v - start._v) / requiredAccel;
            tmp_1 = (new MotionProfileBuilder(start)).appendAccelerationControl(requiredAccel, dt).build_0();
          }
          return tmp_1;
        } else {
          if (start._v > maxVel ? goal._v > maxVel : false) {
            var roots = MathUtil_getInstance().solveQuadratic(-maxAccel, 2 * start._v, (goal._v * goal._v - start._v * start._v) / (2 * maxAccel) - goal._x_3 + start._x_3);
            var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
            var tmp0_iterator_1_2 = roots.iterator_20();
            while (tmp0_iterator_1_2.hasNext_6()) {
              var element_2_3 = tmp0_iterator_1_2.next_6();
              if (element_2_3 >= 0.0) {
                tmp0_filterTo_0_1.add_6(element_2_3);
                Unit_getInstance();
              } else {
              }
            }
            var deltaT1 = ensureNotNull(minOrNull(tmp0_filterTo_0_1));
            var tmp0_abs_0 = start._v - goal._v;
            var deltaT3 = Math.abs(tmp0_abs_0) / maxAccel + deltaT1;
            return (new MotionProfileBuilder(start)).appendAccelerationControl(-maxAccel, deltaT1).appendAccelerationControl(maxAccel, deltaT3).build_0();
          } else {
            {
              var roots_0 = MathUtil_getInstance().solveQuadratic(maxAccel, 2 * start._v, (start._v * start._v - goal._v * goal._v) / (2 * maxAccel) - goal._x_3 + start._x_3);
              var tmp0_filterTo_0_1_0 = ArrayList_init_$Create$();
              var tmp0_iterator_1_2_0 = roots_0.iterator_20();
              while (tmp0_iterator_1_2_0.hasNext_6()) {
                var element_2_3_0 = tmp0_iterator_1_2_0.next_6();
                if (element_2_3_0 >= 0.0) {
                  tmp0_filterTo_0_1_0.add_6(element_2_3_0);
                  Unit_getInstance();
                } else {
                }
              }
              var deltaT1_0 = ensureNotNull(minOrNull(tmp0_filterTo_0_1_0));
              var tmp1_abs_0 = start._v - goal._v;
              var deltaT3_0 = Math.abs(tmp1_abs_0) / maxAccel + deltaT1_0;
              return (new MotionProfileBuilder(start)).appendAccelerationControl(maxAccel, deltaT1_0).appendAccelerationControl(-maxAccel, deltaT3_0).build_0();
            }
          }
        }
      }
    } else {
      var accelerationProfile = generateAccelProfile(this, start, maxVel, maxAccel, maxJerk);
      var decelerationProfile = generateAccelProfile(this, new MotionState(goal._x_3, goal._v, -goal._a_0, goal._j), maxVel, maxAccel, maxJerk).reversed();
      var noCoastProfile_0 = accelerationProfile.plus(decelerationProfile);
      var remainingDistance_0 = goal._x_3 - noCoastProfile_0.end()._x_3;
      if (remainingDistance_0 >= 0.0) {
        var deltaT4 = remainingDistance_0 / maxVel;
        return (new MotionProfileBuilder(start)).appendProfile(accelerationProfile).appendJerkControl(0.0, deltaT4).appendProfile(decelerationProfile).build_0();
      } else {
        var upperBound = maxVel;
        var lowerBound = 0.0;
        var iterations = 0;
        while (iterations < 1000) {
          var peakVel = (upperBound + lowerBound) / 2;
          var searchAccelProfile = generateAccelProfile(this, start, peakVel, maxAccel, maxJerk);
          var searchDecelProfile = generateAccelProfile(this, goal, peakVel, maxAccel, maxJerk).reversed();
          var searchProfile = searchAccelProfile.plus(searchDecelProfile);
          var error = goal._x_3 - searchProfile.end()._x_3;
          if (epsilonEquals(error, 0.0)) {
            return searchProfile;
          }if (error > 0.0) {
            lowerBound = peakVel;
          } else {
            upperBound = peakVel;
          }
          var tmp0 = iterations;
          iterations = tmp0 + 1 | 0;
          Unit_getInstance();
        }
        var tmp_3;
        if (overshoot) {
          tmp_3 = noCoastProfile_0.plus(this.generateSimpleMotionProfile_0(noCoastProfile_0.end(), goal, maxVel, maxAccel, maxJerk, true));
        } else {
          tmp_3 = this.generateSimpleMotionProfile$default(start, goal, maxVel, maxAccel, 0.0, false, 16, null);
        }
        return tmp_3;
      }
    }
  };
  MotionProfileGenerator.prototype.generateSimpleMotionProfile$default = function (start, goal, maxVel, maxAccel, maxJerk, overshoot, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      maxJerk = 0.0;
    if (!(($mask0 & 32) === 0))
      overshoot = false;
    return this.generateSimpleMotionProfile_0(start, goal, maxVel, maxAccel, maxJerk, overshoot);
  };
  MotionProfileGenerator.prototype.generateMotionProfile = function (start, goal, velocityConstraint, accelerationConstraint, resolution) {
    return this.generateMotionProfile_0(start, goal, velocityConstraint, accelerationConstraint, resolution === void 1 ? 0.25 : resolution);
  };
  MotionProfileGenerator.prototype.generateMotionProfile_0 = function (start, goal, velocityConstraint, accelerationConstraint, resolution) {
    if (goal._x_3 < start._x_3) {
      var tmp = start.flipped();
      var tmp_0 = goal.flipped();
      var tmp_1 = _no_name_provided_$factory_21(velocityConstraint);
      var tmp_2 = new sam$profile_VelocityConstraint$0(tmp_1);
      var tmp_3 = _no_name_provided_$factory_22(accelerationConstraint);
      return this.generateMotionProfile_0(tmp, tmp_0, tmp_2, new sam$profile_AccelerationConstraint$0(tmp_3), resolution).flipped();
    }var length = goal._x_3 - start._x_3;
    var tmp0_ceil_0 = length / resolution;
    var samples = numberToInt(Math.ceil(tmp0_ceil_0));
    var s = Companion_getInstance_4().fromClosedInterval(0.0, length, samples);
    var tmp1_map_0 = s.plus_30(start._x_3);
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map_0, 10));
    var tmp0_iterator_1_2 = tmp1_map_0.iterator_20();
    while (tmp0_iterator_1_2.hasNext_6()) {
      var item_2_3 = tmp0_iterator_1_2.next_6();
      tmp0_mapTo_0_1.add_6(new EvaluatedConstraint(velocityConstraint.get_14(item_2_3), accelerationConstraint.get_14(item_2_3)));
      Unit_getInstance();
    }
    var constraintsList = tmp0_mapTo_0_1;
    var tmp2_map_0 = forwardPass(this, MotionState_init_$Create$(0.0, start._v, start._a_0, 0.0, 8, null), s, constraintsList);
    var tmp0_mapTo_0_1_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map_0, 10));
    var tmp0_iterator_1_2_0 = tmp2_map_0.iterator_20();
    while (tmp0_iterator_1_2_0.hasNext_6()) {
      var item_2_3_0 = tmp0_iterator_1_2_0.next_6();
      var motionState_5 = item_2_3_0.component1_1();
      var dx_6 = item_2_3_0.component2_1();
      var tmp_4 = motionState_5._x_3 + start._x_3;
      tmp0_mapTo_0_1_0.add_6(new Pair(MotionState_init_$Create$(tmp_4, motionState_5._v, motionState_5._a_0, 0.0, 8, null), dx_6));
      Unit_getInstance();
    }
    var forwardStates = toMutableList_0(tmp0_mapTo_0_1_0);
    var tmp3_map_0 = forwardPass(this, MotionState_init_$Create$(0.0, goal._v, goal._a_0, 0.0, 8, null), s, reversed(constraintsList));
    var tmp0_mapTo_0_1_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp3_map_0, 10));
    var tmp0_iterator_1_2_1 = tmp3_map_0.iterator_20();
    while (tmp0_iterator_1_2_1.hasNext_6()) {
      var item_2_3_1 = tmp0_iterator_1_2_1.next_6();
      var motionState_5_0 = item_2_3_1.component1_1();
      var dx_6_0 = item_2_3_1.component2_1();
      tmp0_mapTo_0_1_1.add_6(new Pair(afterDisplacement(MotionProfileGenerator_getInstance(), motionState_5_0, dx_6_0), dx_6_0));
      Unit_getInstance();
    }
    var tmp4_map_0 = tmp0_mapTo_0_1_1;
    var tmp0_mapTo_0_1_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp4_map_0, 10));
    var tmp0_iterator_1_2_2 = tmp4_map_0.iterator_20();
    while (tmp0_iterator_1_2_2.hasNext_6()) {
      var item_2_3_2 = tmp0_iterator_1_2_2.next_6();
      var motionState_5_1 = item_2_3_2.component1_1();
      var dx_6_1 = item_2_3_2.component2_1();
      var tmp_5 = goal._x_3 - motionState_5_1._x_3;
      var tmp_6 = -motionState_5_1._a_0;
      tmp0_mapTo_0_1_2.add_6(new Pair(MotionState_init_$Create$(tmp_5, motionState_5_1._v, tmp_6, 0.0, 8, null), dx_6_1));
      Unit_getInstance();
    }
    var backwardStates = toMutableList_0(reversed(tmp0_mapTo_0_1_2));
    var finalStates = ArrayList_init_$Create$();
    var i = 0;
    while (i < forwardStates._get_size__7() ? i < backwardStates._get_size__7() : false) {
      var tmp0_container = forwardStates.get_25(i);
      var forwardStartState = tmp0_container.component1_1();
      var forwardDx = tmp0_container.component2_1();
      var tmp1_container = backwardStates.get_25(i);
      var backwardStartState = tmp1_container.component1_1();
      var backwardDx = tmp1_container.component2_1();
      if (!epsilonEquals(forwardDx, backwardDx)) {
        if (forwardDx > backwardDx) {
          forwardStates.add_5(i + 1 | 0, new Pair(afterDisplacement(this, forwardStartState, backwardDx), forwardDx - backwardDx));
          forwardDx = backwardDx;
        } else {
          backwardStates.add_5(i + 1 | 0, new Pair(afterDisplacement(this, backwardStartState, forwardDx), backwardDx - forwardDx));
          backwardDx = forwardDx;
        }
      }var forwardEndState = afterDisplacement(this, forwardStartState, forwardDx);
      var backwardEndState = afterDisplacement(this, backwardStartState, backwardDx);
      if (forwardStartState._v <= backwardStartState._v) {
        if (forwardEndState._v <= backwardEndState._v) {
          finalStates.add_6(new Pair(forwardStartState, forwardDx));
          Unit_getInstance();
        } else {
          var intersection_0 = intersection(this, forwardStartState, backwardStartState);
          finalStates.add_6(new Pair(forwardStartState, intersection_0));
          Unit_getInstance();
          finalStates.add_6(new Pair(afterDisplacement(this, backwardStartState, intersection_0), backwardDx - intersection_0));
          Unit_getInstance();
        }
      } else {
        if (forwardEndState._v >= backwardEndState._v) {
          finalStates.add_6(new Pair(backwardStartState, backwardDx));
          Unit_getInstance();
        } else {
          var intersection_1 = intersection(this, forwardStartState, backwardStartState);
          finalStates.add_6(new Pair(backwardStartState, intersection_1));
          Unit_getInstance();
          finalStates.add_6(new Pair(afterDisplacement(this, forwardStartState, intersection_1), forwardDx - intersection_1));
          Unit_getInstance();
        }
      }
      var tmp2 = i;
      i = tmp2 + 1 | 0;
      Unit_getInstance();
    }
    var motionSegments = ArrayList_init_$Create$();
    var tmp3_iterator = finalStates.iterator_20();
    while (tmp3_iterator.hasNext_6()) {
      var tmp4_loop_parameter = tmp3_iterator.next_6();
      var state = tmp4_loop_parameter.component1_1();
      var stateDx = tmp4_loop_parameter.component2_1();
      var tmp_7;
      if (epsilonEquals(state._a_0, 0.0)) {
        tmp_7 = stateDx / state._v;
      } else {
        var discriminant = state._v * state._v + 2 * state._a_0 * stateDx;
        var tmp_8;
        if (epsilonEquals(discriminant, 0.0)) {
          tmp_8 = -state._v / state._a_0;
        } else {
          tmp_8 = (Math.sqrt(discriminant) - state._v) / state._a_0;
        }
        tmp_7 = tmp_8;
      }
      var dt = tmp_7;
      motionSegments.add_6(new MotionSegment(state, dt));
      Unit_getInstance();
    }
    return new MotionProfile(copyToArray_0(motionSegments));
  };
  MotionProfileGenerator.prototype.generateMotionProfile$default = function (start, goal, velocityConstraint, accelerationConstraint, resolution, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      resolution = 0.25;
    return this.generateMotionProfile_0(start, goal, velocityConstraint, accelerationConstraint, resolution);
  };
  MotionProfileGenerator.$metadata$ = {
    simpleName: 'MotionProfileGenerator',
    kind: 'object',
    interfaces: []
  };
  var MotionProfileGenerator_instance;
  function MotionProfileGenerator_getInstance() {
    if (MotionProfileGenerator_instance == null)
      new MotionProfileGenerator();
    return MotionProfileGenerator_instance;
  }
  function EvaluatedConstraint(maxVel, maxAccel) {
    this._maxVel = maxVel;
    this._maxAccel = maxAccel;
  }
  EvaluatedConstraint.prototype.toString = function () {
    return '' + 'EvaluatedConstraint(maxVel=' + this._maxVel + ', maxAccel=' + this._maxAccel + ')';
  };
  EvaluatedConstraint.prototype.hashCode = function () {
    var result = getNumberHashCode(this._maxVel);
    result = imul(result, 31) + getNumberHashCode(this._maxAccel) | 0;
    return result;
  };
  EvaluatedConstraint.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EvaluatedConstraint))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof EvaluatedConstraint ? other : THROW_CCE();
    if (!equals(this._maxVel, tmp0_other_with_cast._maxVel))
      return false;
    if (!equals(this._maxAccel, tmp0_other_with_cast._maxAccel))
      return false;
    return true;
  };
  EvaluatedConstraint.$metadata$ = {
    simpleName: 'EvaluatedConstraint',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_21($velocityConstraint) {
    var i = new _no_name_provided__22($velocityConstraint);
    return function (p1) {
      return i.invoke_77(p1);
    };
  }
  function _no_name_provided_$factory_22($accelerationConstraint) {
    var i = new _no_name_provided__23($accelerationConstraint);
    return function (p1) {
      return i.invoke_77(p1);
    };
  }
  function MotionSegment(start, dt) {
    this._start_0 = start;
    this._dt = dt;
  }
  MotionSegment.prototype._get_start_ = function () {
    return this._start_0;
  };
  MotionSegment.prototype._get_dt_ = function () {
    return this._dt;
  };
  MotionSegment.prototype.get = function (t) {
    return this._start_0.get(t);
  };
  MotionSegment.prototype.end = function () {
    return this._start_0.get(this._dt);
  };
  MotionSegment.prototype.reversed = function () {
    var end = this.end();
    var state = new MotionState(end._x_3, end._v, -end._a_0, end._j);
    return new MotionSegment(state, this._dt);
  };
  MotionSegment.prototype.flipped = function () {
    return new MotionSegment(this._start_0.flipped(), this._dt);
  };
  MotionSegment.prototype.toString = function () {
    return '' + '(' + this._start_0 + ', ' + this._dt + ')';
  };
  MotionSegment.$metadata$ = {
    simpleName: 'MotionSegment',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(MotionSegment.prototype, 'start', {
    configurable: true,
    get: MotionSegment.prototype._get_start_
  });
  Object.defineProperty(MotionSegment.prototype, 'dt', {
    configurable: true,
    get: MotionSegment.prototype._get_dt_
  });
  function MotionState_init_$Init$(x, v, a, j, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      a = 0.0;
    if (!(($mask0 & 8) === 0))
      j = 0.0;
    MotionState.call($this, x, v, a, j);
    return $this;
  }
  function MotionState_init_$Create$(x, v, a, j, $mask0, $marker) {
    return MotionState_init_$Init$(x, v, a, j, $mask0, $marker, Object.create(MotionState.prototype));
  }
  function MotionState(x, v, a, j) {
    var a_0 = a === void 1 ? 0.0 : a;
    var j_0 = j === void 1 ? 0.0 : j;
    this._x_3 = x;
    this._v = v;
    this._a_0 = a_0;
    this._j = j_0;
  }
  MotionState.prototype._get_x__1 = function () {
    return this._x_3;
  };
  MotionState.prototype._get_v_ = function () {
    return this._v;
  };
  MotionState.prototype._get_a_ = function () {
    return this._a_0;
  };
  MotionState.prototype._get_j_ = function () {
    return this._j;
  };
  MotionState.prototype.get = function (t) {
    return new MotionState(this._x_3 + this._v * t + this._a_0 / 2 * t * t + this._j / 6 * t * t * t, this._v + this._a_0 * t + this._j / 2 * t * t, this._a_0 + this._j * t, this._j);
  };
  MotionState.prototype.flipped = function () {
    return new MotionState(-this._x_3, -this._v, -this._a_0, -this._j);
  };
  MotionState.$metadata$ = {
    simpleName: 'MotionState',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(MotionState.prototype, 'x', {
    configurable: true,
    get: MotionState.prototype._get_x__1
  });
  Object.defineProperty(MotionState.prototype, 'v', {
    configurable: true,
    get: MotionState.prototype._get_v_
  });
  Object.defineProperty(MotionState.prototype, 'a', {
    configurable: true,
    get: MotionState.prototype._get_a_
  });
  Object.defineProperty(MotionState.prototype, 'j', {
    configurable: true,
    get: MotionState.prototype._get_j_
  });
  function VelocityConstraint() {
  }
  VelocityConstraint.$metadata$ = {
    simpleName: 'VelocityConstraint',
    kind: 'interface',
    interfaces: []
  };
  function DisplacementMarker(producer, callback) {
    this._producer = producer;
    this._callback = callback;
  }
  DisplacementMarker.prototype._get_producer__0 = function () {
    return this._producer;
  };
  DisplacementMarker.prototype._get_callback__2 = function () {
    return this._callback;
  };
  DisplacementMarker.prototype.component1 = function () {
    return this._producer;
  };
  DisplacementMarker.prototype.component2 = function () {
    return this._callback;
  };
  DisplacementMarker.prototype.copy = function (producer, callback) {
    return this.copy_2(producer === void 1 ? this._producer : producer, callback === void 1 ? this._callback : callback);
  };
  DisplacementMarker.prototype.copy_2 = function (producer, callback) {
    return new DisplacementMarker(producer, callback);
  };
  DisplacementMarker.prototype.copy$default_1 = function (producer, callback, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      producer = this._producer;
    if (!(($mask0 & 2) === 0))
      callback = this._callback;
    return this.copy_2(producer, callback);
  };
  DisplacementMarker.prototype.toString = function () {
    return '' + 'DisplacementMarker(producer=' + this._producer + ', callback=' + this._callback + ')';
  };
  DisplacementMarker.prototype.hashCode = function () {
    var result = hashCode(this._producer);
    result = imul(result, 31) + hashCode(this._callback) | 0;
    return result;
  };
  DisplacementMarker.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DisplacementMarker))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DisplacementMarker ? other : THROW_CCE();
    if (!equals(this._producer, tmp0_other_with_cast._producer))
      return false;
    if (!equals(this._callback, tmp0_other_with_cast._callback))
      return false;
    return true;
  };
  DisplacementMarker.$metadata$ = {
    simpleName: 'DisplacementMarker',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(DisplacementMarker.prototype, 'producer', {
    configurable: true,
    get: DisplacementMarker.prototype._get_producer__0
  });
  Object.defineProperty(DisplacementMarker.prototype, 'callback', {
    configurable: true,
    get: DisplacementMarker.prototype._get_callback__2
  });
  function MarkerCallback() {
  }
  MarkerCallback.prototype.onMarkerReached = function () {
  };
  MarkerCallback.$metadata$ = {
    simpleName: 'MarkerCallback',
    kind: 'class',
    interfaces: []
  };
  function SpatialMarker(point, callback) {
    this._point = point;
    this._callback_0 = callback;
  }
  SpatialMarker.prototype._get_point_ = function () {
    return this._point;
  };
  SpatialMarker.prototype._get_callback__2 = function () {
    return this._callback_0;
  };
  SpatialMarker.prototype.component1 = function () {
    return this._point;
  };
  SpatialMarker.prototype.component2 = function () {
    return this._callback_0;
  };
  SpatialMarker.prototype.copy = function (point, callback) {
    return this.copy_3(point === void 1 ? this._point : point, callback === void 1 ? this._callback_0 : callback);
  };
  SpatialMarker.prototype.copy_3 = function (point, callback) {
    return new SpatialMarker(point, callback);
  };
  SpatialMarker.prototype.copy$default_2 = function (point, callback, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      point = this._point;
    if (!(($mask0 & 2) === 0))
      callback = this._callback_0;
    return this.copy_3(point, callback);
  };
  SpatialMarker.prototype.toString = function () {
    return '' + 'SpatialMarker(point=' + this._point + ', callback=' + this._callback_0 + ')';
  };
  SpatialMarker.prototype.hashCode = function () {
    var result = this._point.hashCode();
    result = imul(result, 31) + hashCode(this._callback_0) | 0;
    return result;
  };
  SpatialMarker.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpatialMarker))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof SpatialMarker ? other : THROW_CCE();
    if (!this._point.equals(tmp0_other_with_cast._point))
      return false;
    if (!equals(this._callback_0, tmp0_other_with_cast._callback_0))
      return false;
    return true;
  };
  SpatialMarker.$metadata$ = {
    simpleName: 'SpatialMarker',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(SpatialMarker.prototype, 'point', {
    configurable: true,
    get: SpatialMarker.prototype._get_point_
  });
  Object.defineProperty(SpatialMarker.prototype, 'callback', {
    configurable: true,
    get: SpatialMarker.prototype._get_callback__2
  });
  function TemporalMarker(producer, callback) {
    this._producer_0 = producer;
    this._callback_1 = callback;
  }
  TemporalMarker.prototype._get_producer__0 = function () {
    return this._producer_0;
  };
  TemporalMarker.prototype._get_callback__2 = function () {
    return this._callback_1;
  };
  TemporalMarker.prototype.component1 = function () {
    return this._producer_0;
  };
  TemporalMarker.prototype.component2 = function () {
    return this._callback_1;
  };
  TemporalMarker.prototype.copy = function (producer, callback) {
    return this.copy_4(producer === void 1 ? this._producer_0 : producer, callback === void 1 ? this._callback_1 : callback);
  };
  TemporalMarker.prototype.copy_4 = function (producer, callback) {
    return new TemporalMarker(producer, callback);
  };
  TemporalMarker.prototype.copy$default_3 = function (producer, callback, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      producer = this._producer_0;
    if (!(($mask0 & 2) === 0))
      callback = this._callback_1;
    return this.copy_4(producer, callback);
  };
  TemporalMarker.prototype.toString = function () {
    return '' + 'TemporalMarker(producer=' + this._producer_0 + ', callback=' + this._callback_1 + ')';
  };
  TemporalMarker.prototype.hashCode = function () {
    var result = hashCode(this._producer_0);
    result = imul(result, 31) + hashCode(this._callback_1) | 0;
    return result;
  };
  TemporalMarker.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TemporalMarker))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TemporalMarker ? other : THROW_CCE();
    if (!equals(this._producer_0, tmp0_other_with_cast._producer_0))
      return false;
    if (!equals(this._callback_1, tmp0_other_with_cast._callback_1))
      return false;
    return true;
  };
  TemporalMarker.$metadata$ = {
    simpleName: 'TemporalMarker',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(TemporalMarker.prototype, 'producer', {
    configurable: true,
    get: TemporalMarker.prototype._get_producer__0
  });
  Object.defineProperty(TemporalMarker.prototype, 'callback', {
    configurable: true,
    get: TemporalMarker.prototype._get_callback__2
  });
  function TimeProducer() {
  }
  TimeProducer.$metadata$ = {
    simpleName: 'TimeProducer',
    kind: 'interface',
    interfaces: []
  };
  function Trajectory_init_$Init$(path, profile, markers, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0)) {
      markers = [];
    }Trajectory.call($this, path, profile, markers);
    return $this;
  }
  function Trajectory_init_$Create$(path, profile, markers, $mask0, $marker) {
    return Trajectory_init_$Init$(path, profile, markers, $mask0, $marker, Object.create(Trajectory.prototype));
  }
  function Trajectory(path, profile, markers) {
    var tmp;
    if (markers === void 1) {
      tmp = [];
    } else {
      tmp = markers;
    }
    var markers_0 = tmp;
    this._path_0 = path;
    this._profile = profile;
    this._markers = markers_0;
  }
  Trajectory.prototype._get_path_ = function () {
    return this._path_0;
  };
  Trajectory.prototype._get_profile_ = function () {
    return this._profile;
  };
  Trajectory.prototype._get_markers_ = function () {
    return this._markers;
  };
  Trajectory.prototype.duration = function () {
    return this._profile.duration();
  };
  Trajectory.prototype.get = function (time) {
    var tmp = this._profile.get(time)._x_3;
    return this._path_0.get$default_3(tmp, 0.0, 2, null);
  };
  Trajectory.prototype.velocity = function (time) {
    var motionState = this._profile.get(time);
    return this._path_0.deriv$default_3(motionState._x_3, 0.0, 2, null).times(motionState._v);
  };
  Trajectory.prototype.acceleration = function (time) {
    var motionState = this._profile.get(time);
    var tmp = this._path_0.secondDeriv$default_3(motionState._x_3, 0.0, 2, null).times(motionState._v).times(motionState._v);
    return tmp.plus(this._path_0.deriv$default_3(motionState._x_3, 0.0, 2, null).times(motionState._a_0));
  };
  Trajectory.prototype.start = function () {
    return this._path_0.get_8(0.0, 0.0);
  };
  Trajectory.prototype.end = function () {
    return this._path_0.get_8(this._path_0.length(), 1.0);
  };
  Trajectory.$metadata$ = {
    simpleName: 'Trajectory',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Trajectory.prototype, 'path', {
    configurable: true,
    get: Trajectory.prototype._get_path_
  });
  Object.defineProperty(Trajectory.prototype, 'profile', {
    configurable: true,
    get: Trajectory.prototype._get_profile_
  });
  Object.defineProperty(Trajectory.prototype, 'markers', {
    configurable: true,
    get: Trajectory.prototype._get_markers_
  });
  function addSegment_0($this, add_0, velConstraintOverride, accelConstraintOverride) {
    var start = $this._pathBuilder.build_0().length();
    add_0();
    var end = $this._pathBuilder.build_0().length();
    if (!(velConstraintOverride == null)) {
      $this._velConstraintOverrides.add_6(new IntervalVelocityConstraint(start, end, velConstraintOverride));
      Unit_getInstance();
    }if (!(accelConstraintOverride == null)) {
      $this._accelConstraintOverrides.add_6(new IntervalAccelerationConstraint(start, end, accelConstraintOverride));
      Unit_getInstance();
    }return $this;
  }
  function addTemporalMarker($this, scale, offset, callback) {
    return addTemporalMarker_0($this, _no_name_provided_$factory_36(scale, offset), callback);
  }
  function addTemporalMarker_0($this, time, callback) {
    $this._temporalMarkers.add_6(new TemporalMarker(new sam$trajectory_TimeProducer$0(time), callback));
    Unit_getInstance();
    return $this;
  }
  function sam$trajectory_TimeProducer$0(function_0) {
    this._function_1 = function_0;
  }
  sam$trajectory_TimeProducer$0.prototype.produce_0 = function (duration) {
    return this._function_1(duration);
  };
  sam$trajectory_TimeProducer$0.$metadata$ = {
    simpleName: 'sam$trajectory_TimeProducer$0',
    kind: 'class',
    interfaces: [TimeProducer]
  };
  function _no_name_provided__24(this$0, $endPosition) {
    this._this$0_0 = this$0;
    this._$endPosition = $endPosition;
  }
  _no_name_provided__24.prototype.invoke_71 = function () {
    this._this$0_0._pathBuilder.lineTo(this._$endPosition);
    Unit_getInstance();
  };
  _no_name_provided__24.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25(this$0, $endPosition) {
    this._this$0_1 = this$0;
    this._$endPosition_0 = $endPosition;
  }
  _no_name_provided__25.prototype.invoke_71 = function () {
    this._this$0_1._pathBuilder.lineToConstantHeading(this._$endPosition_0);
    Unit_getInstance();
  };
  _no_name_provided__25.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__26(this$0, $endPose) {
    this._this$0_2 = this$0;
    this._$endPose = $endPose;
  }
  _no_name_provided__26.prototype.invoke_71 = function () {
    this._this$0_2._pathBuilder.lineToLinearHeading(this._$endPose);
    Unit_getInstance();
  };
  _no_name_provided__26.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__27(this$0, $endPose) {
    this._this$0_3 = this$0;
    this._$endPose_0 = $endPose;
  }
  _no_name_provided__27.prototype.invoke_71 = function () {
    this._this$0_3._pathBuilder.lineToSplineHeading(this._$endPose_0);
    Unit_getInstance();
  };
  _no_name_provided__27.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28(this$0, $endPosition) {
    this._this$0_4 = this$0;
    this._$endPosition_1 = $endPosition;
  }
  _no_name_provided__28.prototype.invoke_71 = function () {
    this._this$0_4._pathBuilder.strafeTo(this._$endPosition_1);
    Unit_getInstance();
  };
  _no_name_provided__28.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__29(this$0, $distance) {
    this._this$0_5 = this$0;
    this._$distance = $distance;
  }
  _no_name_provided__29.prototype.invoke_71 = function () {
    this._this$0_5._pathBuilder.forward(this._$distance);
    Unit_getInstance();
  };
  _no_name_provided__29.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__30(this$0, $distance) {
    this._this$0_6 = this$0;
    this._$distance_0 = $distance;
  }
  _no_name_provided__30.prototype.invoke_71 = function () {
    this._this$0_6._pathBuilder.back(this._$distance_0);
    Unit_getInstance();
  };
  _no_name_provided__30.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__31(this$0, $distance) {
    this._this$0_7 = this$0;
    this._$distance_1 = $distance;
  }
  _no_name_provided__31.prototype.invoke_71 = function () {
    this._this$0_7._pathBuilder.strafeLeft(this._$distance_1);
    Unit_getInstance();
  };
  _no_name_provided__31.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__32(this$0, $distance) {
    this._this$0_8 = this$0;
    this._$distance_2 = $distance;
  }
  _no_name_provided__32.prototype.invoke_71 = function () {
    this._this$0_8._pathBuilder.strafeRight(this._$distance_2);
    Unit_getInstance();
  };
  _no_name_provided__32.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__33(this$0, $endPosition, $endTangent) {
    this._this$0_9 = this$0;
    this._$endPosition_2 = $endPosition;
    this._$endTangent = $endTangent;
  }
  _no_name_provided__33.prototype.invoke_71 = function () {
    this._this$0_9._pathBuilder.splineTo(this._$endPosition_2, this._$endTangent);
    Unit_getInstance();
  };
  _no_name_provided__33.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__34(this$0, $endPosition, $endTangent) {
    this._this$0_10 = this$0;
    this._$endPosition_3 = $endPosition;
    this._$endTangent_0 = $endTangent;
  }
  _no_name_provided__34.prototype.invoke_71 = function () {
    this._this$0_10._pathBuilder.splineToConstantHeading(this._$endPosition_3, this._$endTangent_0);
    Unit_getInstance();
  };
  _no_name_provided__34.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__35(this$0, $endPose, $endTangent) {
    this._this$0_11 = this$0;
    this._$endPose_1 = $endPose;
    this._$endTangent_1 = $endTangent;
  }
  _no_name_provided__35.prototype.invoke_71 = function () {
    this._this$0_11._pathBuilder.splineToLinearHeading(this._$endPose_1, this._$endTangent_1);
    Unit_getInstance();
  };
  _no_name_provided__35.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__36(this$0, $endPose, $endTangent) {
    this._this$0_12 = this$0;
    this._$endPose_2 = $endPose;
    this._$endTangent_2 = $endTangent;
  }
  _no_name_provided__36.prototype.invoke_71 = function () {
    this._this$0_12._pathBuilder.splineToSplineHeading(this._$endPose_2, this._$endTangent_2);
    Unit_getInstance();
  };
  _no_name_provided__36.prototype.invoke_72 = function () {
    this.invoke_71();
    return Unit_getInstance();
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__37($scale, $offset) {
    this._$scale = $scale;
    this._$offset = $offset;
  }
  _no_name_provided__37.prototype.invoke_77 = function (it) {
    return this._$scale * it + this._$offset;
  };
  _no_name_provided__37.prototype.invoke_78 = function (p1) {
    return this.invoke_77((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__37.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function TrajectoryBuilder(startPose, startTangent, trajectory, t, baseVelConstraint, baseAccelConstraint, start, resolution) {
    this._baseVelConstraint = baseVelConstraint;
    this._baseAccelConstraint = baseAccelConstraint;
    this._start_1 = start;
    this._resolution = resolution;
    var tmp = this;
    var tmp_0;
    if (startPose == null) {
      tmp_0 = PathBuilder_init_$Create$_0(ensureNotNull(trajectory)._path_0, trajectory._profile.get(ensureNotNull(t))._x_3);
    } else {
      tmp_0 = PathBuilder_init_$Create$(startPose, ensureNotNull(startTangent));
    }
    tmp._pathBuilder = tmp_0;
    var tmp_1 = this;
    tmp_1._temporalMarkers = ArrayList_init_$Create$();
    var tmp_2 = this;
    tmp_2._displacementMarkers = ArrayList_init_$Create$();
    var tmp_3 = this;
    tmp_3._spatialMarkers = ArrayList_init_$Create$();
    var tmp_4 = this;
    tmp_4._velConstraintOverrides = ArrayList_init_$Create$();
    var tmp_5 = this;
    tmp_5._accelConstraintOverrides = ArrayList_init_$Create$();
  }
  TrajectoryBuilder.prototype.lineTo = function (endPosition, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_23(this, endPosition), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.lineToConstantHeading = function (endPosition, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_24(this, endPosition), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.lineToLinearHeading = function (endPose, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_25(this, endPose), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.lineToSplineHeading = function (endPose, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_26(this, endPose), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.strafeTo = function (endPosition, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_27(this, endPosition), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.forward = function (distance, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_28(this, distance), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.back = function (distance, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_29(this, distance), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.strafeLeft = function (distance, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_30(this, distance), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.strafeRight = function (distance, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_31(this, distance), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.splineTo = function (endPosition, endTangent, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_32(this, endPosition, endTangent), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.splineToConstantHeading = function (endPosition, endTangent, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_33(this, endPosition, endTangent), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.splineToLinearHeading = function (endPose, endTangent, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_34(this, endPose, endTangent), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.splineToSplineHeading = function (endPose, endTangent, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_35(this, endPose, endTangent), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.addTemporalMarker = function (time, callback) {
    return addTemporalMarker(this, 0.0, time, callback);
  };
  TrajectoryBuilder.prototype.addSpatialMarker = function (point, callback) {
    this._spatialMarkers.add_6(new SpatialMarker(point, callback));
    Unit_getInstance();
    return this;
  };
  TrajectoryBuilder.prototype.build = function () {
    var tmp = this._pathBuilder.build_0();
    var tmp0_toTypedArray_0 = this._temporalMarkers;
    var tmp_0 = copyToArray_0(tmp0_toTypedArray_0);
    var tmp1_toTypedArray_0 = this._displacementMarkers;
    var tmp_1 = copyToArray_0(tmp1_toTypedArray_0);
    var tmp2_toTypedArray_0 = this._spatialMarkers;
    return this.buildTrajectory(tmp, tmp_0, tmp_1, copyToArray_0(tmp2_toTypedArray_0));
  };
  TrajectoryBuilder.prototype.buildTrajectory = function (path, temporalMarkers, displacementMarkers, spatialMarkers) {
    var tmp = path.length();
    var goal = MotionState_init_$Create$(tmp, 0.0, 0.0, 0.0, 8, null);
    return TrajectoryGenerator_getInstance().generateTrajectory(path, new PiecewiseVelocityConstraint(this._baseVelConstraint, this._velConstraintOverrides), new PiecewiseAccelerationConstraint(this._baseAccelConstraint, this._accelConstraintOverrides), this._start_1, goal, toList(temporalMarkers), toList(displacementMarkers), toList(spatialMarkers), this._resolution);
  };
  TrajectoryBuilder.$metadata$ = {
    simpleName: 'TrajectoryBuilder',
    kind: 'class',
    interfaces: []
  };
  function IntervalVelocityConstraint(start, end, constraint) {
    this._start_2 = start;
    this._end = end;
    this._constraint = constraint;
  }
  IntervalVelocityConstraint.prototype.component1_1 = function () {
    return this._start_2;
  };
  IntervalVelocityConstraint.prototype.component2_1 = function () {
    return this._end;
  };
  IntervalVelocityConstraint.prototype.component3_1 = function () {
    return this._constraint;
  };
  IntervalVelocityConstraint.prototype.toString = function () {
    return '' + 'IntervalVelocityConstraint(start=' + this._start_2 + ', end=' + this._end + ', constraint=' + this._constraint + ')';
  };
  IntervalVelocityConstraint.prototype.hashCode = function () {
    var result = getNumberHashCode(this._start_2);
    result = imul(result, 31) + getNumberHashCode(this._end) | 0;
    result = imul(result, 31) + hashCode(this._constraint) | 0;
    return result;
  };
  IntervalVelocityConstraint.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntervalVelocityConstraint))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IntervalVelocityConstraint ? other : THROW_CCE();
    if (!equals(this._start_2, tmp0_other_with_cast._start_2))
      return false;
    if (!equals(this._end, tmp0_other_with_cast._end))
      return false;
    if (!equals(this._constraint, tmp0_other_with_cast._constraint))
      return false;
    return true;
  };
  IntervalVelocityConstraint.$metadata$ = {
    simpleName: 'IntervalVelocityConstraint',
    kind: 'class',
    interfaces: []
  };
  function PiecewiseVelocityConstraint(baseConstraint, constraintOverrides) {
    TrajectoryVelocityConstraint.call(this);
    this._baseConstraint = baseConstraint;
    this._constraintOverrides = constraintOverrides;
  }
  PiecewiseVelocityConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    var tmp0_iterator = this._constraintOverrides.iterator_20();
    while (tmp0_iterator.hasNext_6()) {
      var interval = tmp0_iterator.next_6();
      var tmp1_container = interval;
      var start = tmp1_container.component1_1();
      var end = tmp1_container.component2_1();
      var constraint = tmp1_container.component3_1();
      if (start <= s ? s <= end : false) {
        return constraint.get(s, pose, deriv, baseRobotVel);
      }}
    return this._baseConstraint.get(s, pose, deriv, baseRobotVel);
  };
  PiecewiseVelocityConstraint.$metadata$ = {
    simpleName: 'PiecewiseVelocityConstraint',
    kind: 'class',
    interfaces: []
  };
  function IntervalAccelerationConstraint(start, end, constraint) {
    this._start_3 = start;
    this._end_0 = end;
    this._constraint_0 = constraint;
  }
  IntervalAccelerationConstraint.prototype.component1_1 = function () {
    return this._start_3;
  };
  IntervalAccelerationConstraint.prototype.component2_1 = function () {
    return this._end_0;
  };
  IntervalAccelerationConstraint.prototype.component3_1 = function () {
    return this._constraint_0;
  };
  IntervalAccelerationConstraint.prototype.toString = function () {
    return '' + 'IntervalAccelerationConstraint(start=' + this._start_3 + ', end=' + this._end_0 + ', constraint=' + this._constraint_0 + ')';
  };
  IntervalAccelerationConstraint.prototype.hashCode = function () {
    var result = getNumberHashCode(this._start_3);
    result = imul(result, 31) + getNumberHashCode(this._end_0) | 0;
    result = imul(result, 31) + hashCode(this._constraint_0) | 0;
    return result;
  };
  IntervalAccelerationConstraint.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IntervalAccelerationConstraint))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof IntervalAccelerationConstraint ? other : THROW_CCE();
    if (!equals(this._start_3, tmp0_other_with_cast._start_3))
      return false;
    if (!equals(this._end_0, tmp0_other_with_cast._end_0))
      return false;
    if (!equals(this._constraint_0, tmp0_other_with_cast._constraint_0))
      return false;
    return true;
  };
  IntervalAccelerationConstraint.$metadata$ = {
    simpleName: 'IntervalAccelerationConstraint',
    kind: 'class',
    interfaces: []
  };
  function PiecewiseAccelerationConstraint(baseConstraint, constraintOverrides) {
    TrajectoryAccelerationConstraint.call(this);
    this._baseConstraint_0 = baseConstraint;
    this._constraintOverrides_0 = constraintOverrides;
  }
  PiecewiseAccelerationConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    var tmp0_iterator = this._constraintOverrides_0.iterator_20();
    while (tmp0_iterator.hasNext_6()) {
      var interval = tmp0_iterator.next_6();
      var tmp1_container = interval;
      var start = tmp1_container.component1_1();
      var end = tmp1_container.component2_1();
      var constraint = tmp1_container.component3_1();
      if (start <= s ? s <= end : false) {
        return constraint.get(s, pose, deriv, baseRobotVel);
      }}
    return this._baseConstraint_0.get(s, pose, deriv, baseRobotVel);
  };
  PiecewiseAccelerationConstraint.$metadata$ = {
    simpleName: 'PiecewiseAccelerationConstraint',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_23(this$0, $endPosition) {
    var i = new _no_name_provided__24(this$0, $endPosition);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_24(this$0, $endPosition) {
    var i = new _no_name_provided__25(this$0, $endPosition);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_25(this$0, $endPose) {
    var i = new _no_name_provided__26(this$0, $endPose);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_26(this$0, $endPose) {
    var i = new _no_name_provided__27(this$0, $endPose);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_27(this$0, $endPosition) {
    var i = new _no_name_provided__28(this$0, $endPosition);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_28(this$0, $distance) {
    var i = new _no_name_provided__29(this$0, $distance);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_29(this$0, $distance) {
    var i = new _no_name_provided__30(this$0, $distance);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_30(this$0, $distance) {
    var i = new _no_name_provided__31(this$0, $distance);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_31(this$0, $distance) {
    var i = new _no_name_provided__32(this$0, $distance);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_32(this$0, $endPosition, $endTangent) {
    var i = new _no_name_provided__33(this$0, $endPosition, $endTangent);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_33(this$0, $endPosition, $endTangent) {
    var i = new _no_name_provided__34(this$0, $endPosition, $endTangent);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_34(this$0, $endPose, $endTangent) {
    var i = new _no_name_provided__35(this$0, $endPose, $endTangent);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_35(this$0, $endPose, $endTangent) {
    var i = new _no_name_provided__36(this$0, $endPose, $endTangent);
    return function () {
      i.invoke_71();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_36($scale, $offset) {
    var i = new _no_name_provided__37($scale, $offset);
    return function (p1) {
      return i.invoke_77(p1);
    };
  }
  function generateProfile($this, path, velocityConstraint, accelerationConstraint, start, goal, resolution) {
    var tmp = MotionProfileGenerator_getInstance();
    var tmp_0 = _no_name_provided_$factory_37(path, velocityConstraint);
    var tmp_1 = new sam$profile_VelocityConstraint$0_0(tmp_0);
    var tmp_2 = _no_name_provided_$factory_38(path, accelerationConstraint);
    return tmp.generateMotionProfile_0(start, goal, tmp_1, new sam$profile_AccelerationConstraint$0_0(tmp_2), resolution);
  }
  function displacementToTime($this, profile, s) {
    var tLo = 0.0;
    var tHi = profile.duration();
    while (!epsilonEquals(tLo, tHi)) {
      var tMid = 0.5 * (tLo + tHi);
      if (profile.get(tMid)._x_3 > s) {
        tHi = tMid;
      } else {
        tLo = tMid;
      }
    }
    return 0.5 * (tLo + tHi);
  }
  function pointToTime($this, path, profile, point) {
    return displacementToTime($this, profile, path.project$default(point, 0.0, 2, null));
  }
  function convertMarkers($this, path, profile, temporalMarkers, displacementMarkers, spatialMarkers) {
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(temporalMarkers, 10));
    var tmp0_iterator_1_2 = temporalMarkers.iterator_20();
    while (tmp0_iterator_1_2.hasNext_6()) {
      var item_2_3 = tmp0_iterator_1_2.next_6();
      var producer_5 = item_2_3.component1();
      var callback_6 = item_2_3.component2();
      tmp0_mapTo_0_1.add_6(new TrajectoryMarker(producer_5.produce_0(profile.duration()), callback_6));
      Unit_getInstance();
    }
    var tmp0_mapTo_0_1_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(displacementMarkers, 10));
    var tmp0_iterator_1_2_0 = displacementMarkers.iterator_20();
    while (tmp0_iterator_1_2_0.hasNext_6()) {
      var item_2_3_0 = tmp0_iterator_1_2_0.next_6();
      var producer_5_0 = item_2_3_0.component1();
      var callback_6_0 = item_2_3_0.component2();
      tmp0_mapTo_0_1_0.add_6(new TrajectoryMarker(displacementToTime(TrajectoryGenerator_getInstance(), profile, producer_5_0.produce_0(path.length())), callback_6_0));
      Unit_getInstance();
    }
    var tmp = plus(tmp0_mapTo_0_1, tmp0_mapTo_0_1_0);
    var tmp0_mapTo_0_1_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(spatialMarkers, 10));
    var tmp0_iterator_1_2_1 = spatialMarkers.iterator_20();
    while (tmp0_iterator_1_2_1.hasNext_6()) {
      var item_2_3_1 = tmp0_iterator_1_2_1.next_6();
      var point_5 = item_2_3_1.component1();
      var callback_6_1 = item_2_3_1.component2();
      tmp0_mapTo_0_1_1.add_6(new TrajectoryMarker(pointToTime(TrajectoryGenerator_getInstance(), path, profile, point_5), callback_6_1));
      Unit_getInstance();
    }
    return plus(tmp, tmp0_mapTo_0_1_1);
  }
  function sam$profile_VelocityConstraint$0_0(function_0) {
    this._function_2 = function_0;
  }
  sam$profile_VelocityConstraint$0_0.prototype.get_14 = function (s) {
    return this._function_2(s);
  };
  sam$profile_VelocityConstraint$0_0.$metadata$ = {
    simpleName: 'sam$profile_VelocityConstraint$0',
    kind: 'class',
    interfaces: [VelocityConstraint]
  };
  function sam$profile_AccelerationConstraint$0_0(function_0) {
    this._function_3 = function_0;
  }
  sam$profile_AccelerationConstraint$0_0.prototype.get_14 = function (s) {
    return this._function_3(s);
  };
  sam$profile_AccelerationConstraint$0_0.$metadata$ = {
    simpleName: 'sam$profile_AccelerationConstraint$0',
    kind: 'class',
    interfaces: [AccelerationConstraint]
  };
  function _no_name_provided__38($path, $velocityConstraint) {
    this._$path = $path;
    this._$velocityConstraint_0 = $velocityConstraint;
  }
  _no_name_provided__38.prototype.invoke_77 = function (s) {
    var t = this._$path.reparam_2(s);
    var tmp = this._$path.get_8(s, t);
    var tmp_0 = this._$path.deriv_4(s, t);
    return this._$velocityConstraint_0.get(s, tmp, tmp_0, Pose2d_init_$Create$(0.0, 0.0, 0.0, 7, null));
  };
  _no_name_provided__38.prototype.invoke_78 = function (p1) {
    return this.invoke_77((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__38.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__39($path, $accelerationConstraint) {
    this._$path_0 = $path;
    this._$accelerationConstraint_0 = $accelerationConstraint;
  }
  _no_name_provided__39.prototype.invoke_77 = function (s) {
    var t = this._$path_0.reparam_2(s);
    var tmp = this._$path_0.get_8(s, t);
    var tmp_0 = this._$path_0.deriv_4(s, t);
    return this._$accelerationConstraint_0.get(s, tmp, tmp_0, Pose2d_init_$Create$(0.0, 0.0, 0.0, 7, null));
  };
  _no_name_provided__39.prototype.invoke_78 = function (p1) {
    return this.invoke_77((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__39.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function TrajectoryGenerator() {
    TrajectoryGenerator_instance = this;
  }
  TrajectoryGenerator.prototype.generateTrajectory = function (path, velocityConstraint, accelerationConstraint, start, goal, temporalMarkers, displacementMarkers, spatialMarkers, resolution) {
    var profile = generateProfile(this, path, velocityConstraint, accelerationConstraint, start, goal, resolution);
    var markers = convertMarkers(this, path, profile, temporalMarkers, displacementMarkers, spatialMarkers);
    return new Trajectory(path, profile, copyToArray_0(markers));
  };
  TrajectoryGenerator.$metadata$ = {
    simpleName: 'TrajectoryGenerator',
    kind: 'object',
    interfaces: []
  };
  var TrajectoryGenerator_instance;
  function TrajectoryGenerator_getInstance() {
    if (TrajectoryGenerator_instance == null)
      new TrajectoryGenerator();
    return TrajectoryGenerator_instance;
  }
  function _no_name_provided_$factory_37($path, $velocityConstraint) {
    var i = new _no_name_provided__38($path, $velocityConstraint);
    return function (p1) {
      return i.invoke_77(p1);
    };
  }
  function _no_name_provided_$factory_38($path, $accelerationConstraint) {
    var i = new _no_name_provided__39($path, $accelerationConstraint);
    return function (p1) {
      return i.invoke_77(p1);
    };
  }
  function TrajectoryMarker(time, callback) {
    this._time = time;
    this._callback_2 = callback;
  }
  TrajectoryMarker.prototype._get_time_ = function () {
    return this._time;
  };
  TrajectoryMarker.prototype._get_callback__2 = function () {
    return this._callback_2;
  };
  TrajectoryMarker.prototype.component1 = function () {
    return this._time;
  };
  TrajectoryMarker.prototype.component2 = function () {
    return this._callback_2;
  };
  TrajectoryMarker.prototype.copy = function (time, callback) {
    return this.copy_5(time === void 1 ? this._time : time, callback === void 1 ? this._callback_2 : callback);
  };
  TrajectoryMarker.prototype.copy_5 = function (time, callback) {
    return new TrajectoryMarker(time, callback);
  };
  TrajectoryMarker.prototype.copy$default_4 = function (time, callback, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      time = this._time;
    if (!(($mask0 & 2) === 0))
      callback = this._callback_2;
    return this.copy_5(time, callback);
  };
  TrajectoryMarker.prototype.toString = function () {
    return '' + 'TrajectoryMarker(time=' + this._time + ', callback=' + this._callback_2 + ')';
  };
  TrajectoryMarker.prototype.hashCode = function () {
    var result = getNumberHashCode(this._time);
    result = imul(result, 31) + hashCode(this._callback_2) | 0;
    return result;
  };
  TrajectoryMarker.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TrajectoryMarker))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof TrajectoryMarker ? other : THROW_CCE();
    if (!equals(this._time, tmp0_other_with_cast._time))
      return false;
    if (!equals(this._callback_2, tmp0_other_with_cast._callback_2))
      return false;
    return true;
  };
  TrajectoryMarker.$metadata$ = {
    simpleName: 'TrajectoryMarker',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(TrajectoryMarker.prototype, 'time', {
    configurable: true,
    get: TrajectoryMarker.prototype._get_time_
  });
  Object.defineProperty(TrajectoryMarker.prototype, 'callback', {
    configurable: true,
    get: TrajectoryMarker.prototype._get_callback__2
  });
  function AngularVelocityConstraint(maxAngularVel) {
    TrajectoryVelocityConstraint.call(this);
    this._maxAngularVel = maxAngularVel;
  }
  AngularVelocityConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    var omega0 = baseRobotVel._heading;
    if (Math.abs(omega0) >= this._maxAngularVel) {
      throw new UnsatisfiableConstraint();
    } else {
    }
    var tmp0_max_0 = (this._maxAngularVel - omega0) / deriv._heading;
    var tmp1_max_0 = (-this._maxAngularVel - omega0) / deriv._heading;
    return function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_max_0, tmp1_max_0]))));
    }.call(this);
  };
  AngularVelocityConstraint.$metadata$ = {
    simpleName: 'AngularVelocityConstraint',
    kind: 'class',
    interfaces: []
  };
  function MecanumVelocityConstraint_init_$Init$(maxWheelVel, trackWidth, wheelBase, lateralMultiplier, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      wheelBase = trackWidth;
    if (!(($mask0 & 8) === 0))
      lateralMultiplier = 1.0;
    MecanumVelocityConstraint.call($this, maxWheelVel, trackWidth, wheelBase, lateralMultiplier);
    return $this;
  }
  function MecanumVelocityConstraint_init_$Create$(maxWheelVel, trackWidth, wheelBase, lateralMultiplier, $mask0, $marker) {
    return MecanumVelocityConstraint_init_$Init$(maxWheelVel, trackWidth, wheelBase, lateralMultiplier, $mask0, $marker, Object.create(MecanumVelocityConstraint.prototype));
  }
  function MecanumVelocityConstraint(maxWheelVel, trackWidth, wheelBase, lateralMultiplier) {
    var wheelBase_0 = wheelBase === void 1 ? trackWidth : wheelBase;
    var lateralMultiplier_0 = lateralMultiplier === void 1 ? 1.0 : lateralMultiplier;
    TrajectoryVelocityConstraint.call(this);
    this._maxWheelVel = maxWheelVel;
    this._trackWidth = trackWidth;
    this._wheelBase = wheelBase_0;
    this._lateralMultiplier = lateralMultiplier_0;
  }
  MecanumVelocityConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    var wheel0 = MecanumKinematics_getInstance().robotToWheelVelocities(baseRobotVel, this._trackWidth, this._wheelBase, this._lateralMultiplier);
    var iterator_1 = wheel0.iterator_20();
    if (!iterator_1.hasNext_6())
      throw NoSuchElementException_init_$Create$();
    var maxValue_2 = abs(iterator_1.next_6());
    while (iterator_1.hasNext_6()) {
      var v_3 = abs(iterator_1.next_6());
      var tmp0_maxOf_0_4 = maxValue_2;
      maxValue_2 = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_maxOf_0_4, v_3]))));
      }.call(this);
    }
    if (maxValue_2 >= this._maxWheelVel) {
      throw new UnsatisfiableConstraint();
    } else {
    }
    var robotDeriv = Kinematics_getInstance().fieldToRobotVelocity(pose, deriv);
    var wheel = MecanumKinematics_getInstance().robotToWheelVelocities(robotDeriv, this._trackWidth, this._wheelBase, this._lateralMultiplier);
    var tmp0_minOf_0 = zip(wheel0, wheel);
    var iterator_1_0 = tmp0_minOf_0.iterator_20();
    if (!iterator_1_0.hasNext_6())
      throw NoSuchElementException_init_$Create$();
    var tmp1__anonymous__5 = iterator_1_0.next_6();
    var tmp0_max_0_6 = (this._maxWheelVel - tmp1__anonymous__5._first) / tmp1__anonymous__5._second;
    var tmp1_max_0_7 = (-this._maxWheelVel - tmp1__anonymous__5._first) / tmp1__anonymous__5._second;
    var minValue_2 = function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_max_0_6, tmp1_max_0_7]))));
    }.call(this);
    while (iterator_1_0.hasNext_6()) {
      var tmp2__anonymous__5 = iterator_1_0.next_6();
      var tmp0_max_0_6_0 = (this._maxWheelVel - tmp2__anonymous__5._first) / tmp2__anonymous__5._second;
      var tmp1_max_0_7_0 = (-this._maxWheelVel - tmp2__anonymous__5._first) / tmp2__anonymous__5._second;
      var v_3_0 = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_max_0_6_0, tmp1_max_0_7_0]))));
      }.call(this);
      var tmp0_minOf_0_4 = minValue_2;
      minValue_2 = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_minOf_0_4, v_3_0]))));
      }.call(this);
    }
    return minValue_2;
  };
  MecanumVelocityConstraint.$metadata$ = {
    simpleName: 'MecanumVelocityConstraint',
    kind: 'class',
    interfaces: []
  };
  function MinVelocityConstraint(constraints) {
    TrajectoryVelocityConstraint.call(this);
    this._constraints = constraints;
  }
  MinVelocityConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    var tmp0_minOf_0 = this._constraints;
    if (tmp0_minOf_0.length === 0)
      throw NoSuchElementException_init_$Create$();
    else {
    }
    var tmp1__anonymous__6 = tmp0_minOf_0[0];
    var minValue_1 = tmp1__anonymous__6.get(s, pose, deriv, baseRobotVel);
    var inductionVariable = 1;
    var last_1 = _get_lastIndex_(tmp0_minOf_0);
    if (inductionVariable <= last_1)
      do {
        var i_3 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2__anonymous__6 = tmp0_minOf_0[i_3];
        var v_4 = tmp2__anonymous__6.get(s, pose, deriv, baseRobotVel);
        var tmp0_minOf_0_5 = minValue_1;
        minValue_1 = function () {
          var $externalVarargReceiverTmp = Math;
          return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_minOf_0_5, v_4]))));
        }.call(this);
      }
       while (!(i_3 === last_1));
    return minValue_1;
  };
  MinVelocityConstraint.$metadata$ = {
    simpleName: 'MinVelocityConstraint',
    kind: 'class',
    interfaces: []
  };
  function ProfileAccelerationConstraint(maxProfileAccel) {
    TrajectoryAccelerationConstraint.call(this);
    this._maxProfileAccel = maxProfileAccel;
  }
  ProfileAccelerationConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    return this._maxProfileAccel;
  };
  ProfileAccelerationConstraint.$metadata$ = {
    simpleName: 'ProfileAccelerationConstraint',
    kind: 'class',
    interfaces: []
  };
  function TrajectoryAccelerationConstraint() {
  }
  TrajectoryAccelerationConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    return 0.0;
  };
  TrajectoryAccelerationConstraint.$metadata$ = {
    simpleName: 'TrajectoryAccelerationConstraint',
    kind: 'class',
    interfaces: []
  };
  function TrajectoryVelocityConstraint() {
  }
  TrajectoryVelocityConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    return 0.0;
  };
  TrajectoryVelocityConstraint.$metadata$ = {
    simpleName: 'TrajectoryVelocityConstraint',
    kind: 'class',
    interfaces: []
  };
  function UnsatisfiableConstraint() {
    RuntimeException_init_$Init$(this);
    captureStack(this, UnsatisfiableConstraint);
  }
  UnsatisfiableConstraint.$metadata$ = {
    simpleName: 'UnsatisfiableConstraint',
    kind: 'class',
    interfaces: []
  };
  function Angle() {
    Angle_instance = this;
    this._TAU = 6.283185307179586;
  }
  Angle.prototype.norm = function (angle) {
    var modifiedAngle = angle % 6.283185307179586;
    modifiedAngle = (modifiedAngle + 6.283185307179586) % 6.283185307179586;
    return modifiedAngle;
  };
  Angle.prototype.normDelta = function (angleDelta) {
    var modifiedAngleDelta = this.norm(angleDelta);
    if (modifiedAngleDelta > 3.141592653589793) {
      modifiedAngleDelta = modifiedAngleDelta - 6.283185307179586;
    }return modifiedAngleDelta;
  };
  Angle.$metadata$ = {
    simpleName: 'Angle',
    kind: 'object',
    interfaces: []
  };
  var Angle_instance;
  function Angle_getInstance() {
    if (Angle_instance == null)
      new Angle();
    return Angle_instance;
  }
  function Companion_5() {
    Companion_instance_4 = this;
  }
  Companion_5.prototype.fromClosedInterval = function (start, endInclusive, count) {
    var tmp;
    if (count === 0) {
      tmp = 0.0;
    } else {
      tmp = (endInclusive - start) / (count - 1 | 0);
    }
    var step = tmp;
    return new DoubleProgression(start, step, count);
  };
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function IteratorImpl_0($outer) {
    this._$this_0 = $outer;
    this._iterator = (new IntRange(0, this._$this_0._progressionSize - 1 | 0)).iterator_20();
  }
  IteratorImpl_0.prototype.hasNext_6 = function () {
    return this._iterator.hasNext_6();
  };
  IteratorImpl_0.prototype.next_6 = function () {
    return this._$this_0.get_25(this._iterator.next_6());
  };
  IteratorImpl_0.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [Iterator]
  };
  function DoubleProgression(start, step, progressionSize) {
    Companion_getInstance_4();
    this._start_4 = start;
    this._step_1 = step;
    this._progressionSize = progressionSize;
  }
  DoubleProgression.prototype.plus_30 = function (offset) {
    return new DoubleProgression(this._start_4 + offset, this._step_1, this._progressionSize);
  };
  DoubleProgression.prototype.get_25 = function (index) {
    return this._start_4 + this._step_1 * index;
  };
  DoubleProgression.prototype.iterator_20 = function () {
    return new IteratorImpl_0(this);
  };
  DoubleProgression.prototype.toString = function () {
    return '' + 'DoubleProgression(start=' + this._start_4 + ', step=' + this._step_1 + ', progressionSize=' + this._progressionSize + ')';
  };
  DoubleProgression.prototype.hashCode = function () {
    var result = getNumberHashCode(this._start_4);
    result = imul(result, 31) + getNumberHashCode(this._step_1) | 0;
    result = imul(result, 31) + this._progressionSize | 0;
    return result;
  };
  DoubleProgression.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DoubleProgression))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof DoubleProgression ? other : THROW_CCE();
    if (!equals(this._start_4, tmp0_other_with_cast._start_4))
      return false;
    if (!equals(this._step_1, tmp0_other_with_cast._step_1))
      return false;
    if (!(this._progressionSize === tmp0_other_with_cast._progressionSize))
      return false;
    return true;
  };
  DoubleProgression.$metadata$ = {
    simpleName: 'DoubleProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function MathUtil() {
    MathUtil_instance = this;
  }
  MathUtil.prototype.solveQuadratic = function (a, b, c) {
    var disc = b * b - 4 * a * c;
    var tmp;
    if (epsilonEquals(disc, 0.0)) {
      tmp = listOf_0(-b / (2 * a));
    } else if (disc > 0.0) {
      var tmp_0 = -b;
      var tmp_1 = (tmp_0 + Math.sqrt(disc)) / (2 * a);
      var tmp_2 = -b;
      tmp = listOf([tmp_1, (tmp_2 - Math.sqrt(disc)) / (2 * a)]);
    } else {
      tmp = emptyList();
    }
    return tmp;
  };
  MathUtil.$metadata$ = {
    simpleName: 'MathUtil',
    kind: 'object',
    interfaces: []
  };
  var MathUtil_instance;
  function MathUtil_getInstance() {
    if (MathUtil_instance == null)
      new MathUtil();
    return MathUtil_instance;
  }
  function epsilonEquals(_this_, other) {
    var tmp0_abs_0 = _this_ - other;
    return Math.abs(tmp0_abs_0) < 1.0E-6;
  }
  IntIterator.prototype.hasNext_6 = Iterator.prototype.hasNext_6;
  AbstractMutableList.prototype.get_25 = List.prototype.get_25;
  KClassImpl.prototype._get_simpleName__2 = KClass.prototype._get_simpleName__2;
  functionClasses = functionClasses$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  var $geometry = _.geometry || (_.geometry = {});
  $geometry.Pose2d = Pose2d;
  $geometry.Vector2d = Vector2d;
  var $path = _.path || (_.path = {});
  $path.ParametricCurve = ParametricCurve;
  $path.Path = Path;
  $path.PathSegment = PathSegment;
  var $path$heading = $path.heading || ($path.heading = {});
  $path$heading.HeadingInterpolator = HeadingInterpolator;
  var $profile = _.profile || (_.profile = {});
  $profile.MotionProfile = MotionProfile;
  Object.defineProperty($profile, 'MotionProfileGenerator', {
    configurable: true,
    get: MotionProfileGenerator_getInstance
  });
  $profile.MotionSegment = MotionSegment;
  $profile.MotionState = MotionState;
  var $trajectory = _.trajectory || (_.trajectory = {});
  $trajectory.DisplacementMarker = DisplacementMarker;
  $trajectory.MarkerCallback = MarkerCallback;
  $trajectory.SpatialMarker = SpatialMarker;
  $trajectory.TemporalMarker = TemporalMarker;
  $trajectory.Trajectory = Trajectory;
  $trajectory.TrajectoryBuilder = TrajectoryBuilder;
  $trajectory.TrajectoryMarker = TrajectoryMarker;
  var $trajectory$constraints = $trajectory.constraints || ($trajectory.constraints = {});
  $trajectory$constraints.AngularVelocityConstraint = AngularVelocityConstraint;
  $trajectory$constraints.MecanumVelocityConstraint = MecanumVelocityConstraint;
  $trajectory$constraints.MinVelocityConstraint = MinVelocityConstraint;
  $trajectory$constraints.ProfileAccelerationConstraint = ProfileAccelerationConstraint;
  $trajectory$constraints.TrajectoryAccelerationConstraint = TrajectoryAccelerationConstraint;
  $trajectory$constraints.TrajectoryVelocityConstraint = TrajectoryVelocityConstraint;
  var $util = _.util || (_.util = {});
  Object.defineProperty($util, 'Angle', {
    configurable: true,
    get: Angle_getInstance
  });
  return _;
}(module.exports, require('mathjs')));
