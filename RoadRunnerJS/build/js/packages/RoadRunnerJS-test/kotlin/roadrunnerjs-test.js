(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'mathjs'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('mathjs'));
  else {
    if (typeof mathjs === 'undefined') {
      throw new Error("Error loading module 'roadrunnerjs-test'. Its dependency 'mathjs' was not found. Please, check whether 'mathjs' is loaded prior to 'roadrunnerjs-test'.");
    }root['roadrunnerjs-test'] = factory(typeof this['roadrunnerjs-test'] === 'undefined' ? {} : this['roadrunnerjs-test'], mathjs);
  }
}(this, function (_, mathjs) {
  'use strict';
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  KotlinNothingValueException.prototype = Object.create(RuntimeException.prototype);
  KotlinNothingValueException.prototype.constructor = KotlinNothingValueException;
  Level.prototype = Object.create(Enum.prototype);
  Level.prototype.constructor = Level;
  Level_0.prototype = Object.create(Enum.prototype);
  Level_0.prototype.constructor = Level_0;
  AbstractList.prototype = Object.create(AbstractCollection.prototype);
  AbstractList.prototype.constructor = AbstractList;
  SubList.prototype = Object.create(AbstractList.prototype);
  SubList.prototype.constructor = SubList;
  ListIteratorImpl.prototype = Object.create(IteratorImpl.prototype);
  ListIteratorImpl.prototype.constructor = ListIteratorImpl;
  AbstractSet.prototype = Object.create(AbstractCollection.prototype);
  AbstractSet.prototype.constructor = AbstractSet;
  _no_name_provided__2.prototype = Object.create(AbstractSet.prototype);
  _no_name_provided__2.prototype.constructor = _no_name_provided__2;
  _no_name_provided__4.prototype = Object.create(AbstractCollection.prototype);
  _no_name_provided__4.prototype.constructor = _no_name_provided__4;
  InvocationKind.prototype = Object.create(Enum.prototype);
  InvocationKind.prototype.constructor = InvocationKind;
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  RequireKotlinVersionKind.prototype = Object.create(Enum.prototype);
  RequireKotlinVersionKind.prototype.constructor = RequireKotlinVersionKind;
  KVariance.prototype = Object.create(Enum.prototype);
  KVariance.prototype.constructor = KVariance;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  NotImplementedError.prototype = Object.create(Error_0.prototype);
  NotImplementedError.prototype.constructor = NotImplementedError;
  Iterator.prototype = Object.create(UByteIterator.prototype);
  Iterator.prototype.constructor = Iterator;
  Iterator_0.prototype = Object.create(UIntIterator.prototype);
  Iterator_0.prototype.constructor = Iterator_0;
  UIntRange.prototype = Object.create(UIntProgression.prototype);
  UIntRange.prototype.constructor = UIntRange;
  UIntProgressionIterator.prototype = Object.create(UIntIterator.prototype);
  UIntProgressionIterator.prototype.constructor = UIntProgressionIterator;
  Iterator_1.prototype = Object.create(ULongIterator.prototype);
  Iterator_1.prototype.constructor = Iterator_1;
  ULongRange.prototype = Object.create(ULongProgression.prototype);
  ULongRange.prototype.constructor = ULongRange;
  ULongProgressionIterator.prototype = Object.create(ULongIterator.prototype);
  ULongProgressionIterator.prototype.constructor = ULongProgressionIterator;
  Iterator_2.prototype = Object.create(UShortIterator.prototype);
  Iterator_2.prototype.constructor = Iterator_2;
  DeprecationLevel.prototype = Object.create(Enum.prototype);
  DeprecationLevel.prototype.constructor = DeprecationLevel;
  IntProgressionIterator.prototype = Object.create(IntIterator.prototype);
  IntProgressionIterator.prototype.constructor = IntProgressionIterator;
  LongProgressionIterator.prototype = Object.create(LongIterator.prototype);
  LongProgressionIterator.prototype.constructor = LongProgressionIterator;
  CharProgressionIterator.prototype = Object.create(CharIterator.prototype);
  CharProgressionIterator.prototype.constructor = CharProgressionIterator;
  IntRange.prototype = Object.create(IntProgression.prototype);
  IntRange.prototype.constructor = IntRange;
  LongRange.prototype = Object.create(LongProgression.prototype);
  LongRange.prototype.constructor = LongRange;
  CharRange.prototype = Object.create(CharProgression.prototype);
  CharRange.prototype.constructor = CharRange;
  AnnotationTarget.prototype = Object.create(Enum.prototype);
  AnnotationTarget.prototype.constructor = AnnotationTarget;
  AnnotationRetention.prototype = Object.create(Enum.prototype);
  AnnotationRetention.prototype.constructor = AnnotationRetention;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  ListIteratorImpl_0.prototype = Object.create(IteratorImpl_0.prototype);
  ListIteratorImpl_0.prototype.constructor = ListIteratorImpl_0;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  SubList_0.prototype = Object.create(AbstractMutableList.prototype);
  SubList_0.prototype.constructor = SubList_0;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  _no_name_provided__15.prototype = Object.create(AbstractMutableSet.prototype);
  _no_name_provided__15.prototype.constructor = _no_name_provided__15;
  _no_name_provided__16.prototype = Object.create(AbstractMutableCollection.prototype);
  _no_name_provided__16.prototype.constructor = _no_name_provided__16;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  NodeJsOutput_0.prototype = Object.create(BaseOutput.prototype);
  NodeJsOutput_0.prototype.constructor = NodeJsOutput_0;
  BufferedOutput_0.prototype = Object.create(BaseOutput.prototype);
  BufferedOutput_0.prototype.constructor = BufferedOutput_0;
  BufferedOutputToConsoleLog_0.prototype = Object.create(BufferedOutput_0.prototype);
  BufferedOutputToConsoleLog_0.prototype.constructor = BufferedOutputToConsoleLog_0;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  _no_name_provided__41.prototype = Object.create(BooleanIterator.prototype);
  _no_name_provided__41.prototype.constructor = _no_name_provided__41;
  _no_name_provided__42.prototype = Object.create(CharIterator.prototype);
  _no_name_provided__42.prototype.constructor = _no_name_provided__42;
  _no_name_provided__43.prototype = Object.create(ByteIterator.prototype);
  _no_name_provided__43.prototype.constructor = _no_name_provided__43;
  _no_name_provided__44.prototype = Object.create(ShortIterator.prototype);
  _no_name_provided__44.prototype.constructor = _no_name_provided__44;
  _no_name_provided__45.prototype = Object.create(IntIterator.prototype);
  _no_name_provided__45.prototype.constructor = _no_name_provided__45;
  _no_name_provided__46.prototype = Object.create(FloatIterator.prototype);
  _no_name_provided__46.prototype.constructor = _no_name_provided__46;
  _no_name_provided__47.prototype = Object.create(LongIterator.prototype);
  _no_name_provided__47.prototype.constructor = _no_name_provided__47;
  _no_name_provided__48.prototype = Object.create(DoubleIterator.prototype);
  _no_name_provided__48.prototype.constructor = _no_name_provided__48;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  AssertionError.prototype = Object.create(Error_0.prototype);
  AssertionError.prototype.constructor = AssertionError;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  NoWhenBranchMatchedException.prototype = Object.create(RuntimeException.prototype);
  NoWhenBranchMatchedException.prototype.constructor = NoWhenBranchMatchedException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  UninitializedPropertyAccessException.prototype = Object.create(RuntimeException.prototype);
  UninitializedPropertyAccessException.prototype.constructor = UninitializedPropertyAccessException;
  LineSegment.prototype = Object.create(ParametricCurve.prototype);
  LineSegment.prototype.constructor = LineSegment;
  PathBuilderException.prototype = Object.create(RuntimeException.prototype);
  PathBuilderException.prototype.constructor = PathBuilderException;
  EmptyPathSegmentException.prototype = Object.create(PathBuilderException.prototype);
  EmptyPathSegmentException.prototype.constructor = EmptyPathSegmentException;
  PathContinuityViolationException.prototype = Object.create(PathBuilderException.prototype);
  PathContinuityViolationException.prototype.constructor = PathContinuityViolationException;
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
  function fold(_this_, initial, operation) {
    var accumulator = initial;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_2 = indexedObject.length;
    while (inductionVariable < last_2) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = operation(accumulator, element);
    }
    return accumulator;
  }
  function sumByDouble(_this_, selector) {
    var sum_0 = 0.0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_2 = indexedObject.length;
    while (inductionVariable < last_2) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      sum_0 = sum_0 + selector(element);
    }
    return sum_0;
  }
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
    return ArrayList_init_$Create$_2(asCollection(_this_));
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
  function minOf(_this_, selector) {
    if (_this_.length === 0)
      throw NoSuchElementException_init_$Create$();
    else {
    }
    var minValue = selector(_this_[0]);
    var inductionVariable = 1;
    var last_2 = _get_lastIndex_(_this_);
    if (inductionVariable <= last_2)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var v = selector(_this_[i]);
        var tmp0_minOf_0 = minValue;
        minValue = function () {
          var $externalVarargReceiverTmp = Math;
          return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_minOf_0, v]))));
        }.call(this);
      }
       while (!(i === last_2));
    return minValue;
  }
  function isEmpty(_this_) {
    return _this_.length === 0;
  }
  function _get_lastIndex_(_this_) {
    return _this_.length - 1 | 0;
  }
  function contains(_this_, element) {
    return indexOf(_this_, element) >= 0;
  }
  function _get_indices_(_this_) {
    return new IntRange(0, _get_lastIndex_(_this_));
  }
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last_2 = _this_.length - 1 | 0;
      if (inductionVariable <= last_2)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last_2);
    } else {
      var inductionVariable_0 = 0;
      var last_3 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_3)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_3);
    }
    return -1;
  }
  function lastIndexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = _this_.length - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (0 <= inductionVariable);
    } else {
      var inductionVariable_0 = _this_.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          if (equals(element, _this_[index_0])) {
            return index_0;
          }}
         while (0 <= inductionVariable_0);
    }
    return -1;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$_1(), separator, prefix, postfix, limit, truncated, transform).toString();
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
    buffer.append_3(prefix);
    Unit_getInstance();
    var count_0 = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_2 = indexedObject.length;
    $l$break: while (inductionVariable < last_2) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count_0 = count_0 + 1 | 0;
      if (count_0 > 1) {
        buffer.append_3(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count_0 <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count_0 > limit : false) {
      buffer.append_3(truncated);
      Unit_getInstance();
    }buffer.append_3(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinTo$default(_this_, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function firstOrNull(_this_, predicate) {
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_2 = indexedObject.length;
    while (inductionVariable < last_2) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (predicate(element))
        return element;
    }
    return null;
  }
  function contains_0(_this_, element) {
    return indexOf_0(_this_, element) >= 0;
  }
  function indexOf_0(_this_, element) {
    var inductionVariable = 0;
    var last_2 = _this_.length - 1 | 0;
    if (inductionVariable <= last_2)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element === _this_[index]) {
          return index;
        }}
       while (inductionVariable <= last_2);
    return -1;
  }
  function _get_indices__0(_this_) {
    return new IntRange(0, _get_lastIndex__0(_this_));
  }
  function _get_lastIndex__0(_this_) {
    return _this_.length - 1 | 0;
  }
  function contains_1(_this_, element) {
    return indexOf_1(_this_, element) >= 0;
  }
  function indexOf_1(_this_, element) {
    var inductionVariable = 0;
    var last_2 = _this_.length - 1 | 0;
    if (inductionVariable <= last_2)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element === _this_[index]) {
          return index;
        }}
       while (inductionVariable <= last_2);
    return -1;
  }
  function _get_indices__1(_this_) {
    return new IntRange(0, _get_lastIndex__1(_this_));
  }
  function _get_lastIndex__1(_this_) {
    return _this_.length - 1 | 0;
  }
  function contains_2(_this_, element) {
    return indexOf_2(_this_, element) >= 0;
  }
  function indexOf_2(_this_, element) {
    var inductionVariable = 0;
    var last_2 = _this_.length - 1 | 0;
    if (inductionVariable <= last_2)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element === _this_[index]) {
          return index;
        }}
       while (inductionVariable <= last_2);
    return -1;
  }
  function _get_indices__2(_this_) {
    return new IntRange(0, _get_lastIndex__2(_this_));
  }
  function _get_lastIndex__2(_this_) {
    return _this_.length - 1 | 0;
  }
  function contains_3(_this_, element) {
    return indexOf_3(_this_, element) >= 0;
  }
  function indexOf_3(_this_, element) {
    var inductionVariable = 0;
    var last_2 = _this_.length - 1 | 0;
    if (inductionVariable <= last_2)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (element.equals(_this_[index])) {
          return index;
        }}
       while (inductionVariable <= last_2);
    return -1;
  }
  function _get_indices__3(_this_) {
    return new IntRange(0, _get_lastIndex__3(_this_));
  }
  function _get_lastIndex__3(_this_) {
    return _this_.length - 1 | 0;
  }
  function map(_this_, transform) {
    var tmp0_mapTo_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this_, 10));
    var tmp0_iterator_1 = _this_.iterator_51();
    while (tmp0_iterator_1.hasNext_43()) {
      var item_2 = tmp0_iterator_1.next_48();
      tmp0_mapTo_0.add_22(transform(item_2));
      Unit_getInstance();
    }
    return tmp0_mapTo_0;
  }
  function minByOrNull(_this_, selector) {
    var iterator_1 = _this_.iterator_51();
    if (!iterator_1.hasNext_43())
      return null;
    var minElem = iterator_1.next_48();
    if (!iterator_1.hasNext_43())
      return minElem;
    var minValue = selector(minElem);
    do {
      var e = iterator_1.next_48();
      var v = selector(e);
      if (compareTo_0(minValue, v) > 0) {
        minElem = e;
        minValue = v;
      }}
     while (iterator_1.hasNext_43());
    return minElem;
  }
  function lastOrNull(_this_) {
    return _this_.isEmpty_47() ? null : _this_.get_39(_this_._get_size__36() - 1 | 0);
  }
  function sumByDouble_0(_this_, selector) {
    var sum_0 = 0.0;
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      sum_0 = sum_0 + selector(element);
    }
    return sum_0;
  }
  function reversed(_this_) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__36() <= 1;
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
    var iterator_1 = _this_.iterator_51();
    if (!iterator_1.hasNext_43())
      return null;
    var min_0 = iterator_1.next_48();
    while (iterator_1.hasNext_43()) {
      var e = iterator_1.next_48();
      var tmp0_minOf_0 = min_0;
      min_0 = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_minOf_0, e]))));
      }.call(this);
    }
    return min_0;
  }
  function filter(_this_, predicate) {
    var tmp0_filterTo_0 = ArrayList_init_$Create$();
    var tmp0_iterator_1 = _this_.iterator_51();
    while (tmp0_iterator_1.hasNext_43()) {
      var element_2 = tmp0_iterator_1.next_48();
      if (predicate(element_2)) {
        tmp0_filterTo_0.add_22(element_2);
        Unit_getInstance();
      }}
    return tmp0_filterTo_0;
  }
  function toMutableList_0(_this_) {
    return ArrayList_init_$Create$_2(_this_);
  }
  function forEach(_this_, action) {
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      action(element);
    }
  }
  function dropLast(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }return take(_this_, coerceAtLeast(_this_._get_size__36() - n | 0, 0));
  }
  function zip(_this_, other) {
    var first_1_0 = _this_.iterator_51();
    var second_2 = other.iterator_51();
    var tmp0_minOf_0 = collectionSizeOrDefault(_this_, 10);
    var tmp1_minOf_0 = collectionSizeOrDefault(other, 10);
    var list_3 = ArrayList_init_$Create$_0(function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([tmp0_minOf_0, tmp1_minOf_0]))));
    }.call(this));
    while (first_1_0.hasNext_43() ? second_2.hasNext_43() : false) {
      var tmp2__anonymous__4 = first_1_0.next_48();
      var tmp3__anonymous__4 = second_2.next_48();
      list_3.add_22(to(tmp2__anonymous__4, tmp3__anonymous__4));
      Unit_getInstance();
    }
    return list_3;
  }
  function plus(_this_, elements) {
    if (isInterface(elements, Collection)) {
      var result = ArrayList_init_$Create$_0(_this_._get_size__36() + elements._get_size__36() | 0);
      result.addAll_15(_this_);
      Unit_getInstance();
      result.addAll_15(elements);
      Unit_getInstance();
      return result;
    } else {
      {
        var result_0 = ArrayList_init_$Create$_2(_this_);
        addAll(result_0, elements);
        Unit_getInstance();
        return result_0;
      }
    }
  }
  function maxOf(_this_, selector) {
    var iterator_1 = _this_.iterator_51();
    if (!iterator_1.hasNext_43())
      throw NoSuchElementException_init_$Create$();
    var maxValue = selector(iterator_1.next_48());
    while (iterator_1.hasNext_43()) {
      var v = selector(iterator_1.next_48());
      var tmp0_maxOf_0 = maxValue;
      maxValue = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_maxOf_0, v]))));
      }.call(this);
    }
    return maxValue;
  }
  function minOf_0(_this_, selector) {
    var iterator_1 = _this_.iterator_51();
    if (!iterator_1.hasNext_43())
      throw NoSuchElementException_init_$Create$();
    var minValue = selector(iterator_1.next_48());
    while (iterator_1.hasNext_43()) {
      var v = selector(iterator_1.next_48());
      var tmp0_minOf_0 = minValue;
      minValue = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_minOf_0, v]))));
      }.call(this);
    }
    return minValue;
  }
  function last_0(_this_) {
    if (_this_.isEmpty_47())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_39(_get_lastIndex__4(_this_));
  }
  function component1(_this_) {
    return _this_.get_39(0);
  }
  function component2(_this_) {
    return _this_.get_39(1);
  }
  function component3(_this_) {
    return _this_.get_39(2);
  }
  function component4(_this_) {
    return _this_.get_39(3);
  }
  function sum(_this_) {
    var sum_0 = 0.0;
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      sum_0 = sum_0 + element;
    }
    return sum_0;
  }
  function last_1(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return last_0(_this_);
    else {
      {
        var iterator_1 = _this_.iterator_51();
        if (!iterator_1.hasNext_43())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        var last_2 = iterator_1.next_48();
        while (iterator_1.hasNext_43())
          last_2 = iterator_1.next_48();
        return last_2;
      }
    }
  }
  function first_0(_this_) {
    var tmp0_subject = _this_;
    if (isInterface(tmp0_subject, List))
      return first_1(_this_);
    else {
      {
        var iterator_1 = _this_.iterator_51();
        if (!iterator_1.hasNext_43())
          throw NoSuchElementException_init_$Create$_0('Collection is empty.');
        return iterator_1.next_48();
      }
    }
  }
  function first_1(_this_) {
    if (_this_.isEmpty_47())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this_.get_39(0);
  }
  function count(_this_) {
    return _this_._get_size__36();
  }
  function maxOrNull(_this_) {
    var iterator_1 = _this_.iterator_51();
    if (!iterator_1.hasNext_43())
      return null;
    var max_0 = iterator_1.next_48();
    while (iterator_1.hasNext_43()) {
      var e = iterator_1.next_48();
      var tmp0_maxOf_0 = max_0;
      max_0 = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_maxOf_0, e]))));
      }.call(this);
    }
    return max_0;
  }
  function drop(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }if (n === 0)
      return toList_0(_this_);
    var list;
    if (isInterface(_this_, Collection)) {
      var resultSize = _this_._get_size__36() - n | 0;
      if (resultSize <= 0)
        return emptyList();
      if (resultSize === 1)
        return listOf_0(last_1(_this_));
      list = ArrayList_init_$Create$_0(resultSize);
      if (isInterface(_this_, List)) {
        if (isInterface(_this_, RandomAccess)) {
          var inductionVariable = n;
          var last_2 = _this_._get_size__36();
          if (inductionVariable < last_2)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              list.add_22(_this_.get_39(index));
              Unit_getInstance();
            }
             while (inductionVariable < last_2);
        } else {
          {
            var tmp1_iterator_0 = _this_.listIterator_14(n);
            var tmp1_iterator = tmp1_iterator_0;
            while (tmp1_iterator.hasNext_43()) {
              var item = tmp1_iterator.next_48();
              list.add_22(item);
              Unit_getInstance();
            }
          }
        }
        return list;
      } else {
      }
    } else {
      {
        list = ArrayList_init_$Create$();
      }
    }
    var count_0 = 0;
    var tmp2_iterator = _this_.iterator_51();
    while (tmp2_iterator.hasNext_43()) {
      var item_0 = tmp2_iterator.next_48();
      if (count_0 >= n) {
        list.add_22(item_0);
        Unit_getInstance();
      } else {
        count_0 = count_0 + 1 | 0;
        Unit_getInstance();
      }
    }
    return optimizeReadOnlyList(list);
  }
  function mapTo(_this_, destination, transform) {
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var item = tmp0_iterator.next_48();
      destination.add_22(transform(item));
      Unit_getInstance();
    }
    return destination;
  }
  function toList_0(_this_) {
    if (isInterface(_this_, Collection)) {
      var tmp0_subject = _this_._get_size__36();
      var tmp;
      switch (tmp0_subject) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this_, List)) {
            tmp_0 = _this_.get_39(0);
          } else {
            {
              tmp_0 = _this_.iterator_51().next_48();
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
  function filterTo(_this_, destination, predicate) {
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      if (predicate(element)) {
        destination.add_22(element);
        Unit_getInstance();
      }}
    return destination;
  }
  function take(_this_, n) {
    var tmp0_require_0 = n >= 0;
    if (!tmp0_require_0) {
      var message_2 = '' + 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }if (n === 0)
      return emptyList();
    if (isInterface(_this_, Collection)) {
      if (n >= _this_._get_size__36())
        return toList_0(_this_);
      if (n === 1)
        return listOf_0(first_0(_this_));
    } else {
    }
    var count_0 = 0;
    var list = ArrayList_init_$Create$_0(n);
    var tmp0_iterator = _this_.iterator_51();
    $l$break: while (tmp0_iterator.hasNext_43()) {
      var item = tmp0_iterator.next_48();
      list.add_22(item);
      Unit_getInstance();
      count_0 = count_0 + 1 | 0;
      if (count_0 === n)
        break $l$break;
      else {
      }
    }
    return optimizeReadOnlyList(list);
  }
  function zip_0(_this_, other, transform) {
    var first_2 = _this_.iterator_51();
    var second = other.iterator_51();
    var tmp0_minOf_0 = collectionSizeOrDefault(_this_, 10);
    var tmp1_minOf_0 = collectionSizeOrDefault(other, 10);
    var list = ArrayList_init_$Create$_0(function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([tmp0_minOf_0, tmp1_minOf_0]))));
    }.call(this));
    while (first_2.hasNext_43() ? second.hasNext_43() : false) {
      list.add_22(transform(first_2.next_48(), second.next_48()));
      Unit_getInstance();
    }
    return list;
  }
  function toCollection(_this_, destination) {
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var item = tmp0_iterator.next_48();
      destination.add_22(item);
      Unit_getInstance();
    }
    return destination;
  }
  function all(_this_, predicate) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_.isEmpty_47();
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return true;
    else {
    }
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      if (!predicate(element))
        return false;
    }
    return true;
  }
  function indexOfFirst(_this_, predicate) {
    var index = 0;
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var item = tmp0_iterator.next_48();
      if (predicate(item))
        return index;
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      Unit_getInstance();
    }
    return -1;
  }
  function indexOfLast(_this_, predicate) {
    var iterator_1 = _this_.listIterator_14(_this_._get_size__36());
    while (iterator_1.hasPrevious_3()) {
      if (predicate(iterator_1.previous_3())) {
        return iterator_1.nextIndex_3();
      }}
    return -1;
  }
  function any(_this_, predicate) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_.isEmpty_47();
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return false;
    else {
    }
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      if (predicate(element))
        return true;
    }
    return false;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$_1(), separator, prefix, postfix, limit, truncated, transform).toString();
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
    buffer.append_3(prefix);
    Unit_getInstance();
    var count_0 = 0;
    var tmp0_iterator = _this_.iterator_51();
    $l$break: while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      count_0 = count_0 + 1 | 0;
      if (count_0 > 1) {
        buffer.append_3(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count_0 <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count_0 > limit : false) {
      buffer.append_3(truncated);
      Unit_getInstance();
    }buffer.append_3(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinTo$default_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      separator = ', ';
    if (!(($mask0 & 4) === 0))
      prefix = '';
    if (!(($mask0 & 8) === 0))
      postfix = '';
    if (!(($mask0 & 16) === 0))
      limit = -1;
    if (!(($mask0 & 32) === 0))
      truncated = '...';
    if (!(($mask0 & 64) === 0))
      transform = null;
    return joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform);
  }
  function firstOrNull_0(_this_, predicate) {
    var tmp0_iterator = _this_.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      if (predicate(element))
        return element;
    }
    return null;
  }
  function until(_this_, to_0) {
    if (to_0 <= IntCompanionObject_getInstance()._MIN_VALUE_5)
      return Companion_getInstance_16()._EMPTY_1;
    return numberRangeToNumber(_this_, to_0 - 1 | 0);
  }
  function coerceAtLeast(_this_, minimumValue) {
    return _this_ < minimumValue ? minimumValue : _this_;
  }
  function downTo(_this_, to_0) {
    return Companion_getInstance_13().fromClosedRange_1(_this_, to_0, -1);
  }
  function reversed_0(_this_) {
    return Companion_getInstance_13().fromClosedRange_1(_this_._last_1, _this_._first_2, -_this_._step_6 | 0);
  }
  function getOrElse(_this_, index, defaultValue) {
    return (index >= 0 ? index <= _get_lastIndex__5(_this_) : false) ? charSequenceGet(_this_, index) : defaultValue(index);
  }
  function KotlinNothingValueException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    KotlinNothingValueException.call($this);
    return $this;
  }
  function KotlinNothingValueException_init_$Create$() {
    var tmp = KotlinNothingValueException_init_$Init$(Object.create(KotlinNothingValueException.prototype));
    captureStack(tmp, KotlinNothingValueException_init_$Create$);
    return tmp;
  }
  function KotlinNothingValueException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    KotlinNothingValueException.call($this);
    return $this;
  }
  function KotlinNothingValueException_init_$Create$_0(message) {
    var tmp = KotlinNothingValueException_init_$Init$_0(message, Object.create(KotlinNothingValueException.prototype));
    captureStack(tmp, KotlinNothingValueException_init_$Create$_0);
    return tmp;
  }
  function KotlinNothingValueException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    KotlinNothingValueException.call($this);
    return $this;
  }
  function KotlinNothingValueException_init_$Create$_1(message, cause) {
    var tmp = KotlinNothingValueException_init_$Init$_1(message, cause, Object.create(KotlinNothingValueException.prototype));
    captureStack(tmp, KotlinNothingValueException_init_$Create$_1);
    return tmp;
  }
  function KotlinNothingValueException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    KotlinNothingValueException.call($this);
    return $this;
  }
  function KotlinNothingValueException_init_$Create$_2(cause) {
    var tmp = KotlinNothingValueException_init_$Init$_2(cause, Object.create(KotlinNothingValueException.prototype));
    captureStack(tmp, KotlinNothingValueException_init_$Create$_2);
    return tmp;
  }
  function KotlinNothingValueException() {
    captureStack(this, KotlinNothingValueException);
  }
  KotlinNothingValueException.$metadata$ = {
    simpleName: 'KotlinNothingValueException',
    kind: 'class',
    interfaces: []
  };
  function ExperimentalJsExport() {
  }
  ExperimentalJsExport.$metadata$ = {
    simpleName: 'ExperimentalJsExport',
    kind: 'class',
    interfaces: [Annotation]
  };
  function _get_PI_() {
    return PI;
  }
  var PI;
  function _get_code_(_this_) {
    return _this_.toInt_6();
  }
  function Char(code) {
    var tmp;
    Companion_getInstance_19();
    var tmp0__get_code__0 = new Char_0(0);
    if (code < tmp0__get_code__0.toInt_6()) {
      tmp = true;
    } else {
      {
        Companion_getInstance_19();
        var tmp1__get_code__0 = new Char_0(65535);
        tmp = code > tmp1__get_code__0.toInt_6();
      }
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + code);
    } else {
    }
    return new Char_0(_UShort___init__impl_(toShort(code)));
  }
  var Level_WARNING_instance;
  var Level_ERROR_instance;
  function values() {
    return [Level_WARNING_getInstance(), Level_ERROR_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'WARNING':
        return Level_WARNING_getInstance();
      case 'ERROR':
        return Level_ERROR_getInstance();
      default:Level_initEntries();
        THROW_ISE();
        break;
    }
  }
  var Level_entriesInitialized;
  function Level_initEntries() {
    if (Level_entriesInitialized)
      return Unit_getInstance();
    Level_entriesInitialized = true;
    Level_WARNING_instance = new Level('WARNING', 0);
    Level_ERROR_instance = new Level('ERROR', 1);
  }
  function Experimental_init_$Init$(level, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      level = Level_ERROR_getInstance();
    Experimental.call($this, level);
    return $this;
  }
  function Experimental_init_$Create$(level, $mask0, $marker) {
    return Experimental_init_$Init$(level, $mask0, $marker, Object.create(Experimental.prototype));
  }
  function Level(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Level.$metadata$ = {
    simpleName: 'Level',
    kind: 'class',
    interfaces: []
  };
  function Level_WARNING_getInstance() {
    Level_initEntries();
    return Level_WARNING_instance;
  }
  function Level_ERROR_getInstance() {
    Level_initEntries();
    return Level_ERROR_instance;
  }
  function Experimental(level) {
    this._level = level;
  }
  Experimental.prototype._get_level__2 = function () {
    return this._level;
  };
  Experimental.$metadata$ = {
    simpleName: 'Experimental',
    kind: 'class',
    interfaces: [Annotation]
  };
  function WasExperimental(markerClass) {
    this._markerClass = markerClass;
  }
  WasExperimental.prototype._get_markerClass__0 = function () {
    return this._markerClass;
  };
  WasExperimental.$metadata$ = {
    simpleName: 'WasExperimental',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ExperimentalStdlibApi() {
  }
  ExperimentalStdlibApi.$metadata$ = {
    simpleName: 'ExperimentalStdlibApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function OverloadResolutionByLambdaReturnType() {
  }
  OverloadResolutionByLambdaReturnType.$metadata$ = {
    simpleName: 'OverloadResolutionByLambdaReturnType',
    kind: 'class',
    interfaces: [Annotation]
  };
  function OptionalExpectation() {
  }
  OptionalExpectation.$metadata$ = {
    simpleName: 'OptionalExpectation',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ExperimentalMultiplatform() {
  }
  ExperimentalMultiplatform.$metadata$ = {
    simpleName: 'ExperimentalMultiplatform',
    kind: 'class',
    interfaces: [Annotation]
  };
  var Level_WARNING_instance_0;
  var Level_ERROR_instance_0;
  function values_0() {
    return [Level_WARNING_getInstance_0(), Level_ERROR_getInstance_0()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'WARNING':
        return Level_WARNING_getInstance_0();
      case 'ERROR':
        return Level_ERROR_getInstance_0();
      default:Level_initEntries_0();
        THROW_ISE();
        break;
    }
  }
  var Level_entriesInitialized_0;
  function Level_initEntries_0() {
    if (Level_entriesInitialized_0)
      return Unit_getInstance();
    Level_entriesInitialized_0 = true;
    Level_WARNING_instance_0 = new Level_0('WARNING', 0);
    Level_ERROR_instance_0 = new Level_0('ERROR', 1);
  }
  function RequiresOptIn_init_$Init$(message, level, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = '';
    if (!(($mask0 & 2) === 0))
      level = Level_ERROR_getInstance_0();
    RequiresOptIn.call($this, message, level);
    return $this;
  }
  function RequiresOptIn_init_$Create$(message, level, $mask0, $marker) {
    return RequiresOptIn_init_$Init$(message, level, $mask0, $marker, Object.create(RequiresOptIn.prototype));
  }
  function Level_0(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  Level_0.$metadata$ = {
    simpleName: 'Level',
    kind: 'class',
    interfaces: []
  };
  function Level_WARNING_getInstance_0() {
    Level_initEntries_0();
    return Level_WARNING_instance_0;
  }
  function Level_ERROR_getInstance_0() {
    Level_initEntries_0();
    return Level_ERROR_instance_0;
  }
  function RequiresOptIn(message, level) {
    this._message = message;
    this._level_0 = level;
  }
  RequiresOptIn.prototype._get_message__18 = function () {
    return this._message;
  };
  RequiresOptIn.prototype._get_level__2 = function () {
    return this._level_0;
  };
  RequiresOptIn.$metadata$ = {
    simpleName: 'RequiresOptIn',
    kind: 'class',
    interfaces: [Annotation]
  };
  function OptIn(markerClass) {
    this._markerClass_0 = markerClass;
  }
  OptIn.prototype._get_markerClass__0 = function () {
    return this._markerClass_0;
  };
  OptIn.$metadata$ = {
    simpleName: 'OptIn',
    kind: 'class',
    interfaces: [Annotation]
  };
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke_15 = function (it_0) {
    return it_0 === this._this$0 ? '(this Collection)' : toString_0(it_0);
  };
  _no_name_provided_.prototype.invoke_68 = function (p1) {
    return this.invoke_15((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_54 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        if (equals(element_2, element)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_34 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        if (!this.contains_54(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_47 = function () {
    return this._get_size__36() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.prototype.toArray_17 = function (array) {
    return copyToArrayImpl_1(this, array);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke_15(p1);
    };
  }
  function _get_list_($this) {
    return $this._list;
  }
  function _get_fromIndex_($this) {
    return $this._fromIndex;
  }
  function _set__size_($this, _set___) {
    $this.__size = _set___;
  }
  function _get__size_($this) {
    return $this.__size;
  }
  function SubList(list, fromIndex, toIndex) {
    AbstractList.call(this);
    this._list = list;
    this._fromIndex = fromIndex;
    this.__size = 0;
    Companion_getInstance().checkRangeIndexes(this._fromIndex, toIndex, this._list._get_size__36());
    this.__size = toIndex - this._fromIndex | 0;
  }
  SubList.prototype.get_39 = function (index) {
    Companion_getInstance().checkElementIndex(index, this.__size);
    return this._list.get_39(this._fromIndex + index | 0);
  };
  SubList.prototype._get_size__36 = function () {
    return this.__size;
  };
  SubList.$metadata$ = {
    simpleName: 'SubList',
    kind: 'class',
    interfaces: [RandomAccess]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
  }
  IteratorImpl.prototype._set_index__11 = function (_set___) {
    this._index = _set___;
  };
  IteratorImpl.prototype._get_index__11 = function () {
    return this._index;
  };
  IteratorImpl.prototype.hasNext_43 = function () {
    return this._index < this._$this._get_size__36();
  };
  IteratorImpl.prototype.next_48 = function () {
    if (!this.hasNext_43())
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    return this._$this.get_39(tmp1);
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function ListIteratorImpl($outer, index) {
    this._$this_0 = $outer;
    IteratorImpl.call(this, $outer);
    Companion_getInstance().checkPositionIndex(index, this._$this_0._get_size__36());
    this._set_index__11(index);
  }
  ListIteratorImpl.prototype.hasPrevious_3 = function () {
    return this._get_index__11() > 0;
  };
  ListIteratorImpl.prototype.nextIndex_3 = function () {
    return this._get_index__11();
  };
  ListIteratorImpl.prototype.previous_3 = function () {
    if (!this.hasPrevious_3())
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    tmp0_this._set_index__11(tmp0_this._get_index__11() - 1 | 0);
    return this._$this_0.get_39(tmp0_this._get_index__11());
  };
  ListIteratorImpl.prototype.previousIndex_3 = function () {
    return this._get_index__11() - 1 | 0;
  };
  ListIteratorImpl.$metadata$ = {
    simpleName: 'ListIteratorImpl',
    kind: 'class',
    interfaces: [ListIterator]
  };
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex = function (index, size_0) {
    if (index < 0 ? true : index >= size_0) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkPositionIndex = function (index, size_0) {
    if (index < 0 ? true : index > size_0) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'index: ' + index + ', size: ' + size_0);
    }};
  Companion_0.prototype.checkRangeIndexes = function (fromIndex, toIndex, size_0) {
    if (fromIndex < 0 ? true : toIndex > size_0) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size_0);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$_0('' + 'fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  Companion_0.prototype.checkBoundsIndexes = function (startIndex, endIndex, size_0) {
    if (startIndex < 0 ? true : endIndex > size_0) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'startIndex: ' + startIndex + ', endIndex: ' + endIndex + ', size: ' + size_0);
    }if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$_0('' + 'startIndex: ' + startIndex + ' > endIndex: ' + endIndex);
    }};
  Companion_0.prototype.orderedHashCode = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var e = tmp0_iterator.next_48();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals = function (c, other) {
    if (!(c._get_size__36() === other._get_size__36()))
      return false;
    var otherIterator = other.iterator_51();
    var tmp0_iterator = c.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var elem = tmp0_iterator.next_48();
      var elemOther = otherIterator.next_48();
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
  function AbstractList() {
    Companion_getInstance();
    AbstractCollection.call(this);
  }
  AbstractList.prototype.iterator_51 = function () {
    return new IteratorImpl(this);
  };
  AbstractList.prototype.indexOf_9 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var index_1 = 0;
      var tmp0_iterator_2 = this.iterator_51();
      while (tmp0_iterator_2.hasNext_43()) {
        var item_3 = tmp0_iterator_2.next_48();
        if (equals(item_3, element)) {
          tmp$ret$0 = index_1;
          break l$ret$1;
        } else {
        }
        var tmp1_4 = index_1;
        index_1 = tmp1_4 + 1 | 0;
        Unit_getInstance();
      }
      tmp$ret$0 = -1;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractList.prototype.lastIndexOf_9 = function (element) {
    var tmp$ret$0;
    l$ret$1: do {
      var iterator_1 = this.listIterator_14(this._get_size__36());
      while (iterator_1.hasPrevious_3()) {
        var tmp0__anonymous__2 = iterator_1.previous_3();
        if (equals(tmp0__anonymous__2, element)) {
          tmp$ret$0 = iterator_1.nextIndex_3();
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = -1;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractList.prototype.listIterator_13 = function () {
    return new ListIteratorImpl(this, 0);
  };
  AbstractList.prototype.listIterator_14 = function (index) {
    return new ListIteratorImpl(this, index);
  };
  AbstractList.prototype.subList_6 = function (fromIndex, toIndex) {
    return new SubList(this, fromIndex, toIndex);
  };
  AbstractList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  AbstractList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  AbstractList.$metadata$ = {
    simpleName: 'AbstractList',
    kind: 'class',
    interfaces: [List]
  };
  function _no_name_provided__0($entryIterator) {
    this._$entryIterator = $entryIterator;
  }
  _no_name_provided__0.prototype.hasNext_43 = function () {
    return this._$entryIterator.hasNext_43();
  };
  _no_name_provided__0.prototype.next_48 = function () {
    return this._$entryIterator.next_48()._get_key__4();
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _no_name_provided__1($entryIterator) {
    this._$entryIterator_0 = $entryIterator;
  }
  _no_name_provided__1.prototype.hasNext_43 = function () {
    return this._$entryIterator_0.hasNext_43();
  };
  _no_name_provided__1.prototype.next_48 = function () {
    return this._$entryIterator_0.next_48()._get_value__3();
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _set__keys_($this, _set___) {
    $this.__keys = _set___;
  }
  function _get__keys_($this) {
    return $this.__keys;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_firstOrNull_0 = $this._get_entries__5();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        if (equals(element_2._get_key__4(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode = function (e) {
    var tmp2_safe_receiver_4 = e._get_key__4();
    var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
    var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
    var tmp0_safe_receiver_6 = e._get_value__3();
    var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
    return tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
  };
  Companion_1.prototype.entryToString = function (e) {
    return '' + e._get_key__4() + '=' + e._get_value__3();
  };
  Companion_1.prototype.entryEquals = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals(e._get_key__4(), other._get_key__4()) ? equals(e._get_value__3(), other._get_value__3()) : false;
  };
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
  function _no_name_provided__2(this$0) {
    this._this$0_0 = this$0;
    AbstractSet.call(this);
  }
  _no_name_provided__2.prototype.contains_47 = function (element) {
    return this._this$0_0.containsKey_6(element);
  };
  _no_name_provided__2.prototype.contains_54 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_47((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__2.prototype.iterator_51 = function () {
    var entryIterator = this._this$0_0._get_entries__5().iterator_51();
    return new _no_name_provided__0(entryIterator);
  };
  _no_name_provided__2.prototype._get_size__36 = function () {
    return this._this$0_0._get_size__36();
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__3(this$0) {
    this._this$0_1 = this$0;
  }
  _no_name_provided__3.prototype.invoke_1 = function (it_0) {
    return this._this$0_1.toString_0(it_0);
  };
  _no_name_provided__3.prototype.invoke_68 = function (p1) {
    return this.invoke_1((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__4(this$0) {
    this._this$0_2 = this$0;
    AbstractCollection.call(this);
  }
  _no_name_provided__4.prototype.contains_41 = function (element) {
    return this._this$0_2.containsValue_6(element);
  };
  _no_name_provided__4.prototype.contains_54 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_41((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__4.prototype.iterator_51 = function () {
    var entryIterator = this._this$0_2._get_entries__5().iterator_51();
    return new _no_name_provided__1(entryIterator);
  };
  _no_name_provided__4.prototype._get_size__36 = function () {
    return this._this$0_2._get_size__36();
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_6 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsValue_6 = function (value) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_any_0 = this._get_entries__5();
      var tmp;
      if (isInterface(tmp0_any_0, Collection)) {
        tmp = tmp0_any_0.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_any_0.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        if (equals(element_2._get_value__3(), value)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractMap.prototype.containsEntry_5 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__4();
    var value = entry._get_value__3();
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).get_29(key);
    if (!equals(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_6(key);
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__36() === other._get_size__36()))
      return false;
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = other._get_entries__5();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        if (!this.containsEntry_5(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_29 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__3();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__5());
  };
  AbstractMap.prototype.isEmpty_47 = function () {
    return this._get_size__36() === 0;
  };
  AbstractMap.prototype._get_size__36 = function () {
    return this._get_entries__5()._get_size__36();
  };
  AbstractMap.prototype._get_keys__6 = function () {
    if (this.__keys == null) {
      var tmp = this;
      tmp.__keys = new _no_name_provided__2(this);
    }return ensureNotNull(this.__keys);
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__5();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_0 = function (entry) {
    return toString(this, entry._get_key__4()) + '=' + toString(this, entry._get_value__3());
  };
  AbstractMap.prototype._get_values__6 = function () {
    if (this.__values == null) {
      var tmp = this;
      tmp.__values = new _no_name_provided__4(this);
    }return ensureNotNull(this.__values);
  };
  AbstractMap.prototype._set__values_ = function (_set___) {
    this.__values = _set___;
  };
  AbstractMap.prototype._get__values_ = function () {
    return this.__values;
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__3(this$0);
    return function (p1) {
      return i.invoke_1(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals = function (c, other) {
    if (!(c._get_size__36() === other._get_size__36()))
      return false;
    return c.containsAll_34(other);
  };
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
  function AbstractSet() {
    Companion_getInstance_1();
    AbstractCollection.call(this);
  }
  AbstractSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals(this, other);
  };
  AbstractSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode(this);
  };
  AbstractSet.$metadata$ = {
    simpleName: 'AbstractSet',
    kind: 'class',
    interfaces: [Set]
  };
  function mutableListOf() {
    return ArrayList_init_$Create$();
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function listOf(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function isNotEmpty(_this_) {
    return !_this_.isEmpty_47();
  }
  function mutableListOf_0(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_2(new ArrayAsCollection(elements, true));
  }
  function asCollection(_this_) {
    return new ArrayAsCollection(_this_, false);
  }
  function _get_lastIndex__4(_this_) {
    return _this_._get_size__36() - 1 | 0;
  }
  function optimizeReadOnlyList(_this_) {
    var tmp0_subject = _this_._get_size__36();
    switch (tmp0_subject) {
      case 0:
        return emptyList();
      case 1:
        return listOf_0(_this_.get_39(0));
      default:return _this_;
    }
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_2(new ArrayAsCollection(elements, true));
  }
  function _get_serialVersionUID_($this) {
    return $this._serialVersionUID;
  }
  function readResolve($this) {
    return EmptyList_getInstance();
  }
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_47();
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
  EmptyList.prototype._get_size__36 = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_47 = function () {
    return true;
  };
  EmptyList.prototype.contains_11 = function (element) {
    return false;
  };
  EmptyList.prototype.contains_54 = function (element) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.contains_11(tmp);
  };
  EmptyList.prototype.containsAll_9 = function (elements) {
    return elements.isEmpty_47();
  };
  EmptyList.prototype.containsAll_34 = function (elements) {
    return this.containsAll_9(elements);
  };
  EmptyList.prototype.get_39 = function (index) {
    throw IndexOutOfBoundsException_init_$Create$_0('' + "Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.indexOf_1 = function (element) {
    return -1;
  };
  EmptyList.prototype.indexOf_9 = function (element) {
    if (!false)
      return -1;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.indexOf_1(tmp);
  };
  EmptyList.prototype.lastIndexOf_1 = function (element) {
    return -1;
  };
  EmptyList.prototype.lastIndexOf_9 = function (element) {
    if (!false)
      return -1;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.lastIndexOf_1(tmp);
  };
  EmptyList.prototype.iterator_51 = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.prototype.listIterator_13 = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.prototype.listIterator_14 = function (index) {
    if (!(index === 0))
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'Index: ' + index);
    return EmptyIterator_getInstance();
  };
  EmptyList.prototype.subList_6 = function (fromIndex, toIndex) {
    if (fromIndex === 0 ? toIndex === 0 : false)
      return this;
    throw IndexOutOfBoundsException_init_$Create$_0('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex);
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
  function ArrayAsCollection(values_8, isVarargs) {
    this._values_0 = values_8;
    this._isVarargs = isVarargs;
  }
  ArrayAsCollection.prototype._get_values__6 = function () {
    return this._values_0;
  };
  ArrayAsCollection.prototype._get_isVarargs_ = function () {
    return this._isVarargs;
  };
  ArrayAsCollection.prototype._get_size__36 = function () {
    return this._values_0.length;
  };
  ArrayAsCollection.prototype.isEmpty_47 = function () {
    var tmp0_isEmpty_0 = this._values_0;
    return tmp0_isEmpty_0.length === 0;
  };
  ArrayAsCollection.prototype.contains_34 = function (element) {
    return contains(this._values_0, element);
  };
  ArrayAsCollection.prototype.contains_54 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_34((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ArrayAsCollection.prototype.containsAll_7 = function (elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        if (!this.contains_34(element_2)) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  };
  ArrayAsCollection.prototype.containsAll_34 = function (elements) {
    return this.containsAll_7(elements);
  };
  ArrayAsCollection.prototype.iterator_51 = function () {
    return arrayIterator(this._values_0);
  };
  ArrayAsCollection.prototype.toArray_15 = function () {
    var tmp0_copyToArrayOfAny_0 = this._values_0;
    var tmp1_copyToArrayOfAny_0 = this._isVarargs;
    var tmp;
    if (tmp1_copyToArrayOfAny_0) {
      tmp = tmp0_copyToArrayOfAny_0;
    } else {
      tmp = tmp0_copyToArrayOfAny_0.slice();
    }
    return tmp;
  };
  ArrayAsCollection.$metadata$ = {
    simpleName: 'ArrayAsCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_43 = function () {
    return false;
  };
  EmptyIterator.prototype.hasPrevious_3 = function () {
    return false;
  };
  EmptyIterator.prototype.nextIndex_3 = function () {
    return 0;
  };
  EmptyIterator.prototype.previousIndex_3 = function () {
    return -1;
  };
  EmptyIterator.prototype.next_48 = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.prototype.previous_3 = function () {
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
  function containsAll(_this_, elements) {
    return _this_.containsAll_34(elements);
  }
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__36();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function iterator(_this_) {
    return _this_;
  }
  function mapOf(pairs) {
    return pairs.length > 0 ? toMap(pairs, LinkedHashMap_init_$Create$_3(mapCapacity(pairs.length))) : emptyMap();
  }
  function toMap(_this_, destination) {
    putAll(destination, _this_);
    return destination;
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map_0) ? tmp : THROW_CCE();
  }
  function putAll(_this_, pairs) {
    var indexedObject = pairs;
    var inductionVariable = 0;
    var last_2 = indexedObject.length;
    while (inductionVariable < last_2) {
      var tmp1_loop_parameter = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.component1_1();
      var value = tmp1_loop_parameter.component2_1();
      _this_.put_4(key, value);
      Unit_getInstance();
    }
  }
  function _get_serialVersionUID__0($this) {
    return $this._serialVersionUID_0;
  }
  function readResolve_0($this) {
    return EmptyMap_getInstance();
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this._serialVersionUID_0 = new Long(-888910638, 1920087921);
  }
  EmptyMap.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map_0) : false) {
      tmp = other.isEmpty_47();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyMap.prototype.hashCode = function () {
    return 0;
  };
  EmptyMap.prototype.toString = function () {
    return '{}';
  };
  EmptyMap.prototype._get_size__36 = function () {
    return 0;
  };
  EmptyMap.prototype.isEmpty_47 = function () {
    return true;
  };
  EmptyMap.prototype.containsKey_0 = function (key) {
    return false;
  };
  EmptyMap.prototype.containsKey_6 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return false;
    else {
    }
    return this.containsKey_0((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype.containsValue_0 = function (value) {
    return false;
  };
  EmptyMap.prototype.containsValue_6 = function (value) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = value;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.containsValue_0(tmp);
  };
  EmptyMap.prototype.get_3 = function (key) {
    return null;
  };
  EmptyMap.prototype.get_29 = function (key) {
    if (!(key == null ? true : isObject(key)))
      return null;
    else {
    }
    return this.get_3((key == null ? true : isObject(key)) ? key : THROW_CCE());
  };
  EmptyMap.prototype._get_entries__5 = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.prototype._get_keys__6 = function () {
    return EmptySet_getInstance();
  };
  EmptyMap.prototype._get_values__6 = function () {
    return EmptyList_getInstance();
  };
  EmptyMap.$metadata$ = {
    simpleName: 'EmptyMap',
    kind: 'object',
    interfaces: [Map_0, Serializable]
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function iterator_0(_this_) {
    return _this_._get_entries__5().iterator_51();
  }
  function component1_0(_this_) {
    return _this_._get_key__4();
  }
  function component2_0(_this_) {
    return _this_._get_value__3();
  }
  function get(_this_, key) {
    return (isInterface(_this_, Map_0) ? _this_ : THROW_CCE()).get_29(key);
  }
  function containsKey(_this_, key) {
    return (isInterface(_this_, Map_0) ? _this_ : THROW_CCE()).containsKey_6(key);
  }
  function addAll(_this_, elements) {
    var tmp0_subject = elements;
    if (isInterface(tmp0_subject, Collection))
      return _this_.addAll_15(elements);
    else {
      {
        var result = false;
        var tmp1_iterator = elements.iterator_51();
        while (tmp1_iterator.hasNext_43()) {
          var item = tmp1_iterator.next_48();
          if (_this_.add_22(item))
            result = true;
        }
        return result;
      }
    }
  }
  function removeAll(_this_, predicate) {
    return filterInPlace(_this_, predicate, true);
  }
  function removeAll_0(_this_, predicate) {
    return filterInPlace_0(_this_, predicate, true);
  }
  function filterInPlace(_this_, predicate, predicateResultToRemove) {
    if (!isInterface(_this_, RandomAccess)) {
      return filterInPlace_0(isInterface(_this_, MutableIterable) ? _this_ : THROW_CCE(), predicate, predicateResultToRemove);
    } else {
    }
    var writeIndex = 0;
    var inductionVariable = 0;
    var last_2 = _get_lastIndex__4(_this_);
    if (inductionVariable <= last_2)
      do {
        var readIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this_.get_39(readIndex);
        if (predicate(element) === predicateResultToRemove)
          continue;
        if (!(writeIndex === readIndex)) {
          _this_.set_9(writeIndex, element);
          Unit_getInstance();
        }var tmp1 = writeIndex;
        writeIndex = tmp1 + 1 | 0;
        Unit_getInstance();
      }
       while (!(readIndex === last_2));
    if (writeIndex < _this_._get_size__36()) {
      var inductionVariable_0 = _get_lastIndex__4(_this_);
      if (writeIndex <= inductionVariable_0)
        do {
          var removeIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          _this_.removeAt_2(removeIndex);
          Unit_getInstance();
        }
         while (!(removeIndex === writeIndex));
      return true;
    } else {
      return false;
    }
  }
  function filterInPlace_0(_this_, predicate, predicateResultToRemove) {
    var result = false;
    var tmp0_with_0 = _this_.iterator_51();
    while (tmp0_with_0.hasNext_43())
      if (predicate(tmp0_with_0.next_48()) === predicateResultToRemove) {
        tmp0_with_0.remove_21();
        result = true;
      }return result;
  }
  function Sequence() {
  }
  Sequence.$metadata$ = {
    simpleName: 'Sequence',
    kind: 'interface',
    interfaces: []
  };
  function _get_serialVersionUID__1($this) {
    return $this._serialVersionUID_1;
  }
  function readResolve_1($this) {
    return EmptySet_getInstance();
  }
  function EmptySet() {
    EmptySet_instance = this;
    this._serialVersionUID_1 = new Long(1993859828, 793161749);
  }
  EmptySet.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.isEmpty_47();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptySet.prototype.hashCode = function () {
    return 0;
  };
  EmptySet.prototype.toString = function () {
    return '[]';
  };
  EmptySet.prototype._get_size__36 = function () {
    return 0;
  };
  EmptySet.prototype.isEmpty_47 = function () {
    return true;
  };
  EmptySet.prototype.contains_11 = function (element) {
    return false;
  };
  EmptySet.prototype.contains_54 = function (element) {
    if (!false)
      return false;
    else {
    }
    var tmp;
    if (false) {
      tmp = element;
    } else {
      {
        tmp = THROW_CCE();
      }
    }
    return this.contains_11(tmp);
  };
  EmptySet.prototype.containsAll_9 = function (elements) {
    return elements.isEmpty_47();
  };
  EmptySet.prototype.containsAll_34 = function (elements) {
    return this.containsAll_9(elements);
  };
  EmptySet.prototype.iterator_51 = function () {
    return EmptyIterator_getInstance();
  };
  EmptySet.$metadata$ = {
    simpleName: 'EmptySet',
    kind: 'object',
    interfaces: [Set, Serializable]
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function contract(builder) {
  }
  ContractBuilder.prototype.callsInPlace$default = function (lambda, kind, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      kind = InvocationKind_UNKNOWN_getInstance();
    return $handler == null ? this.callsInPlace(lambda, kind) : $handler(lambda, kind);
  };
  function ContractBuilder() {
  }
  ContractBuilder.$metadata$ = {
    simpleName: 'ContractBuilder',
    kind: 'interface',
    interfaces: []
  };
  var InvocationKind_AT_MOST_ONCE_instance;
  var InvocationKind_AT_LEAST_ONCE_instance;
  var InvocationKind_EXACTLY_ONCE_instance;
  var InvocationKind_UNKNOWN_instance;
  function values_1() {
    return [InvocationKind_AT_MOST_ONCE_getInstance(), InvocationKind_AT_LEAST_ONCE_getInstance(), InvocationKind_EXACTLY_ONCE_getInstance(), InvocationKind_UNKNOWN_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'AT_MOST_ONCE':
        return InvocationKind_AT_MOST_ONCE_getInstance();
      case 'AT_LEAST_ONCE':
        return InvocationKind_AT_LEAST_ONCE_getInstance();
      case 'EXACTLY_ONCE':
        return InvocationKind_EXACTLY_ONCE_getInstance();
      case 'UNKNOWN':
        return InvocationKind_UNKNOWN_getInstance();
      default:InvocationKind_initEntries();
        THROW_ISE();
        break;
    }
  }
  var InvocationKind_entriesInitialized;
  function InvocationKind_initEntries() {
    if (InvocationKind_entriesInitialized)
      return Unit_getInstance();
    InvocationKind_entriesInitialized = true;
    InvocationKind_AT_MOST_ONCE_instance = new InvocationKind('AT_MOST_ONCE', 0);
    InvocationKind_AT_LEAST_ONCE_instance = new InvocationKind('AT_LEAST_ONCE', 1);
    InvocationKind_EXACTLY_ONCE_instance = new InvocationKind('EXACTLY_ONCE', 2);
    InvocationKind_UNKNOWN_instance = new InvocationKind('UNKNOWN', 3);
  }
  function InvocationKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  InvocationKind.$metadata$ = {
    simpleName: 'InvocationKind',
    kind: 'class',
    interfaces: []
  };
  function ExperimentalContracts() {
  }
  ExperimentalContracts.$metadata$ = {
    simpleName: 'ExperimentalContracts',
    kind: 'class',
    interfaces: [Annotation]
  };
  function InvocationKind_AT_MOST_ONCE_getInstance() {
    InvocationKind_initEntries();
    return InvocationKind_AT_MOST_ONCE_instance;
  }
  function InvocationKind_AT_LEAST_ONCE_getInstance() {
    InvocationKind_initEntries();
    return InvocationKind_AT_LEAST_ONCE_instance;
  }
  function InvocationKind_EXACTLY_ONCE_getInstance() {
    InvocationKind_initEntries();
    return InvocationKind_EXACTLY_ONCE_instance;
  }
  function InvocationKind_UNKNOWN_getInstance() {
    InvocationKind_initEntries();
    return InvocationKind_UNKNOWN_instance;
  }
  function CallsInPlace() {
  }
  CallsInPlace.$metadata$ = {
    simpleName: 'CallsInPlace',
    kind: 'interface',
    interfaces: [Effect]
  };
  function Returns() {
  }
  Returns.$metadata$ = {
    simpleName: 'Returns',
    kind: 'interface',
    interfaces: [SimpleEffect]
  };
  function ReturnsNotNull() {
  }
  ReturnsNotNull.$metadata$ = {
    simpleName: 'ReturnsNotNull',
    kind: 'interface',
    interfaces: [SimpleEffect]
  };
  function Effect() {
  }
  Effect.$metadata$ = {
    simpleName: 'Effect',
    kind: 'interface',
    interfaces: []
  };
  function SimpleEffect() {
  }
  SimpleEffect.$metadata$ = {
    simpleName: 'SimpleEffect',
    kind: 'interface',
    interfaces: [Effect]
  };
  function ConditionalEffect() {
  }
  ConditionalEffect.$metadata$ = {
    simpleName: 'ConditionalEffect',
    kind: 'interface',
    interfaces: [Effect]
  };
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function Continuation_0(context, resumeWith) {
    return new _no_name_provided__5(context, resumeWith);
  }
  function resumeWithException(_this_, exception) {
    var tmp0_failure_0 = Companion_getInstance_4();
    return _this_.resumeWith_6(_Result___init__impl_(createFailure(exception)));
  }
  function resume(_this_, value) {
    var tmp0_success_0 = Companion_getInstance_4();
    return _this_.resumeWith_6(_Result___init__impl_(value));
  }
  function _get_coroutineContext_() {
    throw new NotImplementedError('Implemented as intrinsic');
  }
  function _no_name_provided__5($context, $resumeWith) {
    this._$context = $context;
    this._$resumeWith = $resumeWith;
  }
  _no_name_provided__5.prototype._get_context__4 = function () {
    return this._$context;
  };
  _no_name_provided__5.prototype.resumeWith_6 = function (result) {
    return this._$resumeWith(new Result(result));
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: [Continuation]
  };
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  ContinuationInterceptor.prototype.releaseInterceptedContinuation = function (continuation) {
  };
  ContinuationInterceptor.prototype.get_9 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if (key.isSubKey(this._get_key__4())) {
        var tmp_0 = key.tryCast(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element) : false) ? tmp_0 : null;
      } else {
        tmp = null;
      }
      return tmp;
    } else {
    }
    var tmp_1;
    if (Key_getInstance() === key) {
      tmp_1 = isInterface(this, Element) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  };
  ContinuationInterceptor.prototype.minusKey_3 = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      return (key.isSubKey(this._get_key__4()) ? !(key.tryCast(this) == null) : false) ? EmptyCoroutineContext_getInstance() : this;
    } else {
    }
    return Key_getInstance() === key ? EmptyCoroutineContext_getInstance() : this;
  };
  function ContinuationInterceptor() {
    Key_getInstance();
  }
  ContinuationInterceptor.$metadata$ = {
    simpleName: 'ContinuationInterceptor',
    kind: 'interface',
    interfaces: [Element]
  };
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  Element.prototype.get_9 = function (key) {
    var tmp;
    if (equals(this._get_key__4(), key)) {
      tmp = isInterface(this, Element) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  Element.prototype.fold_3 = function (initial, operation) {
    return operation(initial, this);
  };
  Element.prototype.minusKey_3 = function (key) {
    return equals(this._get_key__4(), key) ? EmptyCoroutineContext_getInstance() : this;
  };
  function Element() {
  }
  Element.$metadata$ = {
    simpleName: 'Element',
    kind: 'interface',
    interfaces: [CoroutineContext]
  };
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_3 = function (acc, element) {
    var removed = acc.minusKey_3(element._get_key__4());
    var tmp;
    if (removed === EmptyCoroutineContext_getInstance()) {
      tmp = element;
    } else {
      var interceptor = removed.get_9(Key_getInstance());
      var tmp_0;
      if (interceptor == null) {
        tmp_0 = new CombinedContext(removed, element);
      } else {
        var left = removed.minusKey_3(Key_getInstance());
        tmp_0 = left === EmptyCoroutineContext_getInstance() ? new CombinedContext(element, interceptor) : new CombinedContext(new CombinedContext(left, element), interceptor);
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  _no_name_provided__6.prototype.invoke_66 = function (p1, p2) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineContext) : false) ? p1 : THROW_CCE();
    return this.invoke_3(tmp, (!(p2 == null) ? isInterface(p2, Element) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  CoroutineContext.prototype.plus_3 = function (context) {
    var tmp;
    if (context === EmptyCoroutineContext_getInstance()) {
      tmp = this;
    } else {
      tmp = context.fold_3(this, _no_name_provided_$factory_1());
    }
    return tmp;
  };
  function CoroutineContext() {
  }
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__6();
    return function (p1, p2) {
      return i.invoke_3(p1, p2);
    };
  }
  function _get_serialVersionUID__2($this) {
    return $this._serialVersionUID_2;
  }
  function readResolve_2($this) {
    return EmptyCoroutineContext_getInstance();
  }
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this._serialVersionUID_2 = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.get_9 = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.fold_3 = function (initial, operation) {
    return initial;
  };
  EmptyCoroutineContext.prototype.plus_3 = function (context) {
    return context;
  };
  EmptyCoroutineContext.prototype.minusKey_3 = function (key) {
    return this;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  EmptyCoroutineContext.$metadata$ = {
    simpleName: 'EmptyCoroutineContext',
    kind: 'object',
    interfaces: [CoroutineContext, Serializable]
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function _get_serialVersionUID__3($this) {
    return $this._serialVersionUID_3;
  }
  function Companion_3() {
    Companion_instance_2 = this;
    this._serialVersionUID_3 = new Long(0, 0);
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
  function readResolve_3($this) {
    var tmp0_fold_0 = $this._elements;
    var tmp1_fold_0 = EmptyCoroutineContext_getInstance();
    var accumulator_1 = tmp1_fold_0;
    var indexedObject = tmp0_fold_0;
    var inductionVariable = 0;
    var last_2 = indexedObject.length;
    while (inductionVariable < last_2) {
      var element_3 = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator_1 = accumulator_1.plus_3(element_3);
    }
    return accumulator_1;
  }
  function _get_left_($this) {
    return $this._left;
  }
  function _get_element_($this) {
    return $this._element;
  }
  function size($this) {
    var cur = $this;
    var size_0 = 2;
    while (true) {
      var tmp = cur._left;
      var tmp0_elvis_lhs = tmp instanceof CombinedContext ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        return size_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      cur = tmp_0;
      var tmp1 = size_0;
      size_0 = tmp1 + 1 | 0;
      Unit_getInstance();
    }
  }
  function contains_4($this, element) {
    return equals($this.get_9(element._get_key__4()), element);
  }
  function containsAll_0($this, context) {
    var cur = context;
    while (true) {
      if (!contains_4($this, cur._element))
        return false;
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return contains_4($this, isInterface(next, Element) ? next : THROW_CCE());
        }
      }
    }
  }
  function writeReplace($this) {
    var n = size($this);
    var elements = fillArrayVal(Array(n), null);
    var index = {_v: 0};
    $this.fold_3(Unit_getInstance(), _no_name_provided_$factory_3(elements, index));
    var tmp0_check_0 = index._v === n;
    if (!tmp0_check_0) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_2));
    }return new Serialized(isArray(elements) ? elements : THROW_CCE());
  }
  function Serialized(elements) {
    Companion_getInstance_2();
    this._elements = elements;
  }
  Serialized.prototype._get_elements_ = function () {
    return this._elements;
  };
  Serialized.$metadata$ = {
    simpleName: 'Serialized',
    kind: 'class',
    interfaces: [Serializable]
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_5 = function (acc, element) {
    var tmp;
    if (charSequenceLength(acc) === 0) {
      tmp = toString_1(element);
    } else {
      {
        tmp = '' + acc + ', ' + element;
      }
    }
    return tmp;
  };
  _no_name_provided__7.prototype.invoke_66 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_5(tmp, (!(p2 == null) ? isInterface(p2, Element) : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8($elements, $index) {
    this._$elements = $elements;
    this._$index = $index;
  }
  _no_name_provided__8.prototype.invoke_7 = function (_anonymous_parameter_0_, element) {
    var tmp0 = this._$index._v;
    this._$index._v = tmp0 + 1 | 0;
    this._$elements[tmp0] = element;
  };
  _no_name_provided__8.prototype.invoke_66 = function (p1, p2) {
    var tmp = p1 instanceof Unit ? p1 : THROW_CCE();
    this.invoke_7(tmp, (!(p2 == null) ? isInterface(p2, Element) : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function CombinedContext(left, element) {
    this._left = left;
    this._element = element;
  }
  CombinedContext.prototype.get_9 = function (key) {
    var cur = this;
    while (true) {
      var tmp0_safe_receiver = cur._element.get_9(key);
      if (tmp0_safe_receiver == null)
        null;
      else {
        return tmp0_safe_receiver;
      }
      Unit_getInstance();
      var next = cur._left;
      if (next instanceof CombinedContext) {
        cur = next;
      } else {
        {
          return next.get_9(key);
        }
      }
    }
  };
  CombinedContext.prototype.fold_3 = function (initial, operation) {
    return operation(this._left.fold_3(initial, operation), this._element);
  };
  CombinedContext.prototype.minusKey_3 = function (key) {
    var tmp0_safe_receiver = this._element.get_9(key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      return this._left;
    }
    Unit_getInstance();
    var newLeft = this._left.minusKey_3(key);
    return newLeft === this._left ? this : newLeft === EmptyCoroutineContext_getInstance() ? this._element : new CombinedContext(newLeft, this._element);
  };
  CombinedContext.prototype.equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      if (other instanceof CombinedContext) {
        tmp_1 = size(other) === size(this);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = containsAll_0(other, this);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CombinedContext.prototype.hashCode = function () {
    return hashCode(this._left) + hashCode(this._element) | 0;
  };
  CombinedContext.prototype.toString = function () {
    return '[' + this.fold_3('', _no_name_provided_$factory_2()) + ']';
  };
  CombinedContext.$metadata$ = {
    simpleName: 'CombinedContext',
    kind: 'class',
    interfaces: [CoroutineContext, Serializable]
  };
  function _get_safeCast_($this) {
    return $this._safeCast;
  }
  function _get_topmostKey_($this) {
    return $this._topmostKey;
  }
  function AbstractCoroutineContextKey(baseKey, safeCast) {
    this._safeCast = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = baseKey._topmostKey;
    } else {
      {
        tmp_0 = baseKey;
      }
    }
    tmp._topmostKey = tmp_0;
  }
  AbstractCoroutineContextKey.prototype.tryCast = function (element) {
    return this._safeCast(element);
  };
  AbstractCoroutineContextKey.prototype.isSubKey = function (key) {
    return key === this ? true : this._topmostKey === key;
  };
  AbstractCoroutineContextKey.$metadata$ = {
    simpleName: 'AbstractCoroutineContextKey',
    kind: 'class',
    interfaces: [Key_0]
  };
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__7();
    return function (p1, p2) {
      return i.invoke_5(p1, p2);
    };
  }
  function _no_name_provided_$factory_3($elements, $index) {
    var i = new _no_name_provided__8($elements, $index);
    return function (p1, p2) {
      i.invoke_7(p1, p2);
      return Unit_getInstance();
    };
  }
  function _get_COROUTINE_SUSPENDED_() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  function values_2() {
    return [CoroutineSingletons_COROUTINE_SUSPENDED_getInstance(), CoroutineSingletons_UNDECIDED_getInstance(), CoroutineSingletons_RESUMED_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'COROUTINE_SUSPENDED':
        return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
      case 'UNDECIDED':
        return CoroutineSingletons_UNDECIDED_getInstance();
      case 'RESUMED':
        return CoroutineSingletons_RESUMED_getInstance();
      default:CoroutineSingletons_initEntries();
        THROW_ISE();
        break;
    }
  }
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function CoroutineSingletons_UNDECIDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_UNDECIDED_instance;
  }
  function CoroutineSingletons_RESUMED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_RESUMED_instance;
  }
  function and(_this_, other) {
    return toShort(_this_ & other);
  }
  function or(_this_, other) {
    return toShort(_this_ | other);
  }
  function xor(_this_, other) {
    return toShort(_this_ ^ other);
  }
  function inv(_this_) {
    return toShort(~_this_);
  }
  function and_0(_this_, other) {
    return toByte(_this_ & other);
  }
  function or_0(_this_, other) {
    return toByte(_this_ | other);
  }
  function xor_0(_this_, other) {
    return toByte(_this_ ^ other);
  }
  function inv_0(_this_) {
    return toByte(~_this_);
  }
  function ExperimentalTypeInference() {
  }
  ExperimentalTypeInference.$metadata$ = {
    simpleName: 'ExperimentalTypeInference',
    kind: 'class',
    interfaces: [Annotation]
  };
  function RequireKotlin_init_$Init$(version, message, level, versionKind, errorCode, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      message = '';
    if (!(($mask0 & 4) === 0))
      level = DeprecationLevel_ERROR_getInstance();
    if (!(($mask0 & 8) === 0))
      versionKind = RequireKotlinVersionKind_LANGUAGE_VERSION_getInstance();
    if (!(($mask0 & 16) === 0))
      errorCode = -1;
    RequireKotlin.call($this, version, message, level, versionKind, errorCode);
    return $this;
  }
  function RequireKotlin_init_$Create$(version, message, level, versionKind, errorCode, $mask0, $marker) {
    return RequireKotlin_init_$Init$(version, message, level, versionKind, errorCode, $mask0, $marker, Object.create(RequireKotlin.prototype));
  }
  function RequireKotlin(version, message, level, versionKind, errorCode) {
    this._version = version;
    this._message_0 = message;
    this._level_1 = level;
    this._versionKind = versionKind;
    this._errorCode = errorCode;
  }
  RequireKotlin.prototype._get_version__0 = function () {
    return this._version;
  };
  RequireKotlin.prototype._get_message__18 = function () {
    return this._message_0;
  };
  RequireKotlin.prototype._get_level__2 = function () {
    return this._level_1;
  };
  RequireKotlin.prototype._get_versionKind_ = function () {
    return this._versionKind;
  };
  RequireKotlin.prototype._get_errorCode_ = function () {
    return this._errorCode;
  };
  RequireKotlin.$metadata$ = {
    simpleName: 'RequireKotlin',
    kind: 'class',
    interfaces: [Annotation]
  };
  var RequireKotlinVersionKind_LANGUAGE_VERSION_instance;
  var RequireKotlinVersionKind_COMPILER_VERSION_instance;
  var RequireKotlinVersionKind_API_VERSION_instance;
  function values_3() {
    return [RequireKotlinVersionKind_LANGUAGE_VERSION_getInstance(), RequireKotlinVersionKind_COMPILER_VERSION_getInstance(), RequireKotlinVersionKind_API_VERSION_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'LANGUAGE_VERSION':
        return RequireKotlinVersionKind_LANGUAGE_VERSION_getInstance();
      case 'COMPILER_VERSION':
        return RequireKotlinVersionKind_COMPILER_VERSION_getInstance();
      case 'API_VERSION':
        return RequireKotlinVersionKind_API_VERSION_getInstance();
      default:RequireKotlinVersionKind_initEntries();
        THROW_ISE();
        break;
    }
  }
  var RequireKotlinVersionKind_entriesInitialized;
  function RequireKotlinVersionKind_initEntries() {
    if (RequireKotlinVersionKind_entriesInitialized)
      return Unit_getInstance();
    RequireKotlinVersionKind_entriesInitialized = true;
    RequireKotlinVersionKind_LANGUAGE_VERSION_instance = new RequireKotlinVersionKind('LANGUAGE_VERSION', 0);
    RequireKotlinVersionKind_COMPILER_VERSION_instance = new RequireKotlinVersionKind('COMPILER_VERSION', 1);
    RequireKotlinVersionKind_API_VERSION_instance = new RequireKotlinVersionKind('API_VERSION', 2);
  }
  function RequireKotlinVersionKind(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  RequireKotlinVersionKind.$metadata$ = {
    simpleName: 'RequireKotlinVersionKind',
    kind: 'class',
    interfaces: []
  };
  function InlineOnly() {
  }
  InlineOnly.$metadata$ = {
    simpleName: 'InlineOnly',
    kind: 'class',
    interfaces: [Annotation]
  };
  function NoInfer() {
  }
  NoInfer.$metadata$ = {
    simpleName: 'NoInfer',
    kind: 'class',
    interfaces: [Annotation]
  };
  function DynamicExtension() {
  }
  DynamicExtension.$metadata$ = {
    simpleName: 'DynamicExtension',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ContractsDsl() {
  }
  ContractsDsl.$metadata$ = {
    simpleName: 'ContractsDsl',
    kind: 'class',
    interfaces: [Annotation]
  };
  function HidesMembers() {
  }
  HidesMembers.$metadata$ = {
    simpleName: 'HidesMembers',
    kind: 'class',
    interfaces: [Annotation]
  };
  function OnlyInputTypes() {
  }
  OnlyInputTypes.$metadata$ = {
    simpleName: 'OnlyInputTypes',
    kind: 'class',
    interfaces: [Annotation]
  };
  function RequireKotlinVersionKind_LANGUAGE_VERSION_getInstance() {
    RequireKotlinVersionKind_initEntries();
    return RequireKotlinVersionKind_LANGUAGE_VERSION_instance;
  }
  function RequireKotlinVersionKind_COMPILER_VERSION_getInstance() {
    RequireKotlinVersionKind_initEntries();
    return RequireKotlinVersionKind_COMPILER_VERSION_instance;
  }
  function RequireKotlinVersionKind_API_VERSION_getInstance() {
    RequireKotlinVersionKind_initEntries();
    return RequireKotlinVersionKind_API_VERSION_instance;
  }
  ClosedFloatingPointRange.prototype.contains_34 = function (value) {
    return this.lessThanOrEquals_1(this._get_start__8(), value) ? this.lessThanOrEquals_1(value, this._get_endInclusive__8()) : false;
  };
  ClosedFloatingPointRange.prototype.isEmpty_47 = function () {
    return !this.lessThanOrEquals_1(this._get_start__8(), this._get_endInclusive__8());
  };
  function ClosedFloatingPointRange() {
  }
  ClosedFloatingPointRange.$metadata$ = {
    simpleName: 'ClosedFloatingPointRange',
    kind: 'interface',
    interfaces: [ClosedRange]
  };
  function rangeTo(_this_, that) {
    return new ClosedDoubleRange(_this_, that);
  }
  function _get__start_($this) {
    return $this.__start;
  }
  function _get__endInclusive_($this) {
    return $this.__endInclusive;
  }
  function ClosedDoubleRange(start, endInclusive) {
    this.__start = start;
    this.__endInclusive = endInclusive;
  }
  ClosedDoubleRange.prototype._get_start__8 = function () {
    return this.__start;
  };
  ClosedDoubleRange.prototype._get_endInclusive__8 = function () {
    return this.__endInclusive;
  };
  ClosedDoubleRange.prototype.lessThanOrEquals_0 = function (a, b) {
    return a <= b;
  };
  ClosedDoubleRange.prototype.lessThanOrEquals_1 = function (a, b) {
    var tmp = typeof a === 'number' ? a : THROW_CCE();
    return this.lessThanOrEquals_0(tmp, typeof b === 'number' ? b : THROW_CCE());
  };
  ClosedDoubleRange.prototype.contains_14 = function (value) {
    return value >= this.__start ? value <= this.__endInclusive : false;
  };
  ClosedDoubleRange.prototype.contains_34 = function (value) {
    return this.contains_14(typeof value === 'number' ? value : THROW_CCE());
  };
  ClosedDoubleRange.prototype.isEmpty_47 = function () {
    return !(this.__start <= this.__endInclusive);
  };
  ClosedDoubleRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof ClosedDoubleRange) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : this.__start === other.__start ? this.__endInclusive === other.__endInclusive : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ClosedDoubleRange.prototype.hashCode = function () {
    return this.isEmpty_47() ? -1 : imul(31, getNumberHashCode(this.__start)) + getNumberHashCode(this.__endInclusive) | 0;
  };
  ClosedDoubleRange.prototype.toString = function () {
    return '' + this.__start + '..' + this.__endInclusive;
  };
  ClosedDoubleRange.$metadata$ = {
    simpleName: 'ClosedDoubleRange',
    kind: 'class',
    interfaces: [ClosedFloatingPointRange]
  };
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function KTypeParameter() {
  }
  KTypeParameter.$metadata$ = {
    simpleName: 'KTypeParameter',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function Companion_4() {
    Companion_instance_3 = this;
    this._star = new KTypeProjection(null, null);
  }
  Companion_4.prototype._get_star_ = function () {
    return this._star;
  };
  Companion_4.prototype._get_STAR_ = function () {
    return this._star;
  };
  Companion_4.prototype.invariant = function (type) {
    return new KTypeProjection(KVariance_INVARIANT_getInstance(), type);
  };
  Companion_4.prototype.contravariant = function (type) {
    return new KTypeProjection(KVariance_IN_getInstance(), type);
  };
  Companion_4.prototype.covariant = function (type) {
    return new KTypeProjection(KVariance_OUT_getInstance(), type);
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
  function KTypeProjection(variance, type) {
    Companion_getInstance_3();
    this._variance = variance;
    this._type = type;
    var tmp0_require_0 = this._variance == null === (this._type == null);
    if (!tmp0_require_0) {
      var message_2 = this._variance == null ? 'Star projection must have no type specified.' : '' + 'The projection variance ' + this._variance + ' requires type to be specified.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_2));
    }}
  KTypeProjection.prototype._get_variance__1 = function () {
    return this._variance;
  };
  KTypeProjection.prototype._get_type_ = function () {
    return this._type;
  };
  KTypeProjection.prototype.toString = function () {
    var tmp0_subject = this._variance;
    var tmp;
    if (tmp0_subject == null) {
      tmp = '*';
    } else if (equals(tmp0_subject, KVariance_INVARIANT_getInstance())) {
      tmp = toString_0(this._type);
    } else if (equals(tmp0_subject, KVariance_IN_getInstance())) {
      tmp = '' + 'in ' + this._type;
    } else if (equals(tmp0_subject, KVariance_OUT_getInstance())) {
      tmp = '' + 'out ' + this._type;
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  KTypeProjection.prototype.component1_1 = function () {
    return this._variance;
  };
  KTypeProjection.prototype.component2_1 = function () {
    return this._type;
  };
  KTypeProjection.prototype.copy = function (variance, type) {
    return new KTypeProjection(variance, type);
  };
  KTypeProjection.prototype.copy$default = function (variance, type, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      variance = this._variance;
    if (!(($mask0 & 2) === 0))
      type = this._type;
    return this.copy(variance, type);
  };
  KTypeProjection.prototype.hashCode = function () {
    var result = this._variance == null ? 0 : this._variance.hashCode();
    result = imul(result, 31) + (this._type == null ? 0 : hashCode(this._type)) | 0;
    return result;
  };
  KTypeProjection.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KTypeProjection))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof KTypeProjection ? other : THROW_CCE();
    if (!equals(this._variance, tmp0_other_with_cast._variance))
      return false;
    if (!equals(this._type, tmp0_other_with_cast._type))
      return false;
    return true;
  };
  KTypeProjection.$metadata$ = {
    simpleName: 'KTypeProjection',
    kind: 'class',
    interfaces: []
  };
  var KVariance_INVARIANT_instance;
  var KVariance_IN_instance;
  var KVariance_OUT_instance;
  function values_4() {
    return [KVariance_INVARIANT_getInstance(), KVariance_IN_getInstance(), KVariance_OUT_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'INVARIANT':
        return KVariance_INVARIANT_getInstance();
      case 'IN':
        return KVariance_IN_getInstance();
      case 'OUT':
        return KVariance_OUT_getInstance();
      default:KVariance_initEntries();
        THROW_ISE();
        break;
    }
  }
  var KVariance_entriesInitialized;
  function KVariance_initEntries() {
    if (KVariance_entriesInitialized)
      return Unit_getInstance();
    KVariance_entriesInitialized = true;
    KVariance_INVARIANT_instance = new KVariance('INVARIANT', 0);
    KVariance_IN_instance = new KVariance('IN', 1);
    KVariance_OUT_instance = new KVariance('OUT', 2);
  }
  function KVariance(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  KVariance.$metadata$ = {
    simpleName: 'KVariance',
    kind: 'class',
    interfaces: []
  };
  function KVariance_INVARIANT_getInstance() {
    KVariance_initEntries();
    return KVariance_INVARIANT_instance;
  }
  function KVariance_IN_getInstance() {
    KVariance_initEntries();
    return KVariance_IN_instance;
  }
  function KVariance_OUT_getInstance() {
    KVariance_initEntries();
    return KVariance_OUT_instance;
  }
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_3(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_3(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char_0) {
          _this_.append_2(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_3(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function isEmpty_0(_this_) {
    return charSequenceLength(_this_) === 0;
  }
  function _get_lastIndex__5(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function _get_UNDEFINED_RESULT_() {
    return UNDEFINED_RESULT;
  }
  var UNDEFINED_RESULT;
  function UNDEFINED_RESULT$init$() {
    var tmp0_success_0 = Companion_getInstance_4();
    var tmp1_success_0 = _get_COROUTINE_SUSPENDED_();
    return _Result___init__impl_(tmp1_success_0);
  }
  function check(value) {
    if (!value) {
      var message_2 = 'Check failed.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_2));
    }}
  function check_0(value, lazyMessage) {
    if (!value) {
      var message = lazyMessage();
      throw IllegalStateException_init_$Create$_0(toString_1(message));
    }}
  function require_0(value, lazyMessage) {
    if (!value) {
      var message = lazyMessage();
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }}
  function checkNotNull(value) {
    var tmp$ret$0;
    l$ret$1: do {
      if (value == null) {
        var message_2 = 'Required value was null.';
        throw IllegalStateException_init_$Create$_0(toString_1(message_2));
      } else {
        tmp$ret$0 = value;
        break l$ret$1;
      }
    }
     while (false);
    return tmp$ret$0;
  }
  function checkNotNull_0(value, lazyMessage) {
    if (value == null) {
      var message = lazyMessage();
      throw IllegalStateException_init_$Create$_0(toString_1(message));
    } else {
      return value;
    }
  }
  function error(message) {
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  }
  function _Result___init__impl_(value) {
    return value;
  }
  function _Result___get_value__impl_(this_0) {
    return this_0;
  }
  function _Result___get_isSuccess__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return !(tmp instanceof Failure);
  }
  function _Result___get_isFailure__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return tmp instanceof Failure;
  }
  function Result__getOrNull_impl(this_0) {
    var tmp;
    if (_Result___get_isFailure__impl_(this_0)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl_(this_0);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function Result__exceptionOrNull_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl_(this_0)._exception;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Result__toString_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = toString_1(_Result___get_value__impl_(this_0));
    } else {
      {
        tmp = '' + 'Success(' + _Result___get_value__impl_(this_0) + ')';
      }
    }
    return tmp;
  }
  function Companion_5() {
    Companion_instance_4 = this;
  }
  Companion_5.prototype.success = function (value) {
    return _Result___init__impl_(value);
  };
  Companion_5.prototype.failure = function (exception) {
    return _Result___init__impl_(createFailure(exception));
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
  function Failure(exception) {
    this._exception = exception;
  }
  Failure.prototype._get_exception__0 = function () {
    return this._exception;
  };
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals(this._exception, other._exception);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this._exception);
  };
  Failure.prototype.toString = function () {
    return '' + 'Failure(' + this._exception + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function Result__hashCode_impl(this_0) {
    return this_0 == null ? 0 : hashCode(this_0);
  }
  function Result__equals_impl(this_0, other) {
    if (!(other instanceof Result))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof Result ? other._value : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Result(value) {
    Companion_getInstance_4();
    this._value = value;
  }
  Result.prototype.toString = function () {
    return Result__toString_impl(this._value);
  };
  Result.prototype.hashCode = function () {
    return Result__hashCode_impl(this._value);
  };
  Result.prototype.equals = function (other) {
    return Result__equals_impl(this._value, other);
  };
  Result.$metadata$ = {
    simpleName: 'Result',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function getOrThrow(_this_) {
    throwOnFailure(_this_);
    var tmp = _Result___get_value__impl_(_this_);
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  }
  function throwOnFailure(_this_) {
    var tmp = _Result___get_value__impl_(_this_);
    if (tmp instanceof Failure)
      throw _Result___get_value__impl_(_this_)._exception;
    else {
    }
  }
  function run(block) {
    return block();
  }
  function TODO() {
    throw NotImplementedError_init_$Create$(null, 1, null);
  }
  function NotImplementedError_init_$Init$(message, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = 'An operation is not implemented.';
    NotImplementedError.call($this, message);
    return $this;
  }
  function NotImplementedError_init_$Create$(message, $mask0, $marker) {
    var tmp = NotImplementedError_init_$Init$(message, $mask0, $marker, Object.create(NotImplementedError.prototype));
    captureStack(tmp, NotImplementedError_init_$Create$);
    return tmp;
  }
  function NotImplementedError(message) {
    Error_init_$Init$_0(message, this);
    captureStack(this, NotImplementedError);
  }
  NotImplementedError.$metadata$ = {
    simpleName: 'NotImplementedError',
    kind: 'class',
    interfaces: []
  };
  function let_0(_this_, block) {
    return block(_this_);
  }
  function repeat(times, action) {
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        action(index);
      }
       while (inductionVariable < times);
  }
  function apply(_this_, block) {
    block(_this_);
    return _this_;
  }
  function takeIf(_this_, predicate) {
    return predicate(_this_) ? _this_ : null;
  }
  function with_0(receiver, block) {
    return block(receiver);
  }
  function also(_this_, block) {
    block(_this_);
    return _this_;
  }
  function run_0(_this_, block) {
    return block(_this_);
  }
  function Pair(first_2, second) {
    this._first = first_2;
    this._second = second;
  }
  Pair.prototype._get_first__9 = function () {
    return this._first;
  };
  Pair.prototype._get_second_ = function () {
    return this._second;
  };
  Pair.prototype.toString = function () {
    return '' + '(' + this._first + ', ' + this._second + ')';
  };
  Pair.prototype.component1_1 = function () {
    return this._first;
  };
  Pair.prototype.component2_1 = function () {
    return this._second;
  };
  Pair.prototype.copy_0 = function (first_2, second) {
    return new Pair(first_2, second);
  };
  Pair.prototype.copy$default_0 = function (first_2, second, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      first_2 = this._first;
    if (!(($mask0 & 2) === 0))
      second = this._second;
    return this.copy_0(first_2, second);
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
  function _UByte___init__impl_(data) {
    return data;
  }
  function _UByte___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_6() {
    Companion_instance_5 = this;
    this._MIN_VALUE = _UByte___init__impl_(0);
    this._MAX_VALUE = _UByte___init__impl_(-1);
    this._SIZE_BYTES = 1;
    this._SIZE_BITS = 8;
  }
  Companion_6.prototype._get_MIN_VALUE_ = function () {
    return this._MIN_VALUE;
  };
  Companion_6.prototype._get_MAX_VALUE_ = function () {
    return this._MAX_VALUE;
  };
  Companion_6.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES;
  };
  Companion_6.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS;
  };
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_6();
    return Companion_instance_5;
  }
  function UByte__compareTo_impl(this_0, other) {
    var tmp = _UByte___get_data__impl_(this_0) & 255;
    return compareTo_0(tmp, _UByte___get_data__impl_(other) & 255);
  }
  function UByte__compareTo_impl_0(this_0, other) {
    var tmp = this_0._data;
    return UByte__compareTo_impl(tmp, other instanceof UByte ? other._data : THROW_CCE());
  }
  function UByte__compareTo_impl_1(this_0, other) {
    var tmp = _UByte___get_data__impl_(this_0) & 255;
    return compareTo_0(tmp, _UShort___get_data__impl_(other) & 65535);
  }
  function UByte__compareTo_impl_2(this_0, other) {
    var tmp0_compareTo_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(other));
  }
  function UByte__compareTo_impl_3(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(other));
  }
  function UByte__plus_impl(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
  }
  function UByte__plus_impl_0(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
  }
  function UByte__plus_impl_1(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(other) | 0);
  }
  function UByte__plus_impl_2(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(other)));
  }
  function UByte__minus_impl(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(tmp1_minus_0) | 0);
  }
  function UByte__minus_impl_0(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(tmp1_minus_0) | 0);
  }
  function UByte__minus_impl_1(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(other) | 0);
  }
  function UByte__minus_impl_2(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_minus_0).minus_34(_ULong___get_data__impl_(other)));
  }
  function UByte__times_impl(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(tmp1_times_0)));
  }
  function UByte__times_impl_0(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(tmp1_times_0)));
  }
  function UByte__times_impl_1(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(other)));
  }
  function UByte__times_impl_2(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_times_0).times_32(_ULong___get_data__impl_(other)));
  }
  function UByte__div_impl(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintDivide(tmp0_div_0, tmp1_div_0);
  }
  function UByte__div_impl_0(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintDivide(tmp0_div_0, tmp1_div_0);
  }
  function UByte__div_impl_1(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return uintDivide(tmp0_div_0, other);
  }
  function UByte__div_impl_2(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return ulongDivide(tmp0_div_0, other);
  }
  function UByte__rem_impl(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintRemainder(tmp0_rem_0, tmp1_rem_0);
  }
  function UByte__rem_impl_0(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintRemainder(tmp0_rem_0, tmp1_rem_0);
  }
  function UByte__rem_impl_1(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return uintRemainder(tmp0_rem_0, other);
  }
  function UByte__rem_impl_2(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return ulongRemainder(tmp0_rem_0, other);
  }
  function UByte__floorDiv_impl(this_0, other) {
    var tmp0_floorDiv_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_floorDiv_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintDivide(tmp0_floorDiv_0, tmp1_floorDiv_0);
  }
  function UByte__floorDiv_impl_0(this_0, other) {
    var tmp0_floorDiv_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_floorDiv_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintDivide(tmp0_floorDiv_0, tmp1_floorDiv_0);
  }
  function UByte__floorDiv_impl_1(this_0, other) {
    var tmp0_floorDiv_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return uintDivide(tmp0_floorDiv_0, other);
  }
  function UByte__floorDiv_impl_2(this_0, other) {
    var tmp0_floorDiv_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return ulongDivide(tmp0_floorDiv_0, other);
  }
  function UByte__mod_impl(this_0, other) {
    var tmp0_mod_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_mod_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    var tmp3_toUByte_0 = uintRemainder(tmp0_mod_0, tmp1_mod_0);
    var tmp2_toUByte_0 = _UInt___get_data__impl_(tmp3_toUByte_0);
    return _UByte___init__impl_(toByte(tmp2_toUByte_0));
  }
  function UByte__mod_impl_0(this_0, other) {
    var tmp0_mod_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    var tmp1_mod_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    var tmp3_toUShort_0 = uintRemainder(tmp0_mod_0, tmp1_mod_0);
    var tmp2_toUShort_0 = _UInt___get_data__impl_(tmp3_toUShort_0);
    return _UShort___init__impl_(toShort(tmp2_toUShort_0));
  }
  function UByte__mod_impl_1(this_0, other) {
    var tmp0_mod_0 = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return uintRemainder(tmp0_mod_0, other);
  }
  function UByte__mod_impl_2(this_0, other) {
    var tmp0_mod_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
    return ulongRemainder(tmp0_mod_0, other);
  }
  function UByte__inc_impl(this_0) {
    return _UByte___init__impl_(numberToByte(_UByte___get_data__impl_(this_0) + 1));
  }
  function UByte__dec_impl(this_0) {
    return _UByte___init__impl_(numberToByte(_UByte___get_data__impl_(this_0) - 1));
  }
  function UByte__rangeTo_impl(this_0, other) {
    var tmp = _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
    return new UIntRange(tmp, _UInt___init__impl_(_UByte___get_data__impl_(other) & 255));
  }
  function UByte__and_impl(this_0, other) {
    var tmp0_and_0 = _UByte___get_data__impl_(this_0);
    var tmp1_and_0 = _UByte___get_data__impl_(other);
    return _UByte___init__impl_(toByte(tmp0_and_0 & tmp1_and_0));
  }
  function UByte__or_impl(this_0, other) {
    var tmp0_or_0 = _UByte___get_data__impl_(this_0);
    var tmp1_or_0 = _UByte___get_data__impl_(other);
    return _UByte___init__impl_(toByte(tmp0_or_0 | tmp1_or_0));
  }
  function UByte__xor_impl(this_0, other) {
    var tmp0_xor_0 = _UByte___get_data__impl_(this_0);
    var tmp1_xor_0 = _UByte___get_data__impl_(other);
    return _UByte___init__impl_(toByte(tmp0_xor_0 ^ tmp1_xor_0));
  }
  function UByte__inv_impl(this_0) {
    var tmp0_inv_0 = _UByte___get_data__impl_(this_0);
    return _UByte___init__impl_(toByte(~tmp0_inv_0));
  }
  function UByte__toByte_impl(this_0) {
    return _UByte___get_data__impl_(this_0);
  }
  function UByte__toShort_impl(this_0) {
    var tmp0_and_0 = _UByte___get_data__impl_(this_0);
    var tmp1_and_0 = 255;
    return toShort(tmp0_and_0 & tmp1_and_0);
  }
  function UByte__toInt_impl(this_0) {
    return _UByte___get_data__impl_(this_0) & 255;
  }
  function UByte__toLong_impl(this_0) {
    return toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0));
  }
  function UByte__toUByte_impl(this_0) {
    return this_0;
  }
  function UByte__toUShort_impl(this_0) {
    var tmp0_and_0 = _UByte___get_data__impl_(this_0);
    var tmp1_and_0 = 255;
    return _UShort___init__impl_(toShort(tmp0_and_0 & tmp1_and_0));
  }
  function UByte__toUInt_impl(this_0) {
    return _UInt___init__impl_(_UByte___get_data__impl_(this_0) & 255);
  }
  function UByte__toULong_impl(this_0) {
    return _ULong___init__impl_(toLong(_UByte___get_data__impl_(this_0)).and(new Long(255, 0)));
  }
  function UByte__toFloat_impl(this_0) {
    return _UByte___get_data__impl_(this_0) & 255;
  }
  function UByte__toDouble_impl(this_0) {
    return _UByte___get_data__impl_(this_0) & 255;
  }
  function UByte__toString_impl(this_0) {
    return (_UByte___get_data__impl_(this_0) & 255).toString();
  }
  function UByte__hashCode_impl(this_0) {
    return this_0;
  }
  function UByte__equals_impl(this_0, other) {
    if (!(other instanceof UByte))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UByte ? other._data : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function UByte(data) {
    Companion_getInstance_5();
    this._data = data;
  }
  UByte.prototype.compareTo_5 = function (other) {
    return UByte__compareTo_impl(this._data, other);
  };
  UByte.prototype.compareTo_25 = function (other) {
    return UByte__compareTo_impl_0(this, other);
  };
  UByte.prototype.toString = function () {
    return UByte__toString_impl(this._data);
  };
  UByte.prototype.hashCode = function () {
    return UByte__hashCode_impl(this._data);
  };
  UByte.prototype.equals = function (other) {
    return UByte__equals_impl(this._data, other);
  };
  UByte.$metadata$ = {
    simpleName: 'UByte',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toUByte(_this_) {
    return _UByte___init__impl_(toByte(_this_));
  }
  function toUByte_0(_this_) {
    return _UByte___init__impl_(toByte(_this_));
  }
  function toUByte_1(_this_) {
    return _UByte___init__impl_(_this_.toByte_6());
  }
  function toUByte_2(_this_) {
    return _UByte___init__impl_(_this_);
  }
  function _get_array_($this) {
    return $this._array;
  }
  function _set_index_($this, _set___) {
    $this._index_0 = _set___;
  }
  function _get_index_($this) {
    return $this._index_0;
  }
  function _UByteArray___init__impl_(storage) {
    return storage;
  }
  function _UByteArray___get_storage__impl_(this_0) {
    return this_0;
  }
  function _UByteArray___init__impl__0(size_0) {
    var tmp = _UByteArray___init__impl_(new Int8Array(size_0));
    return tmp;
  }
  function UByteArray__get_impl(this_0, index) {
    var tmp0_toUByte_0 = _UByteArray___get_storage__impl_(this_0)[index];
    return _UByte___init__impl_(tmp0_toUByte_0);
  }
  function UByteArray__set_impl(this_0, index, value) {
    var tmp = _UByteArray___get_storage__impl_(this_0);
    tmp[index] = _UByte___get_data__impl_(value);
  }
  function _UByteArray___get_size__impl_(this_0) {
    return _UByteArray___get_storage__impl_(this_0).length;
  }
  function UByteArray__iterator_impl(this_0) {
    return new Iterator(_UByteArray___get_storage__impl_(this_0));
  }
  function Iterator(array) {
    UByteIterator.call(this);
    this._array = array;
    this._index_0 = 0;
  }
  Iterator.prototype.hasNext_43 = function () {
    return this._index_0 < this._array.length;
  };
  Iterator.prototype.nextUByte_0 = function () {
    var tmp;
    if (this._index_0 < this._array.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_0;
      tmp0_this._index_0 = tmp1 + 1 | 0;
      var tmp0_toUByte_0 = this._array[tmp1];
      tmp = _UByte___init__impl_(tmp0_toUByte_0);
    } else {
      throw NoSuchElementException_init_$Create$_0(this._index_0.toString());
    }
    return tmp;
  };
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'class',
    interfaces: []
  };
  function UByteArray__contains_impl(this_0, element) {
    var tmp = isObject(new UByte(element)) ? new UByte(element) : THROW_CCE();
    if (!(tmp instanceof UByte))
      return false;
    else {
    }
    var tmp_0 = _UByteArray___get_storage__impl_(this_0);
    return contains_0(tmp_0, _UByte___get_data__impl_(element));
  }
  function UByteArray__contains_impl_0(this_0, element) {
    if (!(element instanceof UByte))
      return false;
    else {
    }
    var tmp = this_0._storage;
    return UByteArray__contains_impl(tmp, element instanceof UByte ? element._data : THROW_CCE());
  }
  function UByteArray__containsAll_impl(this_0, elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = isInterface(elements, Collection) ? elements : THROW_CCE();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        var tmp_0;
        if (element_2 instanceof UByte) {
          var tmp_1 = _UByteArray___get_storage__impl_(this_0);
          var tmp0_toByte_0_4 = element_2._data;
          tmp_0 = contains_0(tmp_1, _UByte___get_data__impl_(tmp0_toByte_0_4));
        } else {
          {
            tmp_0 = false;
          }
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function UByteArray__containsAll_impl_0(this_0, elements) {
    return UByteArray__containsAll_impl(this_0._storage, elements);
  }
  function UByteArray__isEmpty_impl(this_0) {
    return _UByteArray___get_storage__impl_(this_0).length === 0;
  }
  function UByteArray__toString_impl(this_0) {
    return '' + 'UByteArray(storage=' + toString_1(this_0) + ')';
  }
  function UByteArray__hashCode_impl(this_0) {
    return hashCode(this_0);
  }
  function UByteArray__equals_impl(this_0, other) {
    if (!(other instanceof UByteArray))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UByteArray ? other._storage : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function UByteArray(storage) {
    this._storage = storage;
  }
  UByteArray.prototype._get_size__36 = function () {
    return _UByteArray___get_size__impl_(this._storage);
  };
  UByteArray.prototype.iterator_51 = function () {
    return UByteArray__iterator_impl(this._storage);
  };
  UByteArray.prototype.contains_16 = function (element) {
    return UByteArray__contains_impl(this._storage, element);
  };
  UByteArray.prototype.contains_54 = function (element) {
    return UByteArray__contains_impl_0(this, element);
  };
  UByteArray.prototype.containsAll_11 = function (elements) {
    return UByteArray__containsAll_impl(this._storage, elements);
  };
  UByteArray.prototype.containsAll_34 = function (elements) {
    return UByteArray__containsAll_impl_0(this, elements);
  };
  UByteArray.prototype.isEmpty_47 = function () {
    return UByteArray__isEmpty_impl(this._storage);
  };
  UByteArray.prototype.toString = function () {
    return UByteArray__toString_impl(this._storage);
  };
  UByteArray.prototype.hashCode = function () {
    return UByteArray__hashCode_impl(this._storage);
  };
  UByteArray.prototype.equals = function (other) {
    return UByteArray__equals_impl(this._storage, other);
  };
  UByteArray.$metadata$ = {
    simpleName: 'UByteArray',
    kind: 'class',
    interfaces: [Collection]
  };
  function _UInt___init__impl_(data) {
    return data;
  }
  function _UInt___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_7() {
    Companion_instance_6 = this;
    this._MIN_VALUE_0 = _UInt___init__impl_(0);
    this._MAX_VALUE_0 = _UInt___init__impl_(-1);
    this._SIZE_BYTES_0 = 4;
    this._SIZE_BITS_0 = 32;
  }
  Companion_7.prototype._get_MIN_VALUE__0 = function () {
    return this._MIN_VALUE_0;
  };
  Companion_7.prototype._get_MAX_VALUE__0 = function () {
    return this._MAX_VALUE_0;
  };
  Companion_7.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_0;
  };
  Companion_7.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_0;
  };
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_7();
    return Companion_instance_6;
  }
  function UInt__compareTo_impl(this_0, other) {
    var tmp0_compareTo_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintCompare(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(tmp0_compareTo_0));
  }
  function UInt__compareTo_impl_0(this_0, other) {
    var tmp0_compareTo_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintCompare(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(tmp0_compareTo_0));
  }
  function UInt__compareTo_impl_1(this_0, other) {
    return uintCompare(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(other));
  }
  function UInt__compareTo_impl_2(this_0, other) {
    var tmp = this_0._data_0;
    return UInt__compareTo_impl_1(tmp, other instanceof UInt ? other._data_0 : THROW_CCE());
  }
  function UInt__compareTo_impl_3(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(other));
  }
  function UInt__plus_impl(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) + _UInt___get_data__impl_(tmp0_plus_0) | 0);
  }
  function UInt__plus_impl_0(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) + _UInt___get_data__impl_(tmp0_plus_0) | 0);
  }
  function UInt__plus_impl_1(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) + _UInt___get_data__impl_(other) | 0);
  }
  function UInt__plus_impl_2(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(other)));
  }
  function UInt__minus_impl(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) - _UInt___get_data__impl_(tmp0_minus_0) | 0);
  }
  function UInt__minus_impl_0(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) - _UInt___get_data__impl_(tmp0_minus_0) | 0);
  }
  function UInt__minus_impl_1(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) - _UInt___get_data__impl_(other) | 0);
  }
  function UInt__minus_impl_2(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_minus_0).minus_34(_ULong___get_data__impl_(other)));
  }
  function UInt__times_impl(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(tmp0_times_0)));
  }
  function UInt__times_impl_0(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(tmp0_times_0)));
  }
  function UInt__times_impl_1(this_0, other) {
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(this_0), _UInt___get_data__impl_(other)));
  }
  function UInt__times_impl_2(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_times_0).times_32(_ULong___get_data__impl_(other)));
  }
  function UInt__div_impl(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintDivide(this_0, tmp0_div_0);
  }
  function UInt__div_impl_0(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintDivide(this_0, tmp0_div_0);
  }
  function UInt__div_impl_1(this_0, other) {
    return uintDivide(this_0, other);
  }
  function UInt__div_impl_2(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return ulongDivide(tmp0_div_0, other);
  }
  function UInt__rem_impl(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintRemainder(this_0, tmp0_rem_0);
  }
  function UInt__rem_impl_0(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintRemainder(this_0, tmp0_rem_0);
  }
  function UInt__rem_impl_1(this_0, other) {
    return uintRemainder(this_0, other);
  }
  function UInt__rem_impl_2(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return ulongRemainder(tmp0_rem_0, other);
  }
  function UInt__floorDiv_impl(this_0, other) {
    var tmp0_floorDiv_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintDivide(this_0, tmp0_floorDiv_0);
  }
  function UInt__floorDiv_impl_0(this_0, other) {
    var tmp0_floorDiv_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintDivide(this_0, tmp0_floorDiv_0);
  }
  function UInt__floorDiv_impl_1(this_0, other) {
    return uintDivide(this_0, other);
  }
  function UInt__floorDiv_impl_2(this_0, other) {
    var tmp0_floorDiv_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return ulongDivide(tmp0_floorDiv_0, other);
  }
  function UInt__mod_impl(this_0, other) {
    var tmp0_mod_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    var tmp2_toUByte_0 = uintRemainder(this_0, tmp0_mod_0);
    var tmp1_toUByte_0 = _UInt___get_data__impl_(tmp2_toUByte_0);
    return _UByte___init__impl_(toByte(tmp1_toUByte_0));
  }
  function UInt__mod_impl_0(this_0, other) {
    var tmp0_mod_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    var tmp2_toUShort_0 = uintRemainder(this_0, tmp0_mod_0);
    var tmp1_toUShort_0 = _UInt___get_data__impl_(tmp2_toUShort_0);
    return _UShort___init__impl_(toShort(tmp1_toUShort_0));
  }
  function UInt__mod_impl_1(this_0, other) {
    return uintRemainder(this_0, other);
  }
  function UInt__mod_impl_2(this_0, other) {
    var tmp0_mod_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
    return ulongRemainder(tmp0_mod_0, other);
  }
  function UInt__inc_impl(this_0) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) + 1 | 0);
  }
  function UInt__dec_impl(this_0) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) - 1 | 0);
  }
  function UInt__rangeTo_impl(this_0, other) {
    return new UIntRange(this_0, other);
  }
  function UInt__shl_impl(this_0, bitCount) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) << bitCount);
  }
  function UInt__shr_impl(this_0, bitCount) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) >>> bitCount);
  }
  function UInt__and_impl(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) & _UInt___get_data__impl_(other));
  }
  function UInt__or_impl(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) | _UInt___get_data__impl_(other));
  }
  function UInt__xor_impl(this_0, other) {
    return _UInt___init__impl_(_UInt___get_data__impl_(this_0) ^ _UInt___get_data__impl_(other));
  }
  function UInt__inv_impl(this_0) {
    return _UInt___init__impl_(~_UInt___get_data__impl_(this_0));
  }
  function UInt__toByte_impl(this_0) {
    return toByte(_UInt___get_data__impl_(this_0));
  }
  function UInt__toShort_impl(this_0) {
    return toShort(_UInt___get_data__impl_(this_0));
  }
  function UInt__toInt_impl(this_0) {
    return _UInt___get_data__impl_(this_0);
  }
  function UInt__toLong_impl(this_0) {
    return toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0));
  }
  function UInt__toUByte_impl(this_0) {
    var tmp0_toUByte_0 = _UInt___get_data__impl_(this_0);
    return _UByte___init__impl_(toByte(tmp0_toUByte_0));
  }
  function UInt__toUShort_impl(this_0) {
    var tmp0_toUShort_0 = _UInt___get_data__impl_(this_0);
    return _UShort___init__impl_(toShort(tmp0_toUShort_0));
  }
  function UInt__toUInt_impl(this_0) {
    return this_0;
  }
  function UInt__toULong_impl(this_0) {
    return _ULong___init__impl_(toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)));
  }
  function UInt__toFloat_impl(this_0) {
    return uintToDouble(_UInt___get_data__impl_(this_0));
  }
  function UInt__toDouble_impl(this_0) {
    return uintToDouble(_UInt___get_data__impl_(this_0));
  }
  function UInt__toString_impl(this_0) {
    return toLong(_UInt___get_data__impl_(this_0)).and(new Long(-1, 0)).toString();
  }
  function UInt__hashCode_impl(this_0) {
    return this_0;
  }
  function UInt__equals_impl(this_0, other) {
    if (!(other instanceof UInt))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UInt ? other._data_0 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function UInt(data) {
    Companion_getInstance_6();
    this._data_0 = data;
  }
  UInt.prototype.compareTo_7 = function (other) {
    return UInt__compareTo_impl_1(this._data_0, other);
  };
  UInt.prototype.compareTo_25 = function (other) {
    return UInt__compareTo_impl_2(this, other);
  };
  UInt.prototype.toString = function () {
    return UInt__toString_impl(this._data_0);
  };
  UInt.prototype.hashCode = function () {
    return UInt__hashCode_impl(this._data_0);
  };
  UInt.prototype.equals = function (other) {
    return UInt__equals_impl(this._data_0, other);
  };
  UInt.$metadata$ = {
    simpleName: 'UInt',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toUInt(_this_) {
    return _UInt___init__impl_(_this_.toInt_6());
  }
  function toUInt_0(_this_) {
    return _UInt___init__impl_(_this_);
  }
  function toUInt_1(_this_) {
    return _UInt___init__impl_(_this_);
  }
  function toUInt_2(_this_) {
    return doubleToUInt(_this_);
  }
  function toUInt_3(_this_) {
    return doubleToUInt(_this_);
  }
  function toUInt_4(_this_) {
    return _UInt___init__impl_(_this_);
  }
  function _get_array__0($this) {
    return $this._array_0;
  }
  function _set_index__0($this, _set___) {
    $this._index_1 = _set___;
  }
  function _get_index__0($this) {
    return $this._index_1;
  }
  function _UIntArray___init__impl_(storage) {
    return storage;
  }
  function _UIntArray___get_storage__impl_(this_0) {
    return this_0;
  }
  function _UIntArray___init__impl__0(size_0) {
    var tmp = _UIntArray___init__impl_(new Int32Array(size_0));
    return tmp;
  }
  function UIntArray__get_impl(this_0, index) {
    var tmp0_toUInt_0 = _UIntArray___get_storage__impl_(this_0)[index];
    return _UInt___init__impl_(tmp0_toUInt_0);
  }
  function UIntArray__set_impl(this_0, index, value) {
    var tmp = _UIntArray___get_storage__impl_(this_0);
    tmp[index] = _UInt___get_data__impl_(value);
  }
  function _UIntArray___get_size__impl_(this_0) {
    return _UIntArray___get_storage__impl_(this_0).length;
  }
  function UIntArray__iterator_impl(this_0) {
    return new Iterator_0(_UIntArray___get_storage__impl_(this_0));
  }
  function Iterator_0(array) {
    UIntIterator.call(this);
    this._array_0 = array;
    this._index_1 = 0;
  }
  Iterator_0.prototype.hasNext_43 = function () {
    return this._index_1 < this._array_0.length;
  };
  Iterator_0.prototype.nextUInt_1 = function () {
    var tmp;
    if (this._index_1 < this._array_0.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_1;
      tmp0_this._index_1 = tmp1 + 1 | 0;
      var tmp0_toUInt_0 = this._array_0[tmp1];
      tmp = _UInt___init__impl_(tmp0_toUInt_0);
    } else {
      throw NoSuchElementException_init_$Create$_0(this._index_1.toString());
    }
    return tmp;
  };
  Iterator_0.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'class',
    interfaces: []
  };
  function UIntArray__contains_impl(this_0, element) {
    var tmp = isObject(new UInt(element)) ? new UInt(element) : THROW_CCE();
    if (!(tmp instanceof UInt))
      return false;
    else {
    }
    var tmp_0 = _UIntArray___get_storage__impl_(this_0);
    return contains_2(tmp_0, _UInt___get_data__impl_(element));
  }
  function UIntArray__contains_impl_0(this_0, element) {
    if (!(element instanceof UInt))
      return false;
    else {
    }
    var tmp = this_0._storage_0;
    return UIntArray__contains_impl(tmp, element instanceof UInt ? element._data_0 : THROW_CCE());
  }
  function UIntArray__containsAll_impl(this_0, elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = isInterface(elements, Collection) ? elements : THROW_CCE();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        var tmp_0;
        if (element_2 instanceof UInt) {
          var tmp_1 = _UIntArray___get_storage__impl_(this_0);
          var tmp0_toInt_0_4 = element_2._data_0;
          tmp_0 = contains_2(tmp_1, _UInt___get_data__impl_(tmp0_toInt_0_4));
        } else {
          {
            tmp_0 = false;
          }
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function UIntArray__containsAll_impl_0(this_0, elements) {
    return UIntArray__containsAll_impl(this_0._storage_0, elements);
  }
  function UIntArray__isEmpty_impl(this_0) {
    return _UIntArray___get_storage__impl_(this_0).length === 0;
  }
  function UIntArray__toString_impl(this_0) {
    return '' + 'UIntArray(storage=' + toString_1(this_0) + ')';
  }
  function UIntArray__hashCode_impl(this_0) {
    return hashCode(this_0);
  }
  function UIntArray__equals_impl(this_0, other) {
    if (!(other instanceof UIntArray))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UIntArray ? other._storage_0 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function UIntArray(storage) {
    this._storage_0 = storage;
  }
  UIntArray.prototype._get_size__36 = function () {
    return _UIntArray___get_size__impl_(this._storage_0);
  };
  UIntArray.prototype.iterator_51 = function () {
    return UIntArray__iterator_impl(this._storage_0);
  };
  UIntArray.prototype.contains_20 = function (element) {
    return UIntArray__contains_impl(this._storage_0, element);
  };
  UIntArray.prototype.contains_54 = function (element) {
    return UIntArray__contains_impl_0(this, element);
  };
  UIntArray.prototype.containsAll_13 = function (elements) {
    return UIntArray__containsAll_impl(this._storage_0, elements);
  };
  UIntArray.prototype.containsAll_34 = function (elements) {
    return UIntArray__containsAll_impl_0(this, elements);
  };
  UIntArray.prototype.isEmpty_47 = function () {
    return UIntArray__isEmpty_impl(this._storage_0);
  };
  UIntArray.prototype.toString = function () {
    return UIntArray__toString_impl(this._storage_0);
  };
  UIntArray.prototype.hashCode = function () {
    return UIntArray__hashCode_impl(this._storage_0);
  };
  UIntArray.prototype.equals = function (other) {
    return UIntArray__equals_impl(this._storage_0, other);
  };
  UIntArray.$metadata$ = {
    simpleName: 'UIntArray',
    kind: 'class',
    interfaces: [Collection]
  };
  function Companion_8() {
    Companion_instance_7 = this;
    var tmp = this;
    Companion_getInstance_6();
    var tmp_0 = _UInt___init__impl_(-1);
    Companion_getInstance_6();
    tmp._EMPTY = new UIntRange(tmp_0, _UInt___init__impl_(0));
  }
  Companion_8.prototype._get_EMPTY__3 = function () {
    return this._EMPTY;
  };
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_8();
    return Companion_instance_7;
  }
  function UIntRange(start, endInclusive) {
    Companion_getInstance_7();
    UIntProgression.call(this, start, endInclusive, 1);
  }
  UIntRange.prototype._get_start__1 = function () {
    return this._get_first__1();
  };
  UIntRange.prototype._get_start__8 = function () {
    return new UInt(this._get_start__1());
  };
  UIntRange.prototype._get_endInclusive__1 = function () {
    return this._get_last__0();
  };
  UIntRange.prototype._get_endInclusive__8 = function () {
    return new UInt(this._get_endInclusive__1());
  };
  UIntRange.prototype.contains_20 = function (value) {
    var tmp;
    var tmp0_compareTo_0 = this._get_first__1();
    if (uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(value)) <= 0) {
      var tmp1_compareTo_0 = this._get_last__0();
      tmp = uintCompare(_UInt___get_data__impl_(value), _UInt___get_data__impl_(tmp1_compareTo_0)) <= 0;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  UIntRange.prototype.contains_34 = function (value) {
    return this.contains_20(value instanceof UInt ? value._data_0 : THROW_CCE());
  };
  UIntRange.prototype.isEmpty_47 = function () {
    var tmp0_compareTo_0 = this._get_first__1();
    var tmp1_compareTo_0 = this._get_last__0();
    return uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(tmp1_compareTo_0)) > 0;
  };
  UIntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof UIntRange) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : equals(new UInt(this._get_first__1()), new UInt(other._get_first__1())) ? equals(new UInt(this._get_last__0()), new UInt(other._get_last__0())) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  UIntRange.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_47()) {
      tmp = -1;
    } else {
      var tmp0_toInt_0 = this._get_first__1();
      var tmp_0 = imul(31, _UInt___get_data__impl_(tmp0_toInt_0));
      var tmp1_toInt_0 = this._get_last__0();
      tmp = tmp_0 + _UInt___get_data__impl_(tmp1_toInt_0) | 0;
    }
    return tmp;
  };
  UIntRange.prototype.toString = function () {
    return '' + new UInt(this._get_first__1()) + '..' + new UInt(this._get_last__0());
  };
  UIntRange.$metadata$ = {
    simpleName: 'UIntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_9() {
    Companion_instance_8 = this;
  }
  Companion_9.prototype.fromClosedRange = function (rangeStart, rangeEnd, step) {
    return new UIntProgression(rangeStart, rangeEnd, step);
  };
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_9();
    return Companion_instance_8;
  }
  function UIntProgression(start, endInclusive, step) {
    Companion_getInstance_8();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE_5)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_0 = start;
    this._last = getProgressionLastElement(start, endInclusive, step);
    this._step = step;
  }
  UIntProgression.prototype._get_first__1 = function () {
    return this._first_0;
  };
  UIntProgression.prototype._get_last__0 = function () {
    return this._last;
  };
  UIntProgression.prototype._get_step__11 = function () {
    return this._step;
  };
  UIntProgression.prototype.iterator_51 = function () {
    return new UIntProgressionIterator(this._first_0, this._last, this._step);
  };
  UIntProgression.prototype.isEmpty_47 = function () {
    var tmp;
    if (this._step > 0) {
      var tmp0_compareTo_0 = this._first_0;
      var tmp1_compareTo_0 = this._last;
      tmp = uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(tmp1_compareTo_0)) > 0;
    } else {
      var tmp2_compareTo_0 = this._first_0;
      var tmp3_compareTo_0 = this._last;
      tmp = uintCompare(_UInt___get_data__impl_(tmp2_compareTo_0), _UInt___get_data__impl_(tmp3_compareTo_0)) < 0;
    }
    return tmp;
  };
  UIntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof UIntProgression) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : (equals(new UInt(this._first_0), new UInt(other._first_0)) ? equals(new UInt(this._last), new UInt(other._last)) : false) ? this._step === other._step : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  UIntProgression.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_47()) {
      tmp = -1;
    } else {
      var tmp0_toInt_0 = this._first_0;
      var tmp_0 = imul(31, _UInt___get_data__impl_(tmp0_toInt_0));
      var tmp1_toInt_0 = this._last;
      tmp = imul(31, tmp_0 + _UInt___get_data__impl_(tmp1_toInt_0) | 0) + this._step | 0;
    }
    return tmp;
  };
  UIntProgression.prototype.toString = function () {
    return this._step > 0 ? '' + new UInt(this._first_0) + '..' + new UInt(this._last) + ' step ' + this._step : '' + new UInt(this._first_0) + ' downTo ' + new UInt(this._last) + ' step ' + (-this._step | 0);
  };
  UIntProgression.$metadata$ = {
    simpleName: 'UIntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function _get_finalElement_($this) {
    return $this._finalElement;
  }
  function _set_hasNext_($this, _set___) {
    $this._hasNext = _set___;
  }
  function _get_hasNext_($this) {
    return $this._hasNext;
  }
  function _get_step_($this) {
    return $this._step_0;
  }
  function _set_next_($this, _set___) {
    $this._next = _set___;
  }
  function _get_next_($this) {
    return $this._next;
  }
  function UIntProgressionIterator(first_2, last_2, step) {
    UIntIterator.call(this);
    this._finalElement = last_2;
    var tmp = this;
    var tmp_0;
    if (step > 0) {
      tmp_0 = uintCompare(_UInt___get_data__impl_(first_2), _UInt___get_data__impl_(last_2)) <= 0;
    } else {
      tmp_0 = uintCompare(_UInt___get_data__impl_(first_2), _UInt___get_data__impl_(last_2)) >= 0;
    }
    tmp._hasNext = tmp_0;
    var tmp_1 = this;
    tmp_1._step_0 = _UInt___init__impl_(step);
    this._next = this._hasNext ? first_2 : this._finalElement;
  }
  UIntProgressionIterator.prototype.hasNext_43 = function () {
    return this._hasNext;
  };
  UIntProgressionIterator.prototype.nextUInt_1 = function () {
    var value = this._next;
    if (equals(new UInt(value), new UInt(this._finalElement))) {
      if (!this._hasNext)
        throw NoSuchElementException_init_$Create$();
      this._hasNext = false;
    } else {
      var tmp0_this = this;
      var tmp = tmp0_this;
      var tmp0_plus_0 = tmp0_this._next;
      var tmp1_plus_0 = this._step_0;
      tmp._next = _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
    }
    return value;
  };
  UIntProgressionIterator.$metadata$ = {
    simpleName: 'UIntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function UIntIterator() {
  }
  UIntIterator.prototype.next_8 = function () {
    return this.nextUInt_1();
  };
  UIntIterator.prototype.next_48 = function () {
    return new UInt(this.next_8());
  };
  UIntIterator.$metadata$ = {
    simpleName: 'UIntIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function ULongIterator() {
  }
  ULongIterator.prototype.next_17 = function () {
    return this.nextULong_1();
  };
  ULongIterator.prototype.next_48 = function () {
    return new ULong(this.next_17());
  };
  ULongIterator.$metadata$ = {
    simpleName: 'ULongIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function UByteIterator() {
  }
  UByteIterator.prototype.next_12 = function () {
    return this.nextUByte_0();
  };
  UByteIterator.prototype.next_48 = function () {
    return new UByte(this.next_12());
  };
  UByteIterator.$metadata$ = {
    simpleName: 'UByteIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function UShortIterator() {
  }
  UShortIterator.prototype.next_18 = function () {
    return this.nextUShort_0();
  };
  UShortIterator.prototype.next_48 = function () {
    return new UShort(this.next_18());
  };
  UShortIterator.$metadata$ = {
    simpleName: 'UShortIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _ULong___init__impl_(data) {
    return data;
  }
  function _ULong___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_10() {
    Companion_instance_9 = this;
    this._MIN_VALUE_1 = _ULong___init__impl_(new Long(0, 0));
    this._MAX_VALUE_1 = _ULong___init__impl_(new Long(-1, -1));
    this._SIZE_BYTES_1 = 8;
    this._SIZE_BITS_1 = 64;
  }
  Companion_10.prototype._get_MIN_VALUE__1 = function () {
    return this._MIN_VALUE_1;
  };
  Companion_10.prototype._get_MAX_VALUE__1 = function () {
    return this._MAX_VALUE_1;
  };
  Companion_10.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_1;
  };
  Companion_10.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_1;
  };
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_10();
    return Companion_instance_9;
  }
  function ULong__compareTo_impl(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return ulongCompare(_ULong___get_data__impl_(this_0), _ULong___get_data__impl_(tmp0_compareTo_0));
  }
  function ULong__compareTo_impl_0(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return ulongCompare(_ULong___get_data__impl_(this_0), _ULong___get_data__impl_(tmp0_compareTo_0));
  }
  function ULong__compareTo_impl_1(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return ulongCompare(_ULong___get_data__impl_(this_0), _ULong___get_data__impl_(tmp0_compareTo_0));
  }
  function ULong__compareTo_impl_2(this_0, other) {
    return ulongCompare(_ULong___get_data__impl_(this_0), _ULong___get_data__impl_(other));
  }
  function ULong__compareTo_impl_3(this_0, other) {
    var tmp = this_0._data_1;
    return ULong__compareTo_impl_2(tmp, other instanceof ULong ? other._data_1 : THROW_CCE());
  }
  function ULong__plus_impl(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).plus_38(_ULong___get_data__impl_(tmp0_plus_0)));
  }
  function ULong__plus_impl_0(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).plus_38(_ULong___get_data__impl_(tmp0_plus_0)));
  }
  function ULong__plus_impl_1(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).plus_38(_ULong___get_data__impl_(tmp0_plus_0)));
  }
  function ULong__plus_impl_2(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).plus_38(_ULong___get_data__impl_(other)));
  }
  function ULong__minus_impl(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).minus_34(_ULong___get_data__impl_(tmp0_minus_0)));
  }
  function ULong__minus_impl_0(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).minus_34(_ULong___get_data__impl_(tmp0_minus_0)));
  }
  function ULong__minus_impl_1(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).minus_34(_ULong___get_data__impl_(tmp0_minus_0)));
  }
  function ULong__minus_impl_2(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).minus_34(_ULong___get_data__impl_(other)));
  }
  function ULong__times_impl(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).times_32(_ULong___get_data__impl_(tmp0_times_0)));
  }
  function ULong__times_impl_0(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).times_32(_ULong___get_data__impl_(tmp0_times_0)));
  }
  function ULong__times_impl_1(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).times_32(_ULong___get_data__impl_(tmp0_times_0)));
  }
  function ULong__times_impl_2(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).times_32(_ULong___get_data__impl_(other)));
  }
  function ULong__div_impl(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return ulongDivide(this_0, tmp0_div_0);
  }
  function ULong__div_impl_0(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return ulongDivide(this_0, tmp0_div_0);
  }
  function ULong__div_impl_1(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return ulongDivide(this_0, tmp0_div_0);
  }
  function ULong__div_impl_2(this_0, other) {
    return ulongDivide(this_0, other);
  }
  function ULong__rem_impl(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return ulongRemainder(this_0, tmp0_rem_0);
  }
  function ULong__rem_impl_0(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return ulongRemainder(this_0, tmp0_rem_0);
  }
  function ULong__rem_impl_1(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return ulongRemainder(this_0, tmp0_rem_0);
  }
  function ULong__rem_impl_2(this_0, other) {
    return ulongRemainder(this_0, other);
  }
  function ULong__floorDiv_impl(this_0, other) {
    var tmp0_floorDiv_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    return ulongDivide(this_0, tmp0_floorDiv_0);
  }
  function ULong__floorDiv_impl_0(this_0, other) {
    var tmp0_floorDiv_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    return ulongDivide(this_0, tmp0_floorDiv_0);
  }
  function ULong__floorDiv_impl_1(this_0, other) {
    var tmp0_floorDiv_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    return ulongDivide(this_0, tmp0_floorDiv_0);
  }
  function ULong__floorDiv_impl_2(this_0, other) {
    return ulongDivide(this_0, other);
  }
  function ULong__mod_impl(this_0, other) {
    var tmp0_mod_0 = _ULong___init__impl_(toLong(_UByte___get_data__impl_(other)).and(new Long(255, 0)));
    var tmp2_toUByte_0 = ulongRemainder(this_0, tmp0_mod_0);
    var tmp1_toUByte_0 = _ULong___get_data__impl_(tmp2_toUByte_0);
    return _UByte___init__impl_(tmp1_toUByte_0.toByte_6());
  }
  function ULong__mod_impl_0(this_0, other) {
    var tmp0_mod_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(other)).and(new Long(65535, 0)));
    var tmp2_toUShort_0 = ulongRemainder(this_0, tmp0_mod_0);
    var tmp1_toUShort_0 = _ULong___get_data__impl_(tmp2_toUShort_0);
    return _UShort___init__impl_(tmp1_toUShort_0.toShort_6());
  }
  function ULong__mod_impl_1(this_0, other) {
    var tmp0_mod_0 = _ULong___init__impl_(toLong(_UInt___get_data__impl_(other)).and(new Long(-1, 0)));
    var tmp2_toUInt_0 = ulongRemainder(this_0, tmp0_mod_0);
    var tmp1_toUInt_0 = _ULong___get_data__impl_(tmp2_toUInt_0);
    return _UInt___init__impl_(tmp1_toUInt_0.toInt_6());
  }
  function ULong__mod_impl_2(this_0, other) {
    return ulongRemainder(this_0, other);
  }
  function ULong__inc_impl(this_0) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).inc_5());
  }
  function ULong__dec_impl(this_0) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).dec_5());
  }
  function ULong__rangeTo_impl(this_0, other) {
    return new ULongRange(this_0, other);
  }
  function ULong__shl_impl(this_0, bitCount) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).shl_0(bitCount));
  }
  function ULong__shr_impl(this_0, bitCount) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).ushr_0(bitCount));
  }
  function ULong__and_impl(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).and(_ULong___get_data__impl_(other)));
  }
  function ULong__or_impl(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).or(_ULong___get_data__impl_(other)));
  }
  function ULong__xor_impl(this_0, other) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).xor(_ULong___get_data__impl_(other)));
  }
  function ULong__inv_impl(this_0) {
    return _ULong___init__impl_(_ULong___get_data__impl_(this_0).inv_0());
  }
  function ULong__toByte_impl(this_0) {
    return _ULong___get_data__impl_(this_0).toByte_6();
  }
  function ULong__toShort_impl(this_0) {
    return _ULong___get_data__impl_(this_0).toShort_6();
  }
  function ULong__toInt_impl(this_0) {
    return _ULong___get_data__impl_(this_0).toInt_6();
  }
  function ULong__toLong_impl(this_0) {
    return _ULong___get_data__impl_(this_0);
  }
  function ULong__toUByte_impl(this_0) {
    var tmp0_toUByte_0 = _ULong___get_data__impl_(this_0);
    return _UByte___init__impl_(tmp0_toUByte_0.toByte_6());
  }
  function ULong__toUShort_impl(this_0) {
    var tmp0_toUShort_0 = _ULong___get_data__impl_(this_0);
    return _UShort___init__impl_(tmp0_toUShort_0.toShort_6());
  }
  function ULong__toUInt_impl(this_0) {
    var tmp0_toUInt_0 = _ULong___get_data__impl_(this_0);
    return _UInt___init__impl_(tmp0_toUInt_0.toInt_6());
  }
  function ULong__toULong_impl(this_0) {
    return this_0;
  }
  function ULong__toFloat_impl(this_0) {
    return ulongToDouble(_ULong___get_data__impl_(this_0));
  }
  function ULong__toDouble_impl(this_0) {
    return ulongToDouble(_ULong___get_data__impl_(this_0));
  }
  function ULong__toString_impl(this_0) {
    return ulongToString(_ULong___get_data__impl_(this_0));
  }
  function ULong__hashCode_impl(this_0) {
    return this_0.hashCode();
  }
  function ULong__equals_impl(this_0, other) {
    if (!(other instanceof ULong))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ULong ? other._data_1 : THROW_CCE();
    if (!this_0.equals(tmp0_other_with_cast))
      return false;
    return true;
  }
  function ULong(data) {
    Companion_getInstance_9();
    this._data_1 = data;
  }
  ULong.prototype.compareTo_9 = function (other) {
    return ULong__compareTo_impl_2(this._data_1, other);
  };
  ULong.prototype.compareTo_25 = function (other) {
    return ULong__compareTo_impl_3(this, other);
  };
  ULong.prototype.toString = function () {
    return ULong__toString_impl(this._data_1);
  };
  ULong.prototype.hashCode = function () {
    return ULong__hashCode_impl(this._data_1);
  };
  ULong.prototype.equals = function (other) {
    return ULong__equals_impl(this._data_1, other);
  };
  ULong.$metadata$ = {
    simpleName: 'ULong',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toULong(_this_) {
    return _ULong___init__impl_(_this_);
  }
  function toULong_0(_this_) {
    return _ULong___init__impl_(toLong(_this_));
  }
  function toULong_1(_this_) {
    return doubleToULong(_this_);
  }
  function toULong_2(_this_) {
    return doubleToULong(_this_);
  }
  function toULong_3(_this_) {
    return _ULong___init__impl_(toLong(_this_));
  }
  function toULong_4(_this_) {
    return _ULong___init__impl_(toLong(_this_));
  }
  function _get_array__1($this) {
    return $this._array_1;
  }
  function _set_index__1($this, _set___) {
    $this._index_2 = _set___;
  }
  function _get_index__1($this) {
    return $this._index_2;
  }
  function _ULongArray___init__impl_(storage) {
    return storage;
  }
  function _ULongArray___get_storage__impl_(this_0) {
    return this_0;
  }
  function _ULongArray___init__impl__0(size_0) {
    var tmp = _ULongArray___init__impl_(longArray(size_0));
    return tmp;
  }
  function ULongArray__get_impl(this_0, index) {
    var tmp0_toULong_0 = _ULongArray___get_storage__impl_(this_0)[index];
    return _ULong___init__impl_(tmp0_toULong_0);
  }
  function ULongArray__set_impl(this_0, index, value) {
    var tmp = _ULongArray___get_storage__impl_(this_0);
    tmp[index] = _ULong___get_data__impl_(value);
  }
  function _ULongArray___get_size__impl_(this_0) {
    return _ULongArray___get_storage__impl_(this_0).length;
  }
  function ULongArray__iterator_impl(this_0) {
    return new Iterator_1(_ULongArray___get_storage__impl_(this_0));
  }
  function Iterator_1(array) {
    ULongIterator.call(this);
    this._array_1 = array;
    this._index_2 = 0;
  }
  Iterator_1.prototype.hasNext_43 = function () {
    return this._index_2 < this._array_1.length;
  };
  Iterator_1.prototype.nextULong_1 = function () {
    var tmp;
    if (this._index_2 < this._array_1.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_2;
      tmp0_this._index_2 = tmp1 + 1 | 0;
      var tmp0_toULong_0 = this._array_1[tmp1];
      tmp = _ULong___init__impl_(tmp0_toULong_0);
    } else {
      throw NoSuchElementException_init_$Create$_0(this._index_2.toString());
    }
    return tmp;
  };
  Iterator_1.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'class',
    interfaces: []
  };
  function ULongArray__contains_impl(this_0, element) {
    var tmp = isObject(new ULong(element)) ? new ULong(element) : THROW_CCE();
    if (!(tmp instanceof ULong))
      return false;
    else {
    }
    var tmp_0 = _ULongArray___get_storage__impl_(this_0);
    return contains_3(tmp_0, _ULong___get_data__impl_(element));
  }
  function ULongArray__contains_impl_0(this_0, element) {
    if (!(element instanceof ULong))
      return false;
    else {
    }
    var tmp = this_0._storage_1;
    return ULongArray__contains_impl(tmp, element instanceof ULong ? element._data_1 : THROW_CCE());
  }
  function ULongArray__containsAll_impl(this_0, elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = isInterface(elements, Collection) ? elements : THROW_CCE();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        var tmp_0;
        if (element_2 instanceof ULong) {
          var tmp_1 = _ULongArray___get_storage__impl_(this_0);
          var tmp0_toLong_0_4 = element_2._data_1;
          tmp_0 = contains_3(tmp_1, _ULong___get_data__impl_(tmp0_toLong_0_4));
        } else {
          {
            tmp_0 = false;
          }
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function ULongArray__containsAll_impl_0(this_0, elements) {
    return ULongArray__containsAll_impl(this_0._storage_1, elements);
  }
  function ULongArray__isEmpty_impl(this_0) {
    return _ULongArray___get_storage__impl_(this_0).length === 0;
  }
  function ULongArray__toString_impl(this_0) {
    return '' + 'ULongArray(storage=' + toString_1(this_0) + ')';
  }
  function ULongArray__hashCode_impl(this_0) {
    return hashCode(this_0);
  }
  function ULongArray__equals_impl(this_0, other) {
    if (!(other instanceof ULongArray))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof ULongArray ? other._storage_1 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ULongArray(storage) {
    this._storage_1 = storage;
  }
  ULongArray.prototype._get_size__36 = function () {
    return _ULongArray___get_size__impl_(this._storage_1);
  };
  ULongArray.prototype.iterator_51 = function () {
    return ULongArray__iterator_impl(this._storage_1);
  };
  ULongArray.prototype.contains_24 = function (element) {
    return ULongArray__contains_impl(this._storage_1, element);
  };
  ULongArray.prototype.contains_54 = function (element) {
    return ULongArray__contains_impl_0(this, element);
  };
  ULongArray.prototype.containsAll_15 = function (elements) {
    return ULongArray__containsAll_impl(this._storage_1, elements);
  };
  ULongArray.prototype.containsAll_34 = function (elements) {
    return ULongArray__containsAll_impl_0(this, elements);
  };
  ULongArray.prototype.isEmpty_47 = function () {
    return ULongArray__isEmpty_impl(this._storage_1);
  };
  ULongArray.prototype.toString = function () {
    return ULongArray__toString_impl(this._storage_1);
  };
  ULongArray.prototype.hashCode = function () {
    return ULongArray__hashCode_impl(this._storage_1);
  };
  ULongArray.prototype.equals = function (other) {
    return ULongArray__equals_impl(this._storage_1, other);
  };
  ULongArray.$metadata$ = {
    simpleName: 'ULongArray',
    kind: 'class',
    interfaces: [Collection]
  };
  function Companion_11() {
    Companion_instance_10 = this;
    var tmp = this;
    Companion_getInstance_9();
    var tmp_0 = _ULong___init__impl_(new Long(-1, -1));
    Companion_getInstance_9();
    tmp._EMPTY_0 = new ULongRange(tmp_0, _ULong___init__impl_(new Long(0, 0)));
  }
  Companion_11.prototype._get_EMPTY__3 = function () {
    return this._EMPTY_0;
  };
  Companion_11.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_11();
    return Companion_instance_10;
  }
  function ULongRange(start, endInclusive) {
    Companion_getInstance_10();
    ULongProgression.call(this, start, endInclusive, new Long(1, 0));
  }
  ULongRange.prototype._get_start__3 = function () {
    return this._get_first__3();
  };
  ULongRange.prototype._get_start__8 = function () {
    return new ULong(this._get_start__3());
  };
  ULongRange.prototype._get_endInclusive__3 = function () {
    return this._get_last__2();
  };
  ULongRange.prototype._get_endInclusive__8 = function () {
    return new ULong(this._get_endInclusive__3());
  };
  ULongRange.prototype.contains_24 = function (value) {
    var tmp;
    var tmp0_compareTo_0 = this._get_first__3();
    if (ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(value)) <= 0) {
      var tmp1_compareTo_0 = this._get_last__2();
      tmp = ulongCompare(_ULong___get_data__impl_(value), _ULong___get_data__impl_(tmp1_compareTo_0)) <= 0;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ULongRange.prototype.contains_34 = function (value) {
    return this.contains_24(value instanceof ULong ? value._data_1 : THROW_CCE());
  };
  ULongRange.prototype.isEmpty_47 = function () {
    var tmp0_compareTo_0 = this._get_first__3();
    var tmp1_compareTo_0 = this._get_last__2();
    return ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) > 0;
  };
  ULongRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof ULongRange) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : equals(new ULong(this._get_first__3()), new ULong(other._get_first__3())) ? equals(new ULong(this._get_last__2()), new ULong(other._get_last__2())) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ULongRange.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_47()) {
      tmp = -1;
    } else {
      var tmp2_xor_0 = this._get_first__3();
      var tmp0_shr_0 = this._get_first__3();
      var tmp1_shr_0 = 32;
      var tmp3_xor_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp0_shr_0).ushr_0(tmp1_shr_0));
      var tmp4_toInt_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp2_xor_0).xor(_ULong___get_data__impl_(tmp3_xor_0)));
      var tmp_0 = imul(31, _ULong___get_data__impl_(tmp4_toInt_0).toInt_6());
      var tmp7_xor_0 = this._get_last__2();
      var tmp5_shr_0 = this._get_last__2();
      var tmp6_shr_0 = 32;
      var tmp8_xor_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp5_shr_0).ushr_0(tmp6_shr_0));
      var tmp9_toInt_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp7_xor_0).xor(_ULong___get_data__impl_(tmp8_xor_0)));
      tmp = tmp_0 + _ULong___get_data__impl_(tmp9_toInt_0).toInt_6() | 0;
    }
    return tmp;
  };
  ULongRange.prototype.toString = function () {
    return '' + new ULong(this._get_first__3()) + '..' + new ULong(this._get_last__2());
  };
  ULongRange.$metadata$ = {
    simpleName: 'ULongRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_12() {
    Companion_instance_11 = this;
  }
  Companion_12.prototype.fromClosedRange_0 = function (rangeStart, rangeEnd, step) {
    return new ULongProgression(rangeStart, rangeEnd, step);
  };
  Companion_12.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_12();
    return Companion_instance_11;
  }
  function ULongProgression(start, endInclusive, step) {
    Companion_getInstance_11();
    if (step.equals(new Long(0, 0)))
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    Companion_getInstance_21();
    if (step.equals(new Long(0, -2147483648)))
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Long.MIN_VALUE to avoid overflow on negation.');
    else {
    }
    this._first_1 = start;
    this._last_0 = getProgressionLastElement_0(start, endInclusive, step);
    this._step_1 = step;
  }
  ULongProgression.prototype._get_first__3 = function () {
    return this._first_1;
  };
  ULongProgression.prototype._get_last__2 = function () {
    return this._last_0;
  };
  ULongProgression.prototype._get_step__11 = function () {
    return this._step_1;
  };
  ULongProgression.prototype.iterator_51 = function () {
    return new ULongProgressionIterator(this._first_1, this._last_0, this._step_1);
  };
  ULongProgression.prototype.isEmpty_47 = function () {
    var tmp;
    if (this._step_1.compareTo_56(new Long(0, 0)) > 0) {
      var tmp0_compareTo_0 = this._first_1;
      var tmp1_compareTo_0 = this._last_0;
      tmp = ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) > 0;
    } else {
      var tmp2_compareTo_0 = this._first_1;
      var tmp3_compareTo_0 = this._last_0;
      tmp = ulongCompare(_ULong___get_data__impl_(tmp2_compareTo_0), _ULong___get_data__impl_(tmp3_compareTo_0)) < 0;
    }
    return tmp;
  };
  ULongProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof ULongProgression) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : (equals(new ULong(this._first_1), new ULong(other._first_1)) ? equals(new ULong(this._last_0), new ULong(other._last_0)) : false) ? this._step_1.equals(other._step_1) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  ULongProgression.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_47()) {
      tmp = -1;
    } else {
      var tmp2_xor_0 = this._first_1;
      var tmp0_shr_0 = this._first_1;
      var tmp1_shr_0 = 32;
      var tmp3_xor_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp0_shr_0).ushr_0(tmp1_shr_0));
      var tmp4_toInt_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp2_xor_0).xor(_ULong___get_data__impl_(tmp3_xor_0)));
      var tmp_0 = imul(31, _ULong___get_data__impl_(tmp4_toInt_0).toInt_6());
      var tmp7_xor_0 = this._last_0;
      var tmp5_shr_0 = this._last_0;
      var tmp6_shr_0 = 32;
      var tmp8_xor_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp5_shr_0).ushr_0(tmp6_shr_0));
      var tmp9_toInt_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp7_xor_0).xor(_ULong___get_data__impl_(tmp8_xor_0)));
      tmp = imul(31, tmp_0 + _ULong___get_data__impl_(tmp9_toInt_0).toInt_6() | 0) + this._step_1.xor(this._step_1.ushr_0(32)).toInt_6() | 0;
    }
    return tmp;
  };
  ULongProgression.prototype.toString = function () {
    return this._step_1.compareTo_56(new Long(0, 0)) > 0 ? '' + new ULong(this._first_1) + '..' + new ULong(this._last_0) + ' step ' + this._step_1 : '' + new ULong(this._first_1) + ' downTo ' + new ULong(this._last_0) + ' step ' + this._step_1.unaryMinus_4();
  };
  ULongProgression.$metadata$ = {
    simpleName: 'ULongProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function _get_finalElement__0($this) {
    return $this._finalElement_0;
  }
  function _set_hasNext__0($this, _set___) {
    $this._hasNext_0 = _set___;
  }
  function _get_hasNext__0($this) {
    return $this._hasNext_0;
  }
  function _get_step__0($this) {
    return $this._step_2;
  }
  function _set_next__0($this, _set___) {
    $this._next_0 = _set___;
  }
  function _get_next__0($this) {
    return $this._next_0;
  }
  function ULongProgressionIterator(first_2, last_2, step) {
    ULongIterator.call(this);
    this._finalElement_0 = last_2;
    var tmp = this;
    var tmp_0;
    if (step.compareTo_56(new Long(0, 0)) > 0) {
      tmp_0 = ulongCompare(_ULong___get_data__impl_(first_2), _ULong___get_data__impl_(last_2)) <= 0;
    } else {
      tmp_0 = ulongCompare(_ULong___get_data__impl_(first_2), _ULong___get_data__impl_(last_2)) >= 0;
    }
    tmp._hasNext_0 = tmp_0;
    var tmp_1 = this;
    tmp_1._step_2 = _ULong___init__impl_(step);
    this._next_0 = this._hasNext_0 ? first_2 : this._finalElement_0;
  }
  ULongProgressionIterator.prototype.hasNext_43 = function () {
    return this._hasNext_0;
  };
  ULongProgressionIterator.prototype.nextULong_1 = function () {
    var value = this._next_0;
    if (equals(new ULong(value), new ULong(this._finalElement_0))) {
      if (!this._hasNext_0)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_0 = false;
    } else {
      var tmp0_this = this;
      var tmp = tmp0_this;
      var tmp0_plus_0 = tmp0_this._next_0;
      var tmp1_plus_0 = this._step_2;
      tmp._next_0 = _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(tmp1_plus_0)));
    }
    return value;
  };
  ULongProgressionIterator.$metadata$ = {
    simpleName: 'ULongProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      var tmp_0;
      if (uintCompare(_UInt___get_data__impl_(start), _UInt___get_data__impl_(end)) >= 0) {
        tmp_0 = end;
      } else {
        {
          var tmp0_minus_0 = differenceModulo(end, start, _UInt___init__impl_(step));
          tmp_0 = _UInt___init__impl_(_UInt___get_data__impl_(end) - _UInt___get_data__impl_(tmp0_minus_0) | 0);
        }
      }
      tmp = tmp_0;
    } else if (step < 0) {
      var tmp_1;
      if (uintCompare(_UInt___get_data__impl_(start), _UInt___get_data__impl_(end)) <= 0) {
        tmp_1 = end;
      } else {
        {
          var tmp1_toUInt_0 = -step | 0;
          var tmp2_plus_0 = differenceModulo(start, end, _UInt___init__impl_(tmp1_toUInt_0));
          tmp_1 = _UInt___init__impl_(_UInt___get_data__impl_(end) + _UInt___get_data__impl_(tmp2_plus_0) | 0);
        }
      }
      tmp = tmp_1;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function getProgressionLastElement_0(start, end, step) {
    var tmp;
    if (step.compareTo_56(new Long(0, 0)) > 0) {
      var tmp_0;
      if (ulongCompare(_ULong___get_data__impl_(start), _ULong___get_data__impl_(end)) >= 0) {
        tmp_0 = end;
      } else {
        {
          var tmp0_minus_0 = differenceModulo_0(end, start, _ULong___init__impl_(step));
          tmp_0 = _ULong___init__impl_(_ULong___get_data__impl_(end).minus_34(_ULong___get_data__impl_(tmp0_minus_0)));
        }
      }
      tmp = tmp_0;
    } else if (step.compareTo_56(new Long(0, 0)) < 0) {
      var tmp_1;
      if (ulongCompare(_ULong___get_data__impl_(start), _ULong___get_data__impl_(end)) <= 0) {
        tmp_1 = end;
      } else {
        {
          var tmp1_toULong_0 = step.unaryMinus_4();
          var tmp2_plus_0 = differenceModulo_0(start, end, _ULong___init__impl_(tmp1_toULong_0));
          tmp_1 = _ULong___init__impl_(_ULong___get_data__impl_(end).plus_38(_ULong___get_data__impl_(tmp2_plus_0)));
        }
      }
      tmp = tmp_1;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    var ac = uintRemainder(a, c);
    var bc = uintRemainder(b, c);
    var tmp;
    if (uintCompare(_UInt___get_data__impl_(ac), _UInt___get_data__impl_(bc)) >= 0) {
      tmp = _UInt___init__impl_(_UInt___get_data__impl_(ac) - _UInt___get_data__impl_(bc) | 0);
    } else {
      {
        var tmp0_plus_0 = _UInt___init__impl_(_UInt___get_data__impl_(ac) - _UInt___get_data__impl_(bc) | 0);
        tmp = _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(c) | 0);
      }
    }
    return tmp;
  }
  function differenceModulo_0(a, b, c) {
    var ac = ulongRemainder(a, c);
    var bc = ulongRemainder(b, c);
    var tmp;
    if (ulongCompare(_ULong___get_data__impl_(ac), _ULong___get_data__impl_(bc)) >= 0) {
      tmp = _ULong___init__impl_(_ULong___get_data__impl_(ac).minus_34(_ULong___get_data__impl_(bc)));
    } else {
      {
        var tmp0_plus_0 = _ULong___init__impl_(_ULong___get_data__impl_(ac).minus_34(_ULong___get_data__impl_(bc)));
        tmp = _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(c)));
      }
    }
    return tmp;
  }
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
  }
  function Companion_13() {
    Companion_instance_12 = this;
    this._MIN_VALUE_2 = _UShort___init__impl_(0);
    this._MAX_VALUE_2 = _UShort___init__impl_(-1);
    this._SIZE_BYTES_2 = 2;
    this._SIZE_BITS_2 = 16;
  }
  Companion_13.prototype._get_MIN_VALUE__2 = function () {
    return this._MIN_VALUE_2;
  };
  Companion_13.prototype._get_MAX_VALUE__2 = function () {
    return this._MAX_VALUE_2;
  };
  Companion_13.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_2;
  };
  Companion_13.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_2;
  };
  Companion_13.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_13();
    return Companion_instance_12;
  }
  function UShort__compareTo_impl(this_0, other) {
    var tmp = _UShort___get_data__impl_(this_0) & 65535;
    return compareTo_0(tmp, _UByte___get_data__impl_(other) & 255);
  }
  function UShort__compareTo_impl_0(this_0, other) {
    var tmp = _UShort___get_data__impl_(this_0) & 65535;
    return compareTo_0(tmp, _UShort___get_data__impl_(other) & 65535);
  }
  function UShort__compareTo_impl_1(this_0, other) {
    var tmp = this_0._data_2;
    return UShort__compareTo_impl_0(tmp, other instanceof UShort ? other._data_2 : THROW_CCE());
  }
  function UShort__compareTo_impl_2(this_0, other) {
    var tmp0_compareTo_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return uintCompare(_UInt___get_data__impl_(tmp0_compareTo_0), _UInt___get_data__impl_(other));
  }
  function UShort__compareTo_impl_3(this_0, other) {
    var tmp0_compareTo_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(other));
  }
  function UShort__plus_impl(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_plus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
  }
  function UShort__plus_impl_0(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(tmp1_plus_0) | 0);
  }
  function UShort__plus_impl_1(this_0, other) {
    var tmp0_plus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_plus_0) + _UInt___get_data__impl_(other) | 0);
  }
  function UShort__plus_impl_2(this_0, other) {
    var tmp0_plus_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_plus_0).plus_38(_ULong___get_data__impl_(other)));
  }
  function UShort__minus_impl(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_minus_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(tmp1_minus_0) | 0);
  }
  function UShort__minus_impl_0(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(tmp1_minus_0) | 0);
  }
  function UShort__minus_impl_1(this_0, other) {
    var tmp0_minus_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return _UInt___init__impl_(_UInt___get_data__impl_(tmp0_minus_0) - _UInt___get_data__impl_(other) | 0);
  }
  function UShort__minus_impl_2(this_0, other) {
    var tmp0_minus_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_minus_0).minus_34(_ULong___get_data__impl_(other)));
  }
  function UShort__times_impl(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_times_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(tmp1_times_0)));
  }
  function UShort__times_impl_0(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(tmp1_times_0)));
  }
  function UShort__times_impl_1(this_0, other) {
    var tmp0_times_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return _UInt___init__impl_(imul(_UInt___get_data__impl_(tmp0_times_0), _UInt___get_data__impl_(other)));
  }
  function UShort__times_impl_2(this_0, other) {
    var tmp0_times_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return _ULong___init__impl_(_ULong___get_data__impl_(tmp0_times_0).times_32(_ULong___get_data__impl_(other)));
  }
  function UShort__div_impl(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_div_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintDivide(tmp0_div_0, tmp1_div_0);
  }
  function UShort__div_impl_0(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintDivide(tmp0_div_0, tmp1_div_0);
  }
  function UShort__div_impl_1(this_0, other) {
    var tmp0_div_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return uintDivide(tmp0_div_0, other);
  }
  function UShort__div_impl_2(this_0, other) {
    var tmp0_div_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return ulongDivide(tmp0_div_0, other);
  }
  function UShort__rem_impl(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_rem_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintRemainder(tmp0_rem_0, tmp1_rem_0);
  }
  function UShort__rem_impl_0(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintRemainder(tmp0_rem_0, tmp1_rem_0);
  }
  function UShort__rem_impl_1(this_0, other) {
    var tmp0_rem_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return uintRemainder(tmp0_rem_0, other);
  }
  function UShort__rem_impl_2(this_0, other) {
    var tmp0_rem_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return ulongRemainder(tmp0_rem_0, other);
  }
  function UShort__floorDiv_impl(this_0, other) {
    var tmp0_floorDiv_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_floorDiv_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    return uintDivide(tmp0_floorDiv_0, tmp1_floorDiv_0);
  }
  function UShort__floorDiv_impl_0(this_0, other) {
    var tmp0_floorDiv_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_floorDiv_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    return uintDivide(tmp0_floorDiv_0, tmp1_floorDiv_0);
  }
  function UShort__floorDiv_impl_1(this_0, other) {
    var tmp0_floorDiv_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return uintDivide(tmp0_floorDiv_0, other);
  }
  function UShort__floorDiv_impl_2(this_0, other) {
    var tmp0_floorDiv_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return ulongDivide(tmp0_floorDiv_0, other);
  }
  function UShort__mod_impl(this_0, other) {
    var tmp0_mod_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_mod_0 = _UInt___init__impl_(_UByte___get_data__impl_(other) & 255);
    var tmp2_toUByte_0 = uintRemainder(tmp0_mod_0, tmp1_mod_0);
    var tmp0_toUByte_0_1 = _UInt___get_data__impl_(tmp2_toUByte_0);
    return _UByte___init__impl_(toByte(tmp0_toUByte_0_1));
  }
  function UShort__mod_impl_0(this_0, other) {
    var tmp0_mod_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    var tmp1_mod_0 = _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535);
    var tmp2_toUShort_0 = uintRemainder(tmp0_mod_0, tmp1_mod_0);
    var tmp0_toUShort_0_1 = _UInt___get_data__impl_(tmp2_toUShort_0);
    return _UShort___init__impl_(toShort(tmp0_toUShort_0_1));
  }
  function UShort__mod_impl_1(this_0, other) {
    var tmp0_mod_0 = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return uintRemainder(tmp0_mod_0, other);
  }
  function UShort__mod_impl_2(this_0, other) {
    var tmp0_mod_0 = _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
    return ulongRemainder(tmp0_mod_0, other);
  }
  function UShort__inc_impl(this_0) {
    return _UShort___init__impl_(numberToShort(_UShort___get_data__impl_(this_0) + 1));
  }
  function UShort__dec_impl(this_0) {
    return _UShort___init__impl_(numberToShort(_UShort___get_data__impl_(this_0) - 1));
  }
  function UShort__rangeTo_impl(this_0, other) {
    var tmp = _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
    return new UIntRange(tmp, _UInt___init__impl_(_UShort___get_data__impl_(other) & 65535));
  }
  function UShort__and_impl(this_0, other) {
    var tmp0_and_0 = _UShort___get_data__impl_(this_0);
    var tmp1_and_0 = _UShort___get_data__impl_(other);
    return _UShort___init__impl_(toShort(tmp0_and_0 & tmp1_and_0));
  }
  function UShort__or_impl(this_0, other) {
    var tmp0_or_0 = _UShort___get_data__impl_(this_0);
    var tmp1_or_0 = _UShort___get_data__impl_(other);
    return _UShort___init__impl_(toShort(tmp0_or_0 | tmp1_or_0));
  }
  function UShort__xor_impl(this_0, other) {
    var tmp0_xor_0 = _UShort___get_data__impl_(this_0);
    var tmp1_xor_0 = _UShort___get_data__impl_(other);
    return _UShort___init__impl_(toShort(tmp0_xor_0 ^ tmp1_xor_0));
  }
  function UShort__inv_impl(this_0) {
    var tmp0_inv_0 = _UShort___get_data__impl_(this_0);
    return _UShort___init__impl_(toShort(~tmp0_inv_0));
  }
  function UShort__toByte_impl(this_0) {
    return toByte(_UShort___get_data__impl_(this_0));
  }
  function UShort__toShort_impl(this_0) {
    return _UShort___get_data__impl_(this_0);
  }
  function UShort__toInt_impl(this_0) {
    return _UShort___get_data__impl_(this_0) & 65535;
  }
  function UShort__toLong_impl(this_0) {
    return toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0));
  }
  function UShort__toUByte_impl(this_0) {
    var tmp0_toUByte_0 = _UShort___get_data__impl_(this_0);
    return _UByte___init__impl_(toByte(tmp0_toUByte_0));
  }
  function UShort__toUShort_impl(this_0) {
    return this_0;
  }
  function UShort__toUInt_impl(this_0) {
    return _UInt___init__impl_(_UShort___get_data__impl_(this_0) & 65535);
  }
  function UShort__toULong_impl(this_0) {
    return _ULong___init__impl_(toLong(_UShort___get_data__impl_(this_0)).and(new Long(65535, 0)));
  }
  function UShort__toFloat_impl(this_0) {
    return _UShort___get_data__impl_(this_0) & 65535;
  }
  function UShort__toDouble_impl(this_0) {
    return _UShort___get_data__impl_(this_0) & 65535;
  }
  function UShort__toString_impl(this_0) {
    return (_UShort___get_data__impl_(this_0) & 65535).toString();
  }
  function UShort__hashCode_impl(this_0) {
    return this_0;
  }
  function UShort__equals_impl(this_0, other) {
    if (!(other instanceof UShort))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UShort ? other._data_2 : THROW_CCE();
    if (!(this_0 === tmp0_other_with_cast))
      return false;
    return true;
  }
  function UShort(data) {
    Companion_getInstance_12();
    this._data_2 = data;
  }
  UShort.prototype.compareTo_11 = function (other) {
    return UShort__compareTo_impl_0(this._data_2, other);
  };
  UShort.prototype.compareTo_25 = function (other) {
    return UShort__compareTo_impl_1(this, other);
  };
  UShort.prototype.toString = function () {
    return UShort__toString_impl(this._data_2);
  };
  UShort.prototype.hashCode = function () {
    return UShort__hashCode_impl(this._data_2);
  };
  UShort.prototype.equals = function (other) {
    return UShort__equals_impl(this._data_2, other);
  };
  UShort.$metadata$ = {
    simpleName: 'UShort',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toUShort(_this_) {
    return _UShort___init__impl_(toShort(_this_));
  }
  function toUShort_0(_this_) {
    return _UShort___init__impl_(_this_.toShort_6());
  }
  function toUShort_1(_this_) {
    return _UShort___init__impl_(_this_);
  }
  function _get_array__2($this) {
    return $this._array_2;
  }
  function _set_index__2($this, _set___) {
    $this._index_3 = _set___;
  }
  function _get_index__2($this) {
    return $this._index_3;
  }
  function _UShortArray___init__impl_(storage) {
    return storage;
  }
  function _UShortArray___get_storage__impl_(this_0) {
    return this_0;
  }
  function _UShortArray___init__impl__0(size_0) {
    var tmp = _UShortArray___init__impl_(new Int16Array(size_0));
    return tmp;
  }
  function UShortArray__get_impl(this_0, index) {
    var tmp0_toUShort_0 = _UShortArray___get_storage__impl_(this_0)[index];
    return _UShort___init__impl_(tmp0_toUShort_0);
  }
  function UShortArray__set_impl(this_0, index, value) {
    var tmp = _UShortArray___get_storage__impl_(this_0);
    tmp[index] = _UShort___get_data__impl_(value);
  }
  function _UShortArray___get_size__impl_(this_0) {
    return _UShortArray___get_storage__impl_(this_0).length;
  }
  function UShortArray__iterator_impl(this_0) {
    return new Iterator_2(_UShortArray___get_storage__impl_(this_0));
  }
  function Iterator_2(array) {
    UShortIterator.call(this);
    this._array_2 = array;
    this._index_3 = 0;
  }
  Iterator_2.prototype.hasNext_43 = function () {
    return this._index_3 < this._array_2.length;
  };
  Iterator_2.prototype.nextUShort_0 = function () {
    var tmp;
    if (this._index_3 < this._array_2.length) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_3;
      tmp0_this._index_3 = tmp1 + 1 | 0;
      var tmp0_toUShort_0 = this._array_2[tmp1];
      tmp = _UShort___init__impl_(tmp0_toUShort_0);
    } else {
      throw NoSuchElementException_init_$Create$_0(this._index_3.toString());
    }
    return tmp;
  };
  Iterator_2.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'class',
    interfaces: []
  };
  function UShortArray__contains_impl(this_0, element) {
    var tmp = isObject(new UShort(element)) ? new UShort(element) : THROW_CCE();
    if (!(tmp instanceof UShort))
      return false;
    else {
    }
    var tmp_0 = _UShortArray___get_storage__impl_(this_0);
    return contains_1(tmp_0, _UShort___get_data__impl_(element));
  }
  function UShortArray__contains_impl_0(this_0, element) {
    if (!(element instanceof UShort))
      return false;
    else {
    }
    var tmp = this_0._storage_2;
    return UShortArray__contains_impl(tmp, element instanceof UShort ? element._data_2 : THROW_CCE());
  }
  function UShortArray__containsAll_impl(this_0, elements) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_all_0 = isInterface(elements, Collection) ? elements : THROW_CCE();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        var tmp_0;
        if (element_2 instanceof UShort) {
          var tmp_1 = _UShortArray___get_storage__impl_(this_0);
          var tmp0_toShort_0_4 = element_2._data_2;
          tmp_0 = contains_1(tmp_1, _UShort___get_data__impl_(tmp0_toShort_0_4));
        } else {
          {
            tmp_0 = false;
          }
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = true;
    }
     while (false);
    return tmp$ret$0;
  }
  function UShortArray__containsAll_impl_0(this_0, elements) {
    return UShortArray__containsAll_impl(this_0._storage_2, elements);
  }
  function UShortArray__isEmpty_impl(this_0) {
    return _UShortArray___get_storage__impl_(this_0).length === 0;
  }
  function UShortArray__toString_impl(this_0) {
    return '' + 'UShortArray(storage=' + toString_1(this_0) + ')';
  }
  function UShortArray__hashCode_impl(this_0) {
    return hashCode(this_0);
  }
  function UShortArray__equals_impl(this_0, other) {
    if (!(other instanceof UShortArray))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof UShortArray ? other._storage_2 : THROW_CCE();
    if (!equals(this_0, tmp0_other_with_cast))
      return false;
    return true;
  }
  function UShortArray(storage) {
    this._storage_2 = storage;
  }
  UShortArray.prototype._get_size__36 = function () {
    return _UShortArray___get_size__impl_(this._storage_2);
  };
  UShortArray.prototype.iterator_51 = function () {
    return UShortArray__iterator_impl(this._storage_2);
  };
  UShortArray.prototype.contains_26 = function (element) {
    return UShortArray__contains_impl(this._storage_2, element);
  };
  UShortArray.prototype.contains_54 = function (element) {
    return UShortArray__contains_impl_0(this, element);
  };
  UShortArray.prototype.containsAll_17 = function (elements) {
    return UShortArray__containsAll_impl(this._storage_2, elements);
  };
  UShortArray.prototype.containsAll_34 = function (elements) {
    return UShortArray__containsAll_impl_0(this, elements);
  };
  UShortArray.prototype.isEmpty_47 = function () {
    return UShortArray__isEmpty_impl(this._storage_2);
  };
  UShortArray.prototype.toString = function () {
    return UShortArray__toString_impl(this._storage_2);
  };
  UShortArray.prototype.hashCode = function () {
    return UShortArray__hashCode_impl(this._storage_2);
  };
  UShortArray.prototype.equals = function (other) {
    return UShortArray__equals_impl(this._storage_2, other);
  };
  UShortArray.$metadata$ = {
    simpleName: 'UShortArray',
    kind: 'class',
    interfaces: [Collection]
  };
  function uintCompare(v1, v2) {
    return compareTo_0(v1 ^ IntCompanionObject_getInstance()._MIN_VALUE_5, v2 ^ IntCompanionObject_getInstance()._MIN_VALUE_5);
  }
  function uintDivide(v1, v2) {
    var tmp = toLong(_UInt___get_data__impl_(v1)).and(new Long(-1, 0));
    var tmp0_toUInt_0 = tmp.div_32(toLong(_UInt___get_data__impl_(v2)).and(new Long(-1, 0)));
    return _UInt___init__impl_(tmp0_toUInt_0.toInt_6());
  }
  function uintRemainder(v1, v2) {
    var tmp = toLong(_UInt___get_data__impl_(v1)).and(new Long(-1, 0));
    var tmp0_toUInt_0 = tmp.rem_32(toLong(_UInt___get_data__impl_(v2)).and(new Long(-1, 0)));
    return _UInt___init__impl_(tmp0_toUInt_0.toInt_6());
  }
  function uintToDouble(v) {
    return (v & IntCompanionObject_getInstance()._MAX_VALUE_5) + (v >>> 31 << 30) * 2;
  }
  function ulongCompare(v1, v2) {
    Companion_getInstance_21();
    var tmp = v1.xor(new Long(0, -2147483648));
    Companion_getInstance_21();
    return tmp.compareTo_56(v2.xor(new Long(0, -2147483648)));
  }
  function ulongDivide(v1, v2) {
    var dividend = _ULong___get_data__impl_(v1);
    var divisor = _ULong___get_data__impl_(v2);
    if (divisor.compareTo_56(new Long(0, 0)) < 0) {
      var tmp;
      if (ulongCompare(_ULong___get_data__impl_(v1), _ULong___get_data__impl_(v2)) < 0) {
        tmp = _ULong___init__impl_(new Long(0, 0));
      } else {
        {
          tmp = _ULong___init__impl_(new Long(1, 0));
        }
      }
      return tmp;
    }if (dividend.compareTo_56(new Long(0, 0)) >= 0) {
      return _ULong___init__impl_(dividend.div_32(divisor));
    }var quotient = dividend.ushr_0(1).div_32(divisor).shl_0(1);
    var rem = dividend.minus_34(quotient.times_32(divisor));
    var tmp_0;
    var tmp0_compareTo_0 = _ULong___init__impl_(rem);
    var tmp1_compareTo_0 = _ULong___init__impl_(divisor);
    if (ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) >= 0) {
      tmp_0 = 1;
    } else {
      {
        tmp_0 = 0;
      }
    }
    var tmp2_plus_0 = tmp_0;
    return _ULong___init__impl_(quotient.plus_38(toLong(tmp2_plus_0)));
  }
  function ulongRemainder(v1, v2) {
    var dividend = _ULong___get_data__impl_(v1);
    var divisor = _ULong___get_data__impl_(v2);
    if (divisor.compareTo_56(new Long(0, 0)) < 0) {
      var tmp;
      if (ulongCompare(_ULong___get_data__impl_(v1), _ULong___get_data__impl_(v2)) < 0) {
        tmp = v1;
      } else {
        {
          tmp = _ULong___init__impl_(_ULong___get_data__impl_(v1).minus_34(_ULong___get_data__impl_(v2)));
        }
      }
      return tmp;
    }if (dividend.compareTo_56(new Long(0, 0)) >= 0) {
      return _ULong___init__impl_(dividend.rem_32(divisor));
    }var quotient = dividend.ushr_0(1).div_32(divisor).shl_0(1);
    var rem = dividend.minus_34(quotient.times_32(divisor));
    var tmp_0;
    var tmp0_compareTo_0 = _ULong___init__impl_(rem);
    var tmp1_compareTo_0 = _ULong___init__impl_(divisor);
    if (ulongCompare(_ULong___get_data__impl_(tmp0_compareTo_0), _ULong___get_data__impl_(tmp1_compareTo_0)) >= 0) {
      tmp_0 = divisor;
    } else {
      {
        tmp_0 = new Long(0, 0);
      }
    }
    return _ULong___init__impl_(rem.minus_34(tmp_0));
  }
  function ulongToDouble(v) {
    return v.ushr_0(11).toDouble_6() * 2048 + v.and(new Long(2047, 0)).toDouble_6();
  }
  function ulongToString(v) {
    return ulongToString_0(v, 10);
  }
  function ulongToString_0(v, base) {
    if (v.compareTo_56(new Long(0, 0)) >= 0)
      return toString_2(v, base);
    var tmp0_div_0 = v.ushr_0(1);
    var quotient = tmp0_div_0.div_32(toLong(base)).shl_0(1);
    var tmp1_times_0 = quotient;
    var rem = v.minus_34(tmp1_times_0.times_32(toLong(base)));
    if (rem.compareTo_56(toLong(base)) >= 0) {
      var tmp2_minus_0 = rem;
      rem = tmp2_minus_0.minus_34(toLong(base));
      var tmp3_plus_0 = quotient;
      var tmp4_plus_0 = 1;
      quotient = tmp3_plus_0.plus_38(toLong(tmp4_plus_0));
    }return toString_2(quotient, base) + toString_2(rem, base);
  }
  function doubleToUInt(v) {
    var tmp;
    if (isNaN_0(v)) {
      tmp = _UInt___init__impl_(0);
    } else {
      Companion_getInstance_6();
      var tmp0_toDouble_0 = _UInt___init__impl_(0);
      if (v <= uintToDouble(_UInt___get_data__impl_(tmp0_toDouble_0))) {
        Companion_getInstance_6();
        tmp = _UInt___init__impl_(0);
      } else {
        Companion_getInstance_6();
        var tmp1_toDouble_0 = _UInt___init__impl_(-1);
        if (v >= uintToDouble(_UInt___get_data__impl_(tmp1_toDouble_0))) {
          Companion_getInstance_6();
          tmp = _UInt___init__impl_(-1);
        } else {
          if (v <= IntCompanionObject_getInstance()._MAX_VALUE_5) {
            var tmp2_toUInt_0 = numberToInt(v);
            tmp = _UInt___init__impl_(tmp2_toUInt_0);
          } else {
            {
              var tmp3_toUInt_0 = numberToInt(v - IntCompanionObject_getInstance()._MAX_VALUE_5);
              var tmp5_plus_0 = _UInt___init__impl_(tmp3_toUInt_0);
              var tmp4_toUInt_0 = IntCompanionObject_getInstance()._MAX_VALUE_5;
              var tmp6_plus_0 = _UInt___init__impl_(tmp4_toUInt_0);
              tmp = _UInt___init__impl_(_UInt___get_data__impl_(tmp5_plus_0) + _UInt___get_data__impl_(tmp6_plus_0) | 0);
            }
          }
        }
      }
    }
    return tmp;
  }
  function doubleToULong(v) {
    var tmp;
    if (isNaN_0(v)) {
      tmp = _ULong___init__impl_(new Long(0, 0));
    } else {
      Companion_getInstance_9();
      var tmp0_toDouble_0 = _ULong___init__impl_(new Long(0, 0));
      if (v <= ulongToDouble(_ULong___get_data__impl_(tmp0_toDouble_0))) {
        Companion_getInstance_9();
        tmp = _ULong___init__impl_(new Long(0, 0));
      } else {
        Companion_getInstance_9();
        var tmp1_toDouble_0 = _ULong___init__impl_(new Long(-1, -1));
        if (v >= ulongToDouble(_ULong___get_data__impl_(tmp1_toDouble_0))) {
          Companion_getInstance_9();
          tmp = _ULong___init__impl_(new Long(-1, -1));
        } else {
          Companion_getInstance_21();
          if (v < (new Long(-1, 2147483647)).toDouble_6()) {
            var tmp2_toULong_0 = numberToLong(v);
            tmp = _ULong___init__impl_(tmp2_toULong_0);
          } else {
            {
              var tmp3_toULong_0 = numberToLong(v - 9.223372036854776E18);
              var tmp4_plus_0 = _ULong___init__impl_(tmp3_toULong_0);
              var tmp5_plus_0 = _ULong___init__impl_(new Long(0, -2147483648));
              tmp = _ULong___init__impl_(_ULong___get_data__impl_(tmp4_plus_0).plus_38(_ULong___get_data__impl_(tmp5_plus_0)));
            }
          }
        }
      }
    }
    return tmp;
  }
  function ExperimentalUnsignedTypes() {
  }
  ExperimentalUnsignedTypes.$metadata$ = {
    simpleName: 'ExperimentalUnsignedTypes',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Annotation() {
  }
  Annotation.$metadata$ = {
    simpleName: 'Annotation',
    kind: 'interface',
    interfaces: []
  };
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
  function Iterator_3() {
  }
  Iterator_3.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator_3]
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator_3]
  };
  function MutableListIterator() {
  }
  MutableListIterator.$metadata$ = {
    simpleName: 'MutableListIterator',
    kind: 'interface',
    interfaces: [ListIterator, MutableIterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function SinceKotlin(version) {
    this._version_0 = version;
  }
  SinceKotlin.prototype._get_version__0 = function () {
    return this._version_0;
  };
  SinceKotlin.$metadata$ = {
    simpleName: 'SinceKotlin',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Suppress(names) {
    this._names = names;
  }
  Suppress.prototype._get_names_ = function () {
    return this._names;
  };
  Suppress.$metadata$ = {
    simpleName: 'Suppress',
    kind: 'class',
    interfaces: [Annotation]
  };
  var DeprecationLevel_WARNING_instance;
  var DeprecationLevel_ERROR_instance;
  var DeprecationLevel_HIDDEN_instance;
  function values_5() {
    return [DeprecationLevel_WARNING_getInstance(), DeprecationLevel_ERROR_getInstance(), DeprecationLevel_HIDDEN_getInstance()];
  }
  function valueOf_5(value) {
    switch (value) {
      case 'WARNING':
        return DeprecationLevel_WARNING_getInstance();
      case 'ERROR':
        return DeprecationLevel_ERROR_getInstance();
      case 'HIDDEN':
        return DeprecationLevel_HIDDEN_getInstance();
      default:DeprecationLevel_initEntries();
        THROW_ISE();
        break;
    }
  }
  var DeprecationLevel_entriesInitialized;
  function DeprecationLevel_initEntries() {
    if (DeprecationLevel_entriesInitialized)
      return Unit_getInstance();
    DeprecationLevel_entriesInitialized = true;
    DeprecationLevel_WARNING_instance = new DeprecationLevel('WARNING', 0);
    DeprecationLevel_ERROR_instance = new DeprecationLevel('ERROR', 1);
    DeprecationLevel_HIDDEN_instance = new DeprecationLevel('HIDDEN', 2);
  }
  function DeprecationLevel(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  DeprecationLevel.$metadata$ = {
    simpleName: 'DeprecationLevel',
    kind: 'class',
    interfaces: []
  };
  function PublishedApi() {
  }
  PublishedApi.$metadata$ = {
    simpleName: 'PublishedApi',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ParameterName(name) {
    this._name = name;
  }
  ParameterName.prototype._get_name__23 = function () {
    return this._name;
  };
  ParameterName.$metadata$ = {
    simpleName: 'ParameterName',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Deprecated_init_$Init$(message, replaceWith, level, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      replaceWith = new ReplaceWith('', []);
    if (!(($mask0 & 4) === 0))
      level = DeprecationLevel_WARNING_getInstance();
    Deprecated.call($this, message, replaceWith, level);
    return $this;
  }
  function Deprecated_init_$Create$(message, replaceWith, level, $mask0, $marker) {
    return Deprecated_init_$Init$(message, replaceWith, level, $mask0, $marker, Object.create(Deprecated.prototype));
  }
  function Deprecated(message, replaceWith, level) {
    this._message_1 = message;
    this._replaceWith = replaceWith;
    this._level_2 = level;
  }
  Deprecated.prototype._get_message__18 = function () {
    return this._message_1;
  };
  Deprecated.prototype._get_replaceWith_ = function () {
    return this._replaceWith;
  };
  Deprecated.prototype._get_level__2 = function () {
    return this._level_2;
  };
  Deprecated.$metadata$ = {
    simpleName: 'Deprecated',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ReplaceWith(expression, imports) {
    this._expression = expression;
    this._imports = imports;
  }
  ReplaceWith.prototype._get_expression_ = function () {
    return this._expression;
  };
  ReplaceWith.prototype._get_imports_ = function () {
    return this._imports;
  };
  ReplaceWith.$metadata$ = {
    simpleName: 'ReplaceWith',
    kind: 'class',
    interfaces: [Annotation]
  };
  function DeprecatedSinceKotlin_init_$Init$(warningSince, errorSince, hiddenSince, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      warningSince = '';
    if (!(($mask0 & 2) === 0))
      errorSince = '';
    if (!(($mask0 & 4) === 0))
      hiddenSince = '';
    DeprecatedSinceKotlin.call($this, warningSince, errorSince, hiddenSince);
    return $this;
  }
  function DeprecatedSinceKotlin_init_$Create$(warningSince, errorSince, hiddenSince, $mask0, $marker) {
    return DeprecatedSinceKotlin_init_$Init$(warningSince, errorSince, hiddenSince, $mask0, $marker, Object.create(DeprecatedSinceKotlin.prototype));
  }
  function DeprecatedSinceKotlin(warningSince, errorSince, hiddenSince) {
    this._warningSince = warningSince;
    this._errorSince = errorSince;
    this._hiddenSince = hiddenSince;
  }
  DeprecatedSinceKotlin.prototype._get_warningSince_ = function () {
    return this._warningSince;
  };
  DeprecatedSinceKotlin.prototype._get_errorSince_ = function () {
    return this._errorSince;
  };
  DeprecatedSinceKotlin.prototype._get_hiddenSince_ = function () {
    return this._hiddenSince;
  };
  DeprecatedSinceKotlin.$metadata$ = {
    simpleName: 'DeprecatedSinceKotlin',
    kind: 'class',
    interfaces: [Annotation]
  };
  function ExtensionFunctionType() {
  }
  ExtensionFunctionType.$metadata$ = {
    simpleName: 'ExtensionFunctionType',
    kind: 'class',
    interfaces: [Annotation]
  };
  function UnsafeVariance() {
  }
  UnsafeVariance.$metadata$ = {
    simpleName: 'UnsafeVariance',
    kind: 'class',
    interfaces: [Annotation]
  };
  function DeprecationLevel_WARNING_getInstance() {
    DeprecationLevel_initEntries();
    return DeprecationLevel_WARNING_instance;
  }
  function DeprecationLevel_ERROR_getInstance() {
    DeprecationLevel_initEntries();
    return DeprecationLevel_ERROR_instance;
  }
  function DeprecationLevel_HIDDEN_getInstance() {
    DeprecationLevel_initEntries();
    return DeprecationLevel_HIDDEN_instance;
  }
  function ByteIterator() {
  }
  ByteIterator.prototype.next_48 = function () {
    return this.nextByte_0();
  };
  ByteIterator.$metadata$ = {
    simpleName: 'ByteIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function IntIterator() {
  }
  IntIterator.prototype.next_48 = function () {
    return this.nextInt_1();
  };
  IntIterator.$metadata$ = {
    simpleName: 'IntIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function DoubleIterator() {
  }
  DoubleIterator.prototype.next_48 = function () {
    return this.nextDouble_0();
  };
  DoubleIterator.$metadata$ = {
    simpleName: 'DoubleIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function FloatIterator() {
  }
  FloatIterator.prototype.next_48 = function () {
    return this.nextFloat_0();
  };
  FloatIterator.$metadata$ = {
    simpleName: 'FloatIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function LongIterator() {
  }
  LongIterator.prototype.next_48 = function () {
    return this.nextLong_1();
  };
  LongIterator.$metadata$ = {
    simpleName: 'LongIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function CharIterator() {
  }
  CharIterator.prototype.next_48 = function () {
    return this.nextChar_1();
  };
  CharIterator.$metadata$ = {
    simpleName: 'CharIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function BooleanIterator() {
  }
  BooleanIterator.prototype.next_48 = function () {
    return this.nextBoolean_0();
  };
  BooleanIterator.$metadata$ = {
    simpleName: 'BooleanIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function ShortIterator() {
  }
  ShortIterator.prototype.next_48 = function () {
    return this.nextShort_0();
  };
  ShortIterator.$metadata$ = {
    simpleName: 'ShortIterator',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _get_finalElement__1($this) {
    return $this._finalElement_1;
  }
  function _set_hasNext__1($this, _set___) {
    $this._hasNext_1 = _set___;
  }
  function _get_hasNext__1($this) {
    return $this._hasNext_1;
  }
  function _set_next__1($this, _set___) {
    $this._next_1 = _set___;
  }
  function _get_next__1($this) {
    return $this._next_1;
  }
  function IntProgressionIterator(first_2, last_2, step) {
    IntIterator.call(this);
    this._step_3 = step;
    this._finalElement_1 = last_2;
    this._hasNext_1 = this._step_3 > 0 ? first_2 <= last_2 : first_2 >= last_2;
    this._next_1 = this._hasNext_1 ? first_2 : this._finalElement_1;
  }
  IntProgressionIterator.prototype._get_step__11 = function () {
    return this._step_3;
  };
  IntProgressionIterator.prototype.hasNext_43 = function () {
    return this._hasNext_1;
  };
  IntProgressionIterator.prototype.nextInt_1 = function () {
    var value = this._next_1;
    if (value === this._finalElement_1) {
      if (!this._hasNext_1)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_1 = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_1 = tmp0_this._next_1 + this._step_3 | 0;
    }
    return value;
  };
  IntProgressionIterator.$metadata$ = {
    simpleName: 'IntProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function _get_finalElement__2($this) {
    return $this._finalElement_2;
  }
  function _set_hasNext__2($this, _set___) {
    $this._hasNext_2 = _set___;
  }
  function _get_hasNext__2($this) {
    return $this._hasNext_2;
  }
  function _set_next__2($this, _set___) {
    $this._next_2 = _set___;
  }
  function _get_next__2($this) {
    return $this._next_2;
  }
  function LongProgressionIterator(first_2, last_2, step) {
    LongIterator.call(this);
    this._step_4 = step;
    this._finalElement_2 = last_2;
    this._hasNext_2 = this._step_4.compareTo_56(new Long(0, 0)) > 0 ? first_2.compareTo_56(last_2) <= 0 : first_2.compareTo_56(last_2) >= 0;
    this._next_2 = this._hasNext_2 ? first_2 : this._finalElement_2;
  }
  LongProgressionIterator.prototype._get_step__11 = function () {
    return this._step_4;
  };
  LongProgressionIterator.prototype.hasNext_43 = function () {
    return this._hasNext_2;
  };
  LongProgressionIterator.prototype.nextLong_1 = function () {
    var value = this._next_2;
    if (value.equals(this._finalElement_2)) {
      if (!this._hasNext_2)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_2 = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_2 = tmp0_this._next_2.plus_38(this._step_4);
    }
    return value;
  };
  LongProgressionIterator.$metadata$ = {
    simpleName: 'LongProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function _get_finalElement__3($this) {
    return $this._finalElement_3;
  }
  function _set_hasNext__3($this, _set___) {
    $this._hasNext_3 = _set___;
  }
  function _get_hasNext__3($this) {
    return $this._hasNext_3;
  }
  function _set_next__3($this, _set___) {
    $this._next_3 = _set___;
  }
  function _get_next__3($this) {
    return $this._next_3;
  }
  function CharProgressionIterator(first_2, last_2, step) {
    CharIterator.call(this);
    this._step_5 = step;
    var tmp = this;
    tmp._finalElement_3 = last_2.toInt_6();
    this._hasNext_3 = this._step_5 > 0 ? first_2.compareTo_17(last_2) <= 0 : first_2.compareTo_17(last_2) >= 0;
    var tmp_0 = this;
    var tmp_1;
    if (this._hasNext_3) {
      tmp_1 = first_2.toInt_6();
    } else {
      tmp_1 = this._finalElement_3;
    }
    tmp_0._next_3 = tmp_1;
  }
  CharProgressionIterator.prototype._get_step__11 = function () {
    return this._step_5;
  };
  CharProgressionIterator.prototype.hasNext_43 = function () {
    return this._hasNext_3;
  };
  CharProgressionIterator.prototype.nextChar_1 = function () {
    var value = this._next_3;
    if (value === this._finalElement_3) {
      if (!this._hasNext_3)
        throw NoSuchElementException_init_$Create$();
      this._hasNext_3 = false;
    } else {
      var tmp0_this = this;
      tmp0_this._next_3 = tmp0_this._next_3 + this._step_5 | 0;
    }
    return numberToChar(value);
  };
  CharProgressionIterator.$metadata$ = {
    simpleName: 'CharProgressionIterator',
    kind: 'class',
    interfaces: []
  };
  function Companion_14() {
    Companion_instance_13 = this;
  }
  Companion_14.prototype.fromClosedRange_1 = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  Companion_14.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_14();
    return Companion_instance_13;
  }
  function IntProgression(start, endInclusive, step) {
    Companion_getInstance_13();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE_5)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_2 = start;
    this._last_1 = getProgressionLastElement_1(start, endInclusive, step);
    this._step_6 = step;
  }
  IntProgression.prototype._get_first__9 = function () {
    return this._first_2;
  };
  IntProgression.prototype._get_last__10 = function () {
    return this._last_1;
  };
  IntProgression.prototype._get_step__11 = function () {
    return this._step_6;
  };
  IntProgression.prototype.iterator_51 = function () {
    return new IntProgressionIterator(this._first_2, this._last_1, this._step_6);
  };
  IntProgression.prototype.isEmpty_47 = function () {
    return this._step_6 > 0 ? this._first_2 > this._last_1 : this._first_2 < this._last_1;
  };
  IntProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : (this._first_2 === other._first_2 ? this._last_1 === other._last_1 : false) ? this._step_6 === other._step_6 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntProgression.prototype.hashCode = function () {
    return this.isEmpty_47() ? -1 : imul(31, imul(31, this._first_2) + this._last_1 | 0) + this._step_6 | 0;
  };
  IntProgression.prototype.toString = function () {
    return this._step_6 > 0 ? '' + this._first_2 + '..' + this._last_1 + ' step ' + this._step_6 : '' + this._first_2 + ' downTo ' + this._last_1 + ' step ' + (-this._step_6 | 0);
  };
  IntProgression.$metadata$ = {
    simpleName: 'IntProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function Companion_15() {
    Companion_instance_14 = this;
  }
  Companion_15.prototype.fromClosedRange_2 = function (rangeStart, rangeEnd, step) {
    return new LongProgression(rangeStart, rangeEnd, step);
  };
  Companion_15.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_15();
    return Companion_instance_14;
  }
  function LongProgression(start, endInclusive, step) {
    Companion_getInstance_14();
    if (step.equals(new Long(0, 0)))
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    Companion_getInstance_21();
    if (step.equals(new Long(0, -2147483648)))
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Long.MIN_VALUE to avoid overflow on negation.');
    else {
    }
    this._first_3 = start;
    this._last_2 = getProgressionLastElement_2(start, endInclusive, step);
    this._step_7 = step;
  }
  LongProgression.prototype._get_first__9 = function () {
    return this._first_3;
  };
  LongProgression.prototype._get_last__10 = function () {
    return this._last_2;
  };
  LongProgression.prototype._get_step__11 = function () {
    return this._step_7;
  };
  LongProgression.prototype.iterator_51 = function () {
    return new LongProgressionIterator(this._first_3, this._last_2, this._step_7);
  };
  LongProgression.prototype.isEmpty_47 = function () {
    return this._step_7.compareTo_56(new Long(0, 0)) > 0 ? this._first_3.compareTo_56(this._last_2) > 0 : this._first_3.compareTo_56(this._last_2) < 0;
  };
  LongProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof LongProgression) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : (this._first_3.equals(other._first_3) ? this._last_2.equals(other._last_2) : false) ? this._step_7.equals(other._step_7) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  LongProgression.prototype.hashCode = function () {
    return this.isEmpty_47() ? -1 : numberToLong(31).times_32(numberToLong(31).times_32(this._first_3.xor(this._first_3.ushr_0(32))).plus_38(this._last_2.xor(this._last_2.ushr_0(32)))).plus_38(this._step_7.xor(this._step_7.ushr_0(32))).toInt_6();
  };
  LongProgression.prototype.toString = function () {
    return this._step_7.compareTo_56(new Long(0, 0)) > 0 ? '' + this._first_3 + '..' + this._last_2 + ' step ' + this._step_7 : '' + this._first_3 + ' downTo ' + this._last_2 + ' step ' + this._step_7.unaryMinus_4();
  };
  LongProgression.$metadata$ = {
    simpleName: 'LongProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  function Companion_16() {
    Companion_instance_15 = this;
  }
  Companion_16.prototype.fromClosedRange_3 = function (rangeStart, rangeEnd, step) {
    return new CharProgression(rangeStart, rangeEnd, step);
  };
  Companion_16.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_16();
    return Companion_instance_15;
  }
  function CharProgression(start, endInclusive, step) {
    Companion_getInstance_15();
    if (step === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance()._MIN_VALUE_5)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._first_4 = start;
    var tmp = this;
    var tmp_0 = start.toInt_6();
    tmp._last_3 = numberToChar(getProgressionLastElement_1(tmp_0, endInclusive.toInt_6(), step));
    this._step_8 = step;
  }
  CharProgression.prototype._get_first__9 = function () {
    return this._first_4;
  };
  CharProgression.prototype._get_last__10 = function () {
    return this._last_3;
  };
  CharProgression.prototype._get_step__11 = function () {
    return this._step_8;
  };
  CharProgression.prototype.iterator_51 = function () {
    return new CharProgressionIterator(this._first_4, this._last_3, this._step_8);
  };
  CharProgression.prototype.isEmpty_47 = function () {
    return this._step_8 > 0 ? this._first_4.compareTo_17(this._last_3) > 0 : this._first_4.compareTo_17(this._last_3) < 0;
  };
  CharProgression.prototype.equals = function (other) {
    var tmp;
    if (other instanceof CharProgression) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : (this._first_4.equals(other._first_4) ? this._last_3.equals(other._last_3) : false) ? this._step_8 === other._step_8 : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  CharProgression.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_47()) {
      tmp = -1;
    } else {
      var tmp0__get_code__0 = this._first_4;
      var tmp_0 = imul(31, tmp0__get_code__0.toInt_6());
      var tmp1__get_code__0 = this._last_3;
      tmp = imul(31, tmp_0 + tmp1__get_code__0.toInt_6() | 0) + this._step_8 | 0;
    }
    return tmp;
  };
  CharProgression.prototype.toString = function () {
    return this._step_8 > 0 ? '' + this._first_4 + '..' + this._last_3 + ' step ' + this._step_8 : '' + this._first_4 + ' downTo ' + this._last_3 + ' step ' + (-this._step_8 | 0);
  };
  CharProgression.$metadata$ = {
    simpleName: 'CharProgression',
    kind: 'class',
    interfaces: [Iterable]
  };
  ClosedRange.prototype.contains_34 = function (value) {
    return compareTo_0(value, this._get_start__8()) >= 0 ? compareTo_0(value, this._get_endInclusive__8()) <= 0 : false;
  };
  ClosedRange.prototype.isEmpty_47 = function () {
    return compareTo_0(this._get_start__8(), this._get_endInclusive__8()) > 0;
  };
  function ClosedRange() {
  }
  ClosedRange.$metadata$ = {
    simpleName: 'ClosedRange',
    kind: 'interface',
    interfaces: []
  };
  function Companion_17() {
    Companion_instance_16 = this;
    this._EMPTY_1 = new IntRange(1, 0);
  }
  Companion_17.prototype._get_EMPTY__3 = function () {
    return this._EMPTY_1;
  };
  Companion_17.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_17();
    return Companion_instance_16;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_16();
    IntProgression.call(this, start, endInclusive, 1);
  }
  IntRange.prototype._get_start__8 = function () {
    return this._get_first__9();
  };
  IntRange.prototype._get_endInclusive__8 = function () {
    return this._get_last__10();
  };
  IntRange.prototype.contains_29 = function (value) {
    return this._get_first__9() <= value ? value <= this._get_last__10() : false;
  };
  IntRange.prototype.contains_34 = function (value) {
    return this.contains_29(typeof value === 'number' ? value : THROW_CCE());
  };
  IntRange.prototype.isEmpty_47 = function () {
    return this._get_first__9() > this._get_last__10();
  };
  IntRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : this._get_first__9() === other._get_first__9() ? this._get_last__10() === other._get_last__10() : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  IntRange.prototype.hashCode = function () {
    return this.isEmpty_47() ? -1 : imul(31, this._get_first__9()) + this._get_last__10() | 0;
  };
  IntRange.prototype.toString = function () {
    return '' + this._get_first__9() + '..' + this._get_last__10();
  };
  IntRange.$metadata$ = {
    simpleName: 'IntRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_18() {
    Companion_instance_17 = this;
    this._EMPTY_2 = new LongRange(new Long(1, 0), new Long(0, 0));
  }
  Companion_18.prototype._get_EMPTY__3 = function () {
    return this._EMPTY_2;
  };
  Companion_18.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_18();
    return Companion_instance_17;
  }
  function LongRange(start, endInclusive) {
    Companion_getInstance_17();
    LongProgression.call(this, start, endInclusive, new Long(1, 0));
  }
  LongRange.prototype._get_start__8 = function () {
    return this._get_first__9();
  };
  LongRange.prototype._get_endInclusive__8 = function () {
    return this._get_last__10();
  };
  LongRange.prototype.contains_31 = function (value) {
    return this._get_first__9().compareTo_56(value) <= 0 ? value.compareTo_56(this._get_last__10()) <= 0 : false;
  };
  LongRange.prototype.contains_34 = function (value) {
    return this.contains_31(value instanceof Long ? value : THROW_CCE());
  };
  LongRange.prototype.isEmpty_47 = function () {
    return this._get_first__9().compareTo_56(this._get_last__10()) > 0;
  };
  LongRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof LongRange) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : this._get_first__9().equals(other._get_first__9()) ? this._get_last__10().equals(other._get_last__10()) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  LongRange.prototype.hashCode = function () {
    return this.isEmpty_47() ? -1 : numberToLong(31).times_32(this._get_first__9().xor(this._get_first__9().ushr_0(32))).plus_38(this._get_last__10().xor(this._get_last__10().ushr_0(32))).toInt_6();
  };
  LongRange.prototype.toString = function () {
    return '' + this._get_first__9() + '..' + this._get_last__10();
  };
  LongRange.$metadata$ = {
    simpleName: 'LongRange',
    kind: 'class',
    interfaces: [ClosedRange]
  };
  function Companion_19() {
    Companion_instance_18 = this;
    this._EMPTY_3 = new CharRange(new Char_0(1), new Char_0(0));
  }
  Companion_19.prototype._get_EMPTY__3 = function () {
    return this._EMPTY_3;
  };
  Companion_19.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_19();
    return Companion_instance_18;
  }
  function CharRange(start, endInclusive) {
    Companion_getInstance_18();
    CharProgression.call(this, start, endInclusive, 1);
  }
  CharRange.prototype._get_start__8 = function () {
    return this._get_first__9();
  };
  CharRange.prototype._get_endInclusive__8 = function () {
    return this._get_last__10();
  };
  CharRange.prototype.contains_33 = function (value) {
    return this._get_first__9().compareTo_17(value) <= 0 ? value.compareTo_17(this._get_last__10()) <= 0 : false;
  };
  CharRange.prototype.contains_34 = function (value) {
    return this.contains_33(value instanceof Char_0 ? value : THROW_CCE());
  };
  CharRange.prototype.isEmpty_47 = function () {
    return this._get_first__9().compareTo_17(this._get_last__10()) > 0;
  };
  CharRange.prototype.equals = function (other) {
    var tmp;
    if (other instanceof CharRange) {
      tmp = (this.isEmpty_47() ? other.isEmpty_47() : false) ? true : this._get_first__9().equals(other._get_first__9()) ? this._get_last__10().equals(other._get_last__10()) : false;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  CharRange.prototype.hashCode = function () {
    var tmp;
    if (this.isEmpty_47()) {
      tmp = -1;
    } else {
      var tmp0__get_code__0 = this._get_first__9();
      var tmp_0 = imul(31, tmp0__get_code__0.toInt_6());
      var tmp1__get_code__0 = this._get_last__10();
      tmp = tmp_0 + tmp1__get_code__0.toInt_6() | 0;
    }
    return tmp;
  };
  CharRange.prototype.toString = function () {
    return '' + this._get_first__9() + '..' + this._get_last__10();
  };
  CharRange.$metadata$ = {
    simpleName: 'CharRange',
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
  function Target(allowedTargets) {
    this._allowedTargets = allowedTargets;
  }
  Target.prototype._get_allowedTargets_ = function () {
    return this._allowedTargets;
  };
  Target.$metadata$ = {
    simpleName: 'Target',
    kind: 'class',
    interfaces: [Annotation]
  };
  var AnnotationTarget_CLASS_instance;
  var AnnotationTarget_ANNOTATION_CLASS_instance;
  var AnnotationTarget_TYPE_PARAMETER_instance;
  var AnnotationTarget_PROPERTY_instance;
  var AnnotationTarget_FIELD_instance;
  var AnnotationTarget_LOCAL_VARIABLE_instance;
  var AnnotationTarget_VALUE_PARAMETER_instance;
  var AnnotationTarget_CONSTRUCTOR_instance;
  var AnnotationTarget_FUNCTION_instance;
  var AnnotationTarget_PROPERTY_GETTER_instance;
  var AnnotationTarget_PROPERTY_SETTER_instance;
  var AnnotationTarget_TYPE_instance;
  var AnnotationTarget_EXPRESSION_instance;
  var AnnotationTarget_FILE_instance;
  var AnnotationTarget_TYPEALIAS_instance;
  function values_6() {
    return [AnnotationTarget_CLASS_getInstance(), AnnotationTarget_ANNOTATION_CLASS_getInstance(), AnnotationTarget_TYPE_PARAMETER_getInstance(), AnnotationTarget_PROPERTY_getInstance(), AnnotationTarget_FIELD_getInstance(), AnnotationTarget_LOCAL_VARIABLE_getInstance(), AnnotationTarget_VALUE_PARAMETER_getInstance(), AnnotationTarget_CONSTRUCTOR_getInstance(), AnnotationTarget_FUNCTION_getInstance(), AnnotationTarget_PROPERTY_GETTER_getInstance(), AnnotationTarget_PROPERTY_SETTER_getInstance(), AnnotationTarget_TYPE_getInstance(), AnnotationTarget_EXPRESSION_getInstance(), AnnotationTarget_FILE_getInstance(), AnnotationTarget_TYPEALIAS_getInstance()];
  }
  function valueOf_6(value) {
    switch (value) {
      case 'CLASS':
        return AnnotationTarget_CLASS_getInstance();
      case 'ANNOTATION_CLASS':
        return AnnotationTarget_ANNOTATION_CLASS_getInstance();
      case 'TYPE_PARAMETER':
        return AnnotationTarget_TYPE_PARAMETER_getInstance();
      case 'PROPERTY':
        return AnnotationTarget_PROPERTY_getInstance();
      case 'FIELD':
        return AnnotationTarget_FIELD_getInstance();
      case 'LOCAL_VARIABLE':
        return AnnotationTarget_LOCAL_VARIABLE_getInstance();
      case 'VALUE_PARAMETER':
        return AnnotationTarget_VALUE_PARAMETER_getInstance();
      case 'CONSTRUCTOR':
        return AnnotationTarget_CONSTRUCTOR_getInstance();
      case 'FUNCTION':
        return AnnotationTarget_FUNCTION_getInstance();
      case 'PROPERTY_GETTER':
        return AnnotationTarget_PROPERTY_GETTER_getInstance();
      case 'PROPERTY_SETTER':
        return AnnotationTarget_PROPERTY_SETTER_getInstance();
      case 'TYPE':
        return AnnotationTarget_TYPE_getInstance();
      case 'EXPRESSION':
        return AnnotationTarget_EXPRESSION_getInstance();
      case 'FILE':
        return AnnotationTarget_FILE_getInstance();
      case 'TYPEALIAS':
        return AnnotationTarget_TYPEALIAS_getInstance();
      default:AnnotationTarget_initEntries();
        THROW_ISE();
        break;
    }
  }
  var AnnotationTarget_entriesInitialized;
  function AnnotationTarget_initEntries() {
    if (AnnotationTarget_entriesInitialized)
      return Unit_getInstance();
    AnnotationTarget_entriesInitialized = true;
    AnnotationTarget_CLASS_instance = new AnnotationTarget('CLASS', 0);
    AnnotationTarget_ANNOTATION_CLASS_instance = new AnnotationTarget('ANNOTATION_CLASS', 1);
    AnnotationTarget_TYPE_PARAMETER_instance = new AnnotationTarget('TYPE_PARAMETER', 2);
    AnnotationTarget_PROPERTY_instance = new AnnotationTarget('PROPERTY', 3);
    AnnotationTarget_FIELD_instance = new AnnotationTarget('FIELD', 4);
    AnnotationTarget_LOCAL_VARIABLE_instance = new AnnotationTarget('LOCAL_VARIABLE', 5);
    AnnotationTarget_VALUE_PARAMETER_instance = new AnnotationTarget('VALUE_PARAMETER', 6);
    AnnotationTarget_CONSTRUCTOR_instance = new AnnotationTarget('CONSTRUCTOR', 7);
    AnnotationTarget_FUNCTION_instance = new AnnotationTarget('FUNCTION', 8);
    AnnotationTarget_PROPERTY_GETTER_instance = new AnnotationTarget('PROPERTY_GETTER', 9);
    AnnotationTarget_PROPERTY_SETTER_instance = new AnnotationTarget('PROPERTY_SETTER', 10);
    AnnotationTarget_TYPE_instance = new AnnotationTarget('TYPE', 11);
    AnnotationTarget_EXPRESSION_instance = new AnnotationTarget('EXPRESSION', 12);
    AnnotationTarget_FILE_instance = new AnnotationTarget('FILE', 13);
    AnnotationTarget_TYPEALIAS_instance = new AnnotationTarget('TYPEALIAS', 14);
  }
  function AnnotationTarget(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  AnnotationTarget.$metadata$ = {
    simpleName: 'AnnotationTarget',
    kind: 'class',
    interfaces: []
  };
  function MustBeDocumented() {
  }
  MustBeDocumented.$metadata$ = {
    simpleName: 'MustBeDocumented',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Retention_init_$Init$(value, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      value = AnnotationRetention_RUNTIME_getInstance();
    Retention.call($this, value);
    return $this;
  }
  function Retention_init_$Create$(value, $mask0, $marker) {
    return Retention_init_$Init$(value, $mask0, $marker, Object.create(Retention.prototype));
  }
  function Retention(value) {
    this._value_0 = value;
  }
  Retention.prototype._get_value__3 = function () {
    return this._value_0;
  };
  Retention.$metadata$ = {
    simpleName: 'Retention',
    kind: 'class',
    interfaces: [Annotation]
  };
  var AnnotationRetention_SOURCE_instance;
  var AnnotationRetention_BINARY_instance;
  var AnnotationRetention_RUNTIME_instance;
  function values_7() {
    return [AnnotationRetention_SOURCE_getInstance(), AnnotationRetention_BINARY_getInstance(), AnnotationRetention_RUNTIME_getInstance()];
  }
  function valueOf_7(value) {
    switch (value) {
      case 'SOURCE':
        return AnnotationRetention_SOURCE_getInstance();
      case 'BINARY':
        return AnnotationRetention_BINARY_getInstance();
      case 'RUNTIME':
        return AnnotationRetention_RUNTIME_getInstance();
      default:AnnotationRetention_initEntries();
        THROW_ISE();
        break;
    }
  }
  var AnnotationRetention_entriesInitialized;
  function AnnotationRetention_initEntries() {
    if (AnnotationRetention_entriesInitialized)
      return Unit_getInstance();
    AnnotationRetention_entriesInitialized = true;
    AnnotationRetention_SOURCE_instance = new AnnotationRetention('SOURCE', 0);
    AnnotationRetention_BINARY_instance = new AnnotationRetention('BINARY', 1);
    AnnotationRetention_RUNTIME_instance = new AnnotationRetention('RUNTIME', 2);
  }
  function AnnotationRetention(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  AnnotationRetention.$metadata$ = {
    simpleName: 'AnnotationRetention',
    kind: 'class',
    interfaces: []
  };
  function Repeatable() {
  }
  Repeatable.$metadata$ = {
    simpleName: 'Repeatable',
    kind: 'class',
    interfaces: [Annotation]
  };
  function AnnotationTarget_CLASS_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_CLASS_instance;
  }
  function AnnotationTarget_ANNOTATION_CLASS_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_ANNOTATION_CLASS_instance;
  }
  function AnnotationTarget_TYPE_PARAMETER_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_TYPE_PARAMETER_instance;
  }
  function AnnotationTarget_PROPERTY_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_PROPERTY_instance;
  }
  function AnnotationTarget_FIELD_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_FIELD_instance;
  }
  function AnnotationTarget_LOCAL_VARIABLE_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_LOCAL_VARIABLE_instance;
  }
  function AnnotationTarget_VALUE_PARAMETER_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_VALUE_PARAMETER_instance;
  }
  function AnnotationTarget_CONSTRUCTOR_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_CONSTRUCTOR_instance;
  }
  function AnnotationTarget_FUNCTION_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_FUNCTION_instance;
  }
  function AnnotationTarget_PROPERTY_GETTER_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_PROPERTY_GETTER_instance;
  }
  function AnnotationTarget_PROPERTY_SETTER_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_PROPERTY_SETTER_instance;
  }
  function AnnotationTarget_TYPE_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_TYPE_instance;
  }
  function AnnotationTarget_EXPRESSION_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_EXPRESSION_instance;
  }
  function AnnotationTarget_FILE_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_FILE_instance;
  }
  function AnnotationTarget_TYPEALIAS_getInstance() {
    AnnotationTarget_initEntries();
    return AnnotationTarget_TYPEALIAS_instance;
  }
  function AnnotationRetention_SOURCE_getInstance() {
    AnnotationRetention_initEntries();
    return AnnotationRetention_SOURCE_instance;
  }
  function AnnotationRetention_BINARY_getInstance() {
    AnnotationRetention_initEntries();
    return AnnotationRetention_BINARY_instance;
  }
  function AnnotationRetention_RUNTIME_getInstance() {
    AnnotationRetention_initEntries();
    return AnnotationRetention_RUNTIME_instance;
  }
  function getProgressionLastElement_1(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo_1(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo_1(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function getProgressionLastElement_2(start, end, step) {
    var tmp;
    if (step.compareTo_56(new Long(0, 0)) > 0) {
      tmp = start.compareTo_56(end) >= 0 ? end : end.minus_34(differenceModulo_2(end, start, step));
    } else if (step.compareTo_56(new Long(0, 0)) < 0) {
      tmp = start.compareTo_56(end) <= 0 ? end : end.plus_38(differenceModulo_2(start, end, step.unaryMinus_4()));
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo_1(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function differenceModulo_2(a, b, c) {
    return mod_0(mod_0(a, c).minus_34(mod_0(b, c)), c);
  }
  function mod(a, b) {
    var mod_1 = a % b;
    return mod_1 >= 0 ? mod_1 : mod_1 + b | 0;
  }
  function mod_0(a, b) {
    var mod_1 = a.rem_32(b);
    return mod_1.compareTo_56(new Long(0, 0)) >= 0 ? mod_1 : mod_1.plus_38(b);
  }
  function ByteCompanionObject_0() {
    ByteCompanionObject_instance = this;
    this._MIN_VALUE_3 = -128;
    this._MAX_VALUE_3 = 127;
    this._SIZE_BYTES_3 = 1;
    this._SIZE_BITS_3 = 8;
  }
  ByteCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_3;
  };
  ByteCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_3;
  };
  ByteCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_3;
  };
  ByteCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_3;
  };
  ByteCompanionObject_0.$metadata$ = {
    simpleName: 'ByteCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(ByteCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(ByteCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(ByteCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(ByteCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: ByteCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var ByteCompanionObject_instance;
  function ByteCompanionObject_getInstance() {
    if (ByteCompanionObject_instance == null)
      new ByteCompanionObject_0();
    return ByteCompanionObject_instance;
  }
  function ShortCompanionObject_0() {
    ShortCompanionObject_instance = this;
    this._MIN_VALUE_4 = -32768;
    this._MAX_VALUE_4 = 32767;
    this._SIZE_BYTES_4 = 2;
    this._SIZE_BITS_4 = 16;
  }
  ShortCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_4;
  };
  ShortCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_4;
  };
  ShortCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_4;
  };
  ShortCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_4;
  };
  ShortCompanionObject_0.$metadata$ = {
    simpleName: 'ShortCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(ShortCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(ShortCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(ShortCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(ShortCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: ShortCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var ShortCompanionObject_instance;
  function ShortCompanionObject_getInstance() {
    if (ShortCompanionObject_instance == null)
      new ShortCompanionObject_0();
    return ShortCompanionObject_instance;
  }
  function IntCompanionObject_0() {
    IntCompanionObject_instance = this;
    this._MIN_VALUE_5 = -2147483648;
    this._MAX_VALUE_5 = 2147483647;
    this._SIZE_BYTES_5 = 4;
    this._SIZE_BITS_5 = 32;
  }
  IntCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_5;
  };
  IntCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_5;
  };
  IntCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_5;
  };
  IntCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_5;
  };
  IntCompanionObject_0.$metadata$ = {
    simpleName: 'IntCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(IntCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(IntCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: IntCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var IntCompanionObject_instance;
  function IntCompanionObject_getInstance() {
    if (IntCompanionObject_instance == null)
      new IntCompanionObject_0();
    return IntCompanionObject_instance;
  }
  function FloatCompanionObject_0() {
    FloatCompanionObject_instance = this;
    this._MIN_VALUE_6 = 1.4E-45;
    this._MAX_VALUE_6 = 3.4028235E38;
    this._POSITIVE_INFINITY = Infinity;
    this._NEGATIVE_INFINITY = -Infinity;
    this._NaN = NaN;
    this._SIZE_BYTES_6 = 4;
    this._SIZE_BITS_6 = 32;
  }
  FloatCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_6;
  };
  FloatCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_6;
  };
  FloatCompanionObject_0.prototype._get_POSITIVE_INFINITY__0 = function () {
    return this._POSITIVE_INFINITY;
  };
  FloatCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0 = function () {
    return this._NEGATIVE_INFINITY;
  };
  FloatCompanionObject_0.prototype._get_NaN__0 = function () {
    return this._NaN;
  };
  FloatCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_6;
  };
  FloatCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_6;
  };
  FloatCompanionObject_0.$metadata$ = {
    simpleName: 'FloatCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(FloatCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'POSITIVE_INFINITY', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_POSITIVE_INFINITY__0
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'NEGATIVE_INFINITY', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'NaN', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_NaN__0
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(FloatCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: FloatCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var FloatCompanionObject_instance;
  function FloatCompanionObject_getInstance() {
    if (FloatCompanionObject_instance == null)
      new FloatCompanionObject_0();
    return FloatCompanionObject_instance;
  }
  function DoubleCompanionObject_0() {
    DoubleCompanionObject_instance = this;
    this._MIN_VALUE_7 = 4.9E-324;
    this._MAX_VALUE_7 = 1.7976931348623157E308;
    this._POSITIVE_INFINITY_0 = Infinity;
    this._NEGATIVE_INFINITY_0 = -Infinity;
    this._NaN_0 = NaN;
    this._SIZE_BYTES_7 = 8;
    this._SIZE_BITS_7 = 64;
  }
  DoubleCompanionObject_0.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_7;
  };
  DoubleCompanionObject_0.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_7;
  };
  DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0 = function () {
    return this._POSITIVE_INFINITY_0;
  };
  DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0 = function () {
    return this._NEGATIVE_INFINITY_0;
  };
  DoubleCompanionObject_0.prototype._get_NaN__0 = function () {
    return this._NaN_0;
  };
  DoubleCompanionObject_0.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_7;
  };
  DoubleCompanionObject_0.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_7;
  };
  DoubleCompanionObject_0.$metadata$ = {
    simpleName: 'DoubleCompanionObject',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'MIN_VALUE', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MIN_VALUE__9
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'MAX_VALUE', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_MAX_VALUE__9
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'POSITIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_POSITIVE_INFINITY__0
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'NEGATIVE_INFINITY', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_NEGATIVE_INFINITY__0
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'NaN', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_NaN__0
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'SIZE_BYTES', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BYTES__9
  });
  Object.defineProperty(DoubleCompanionObject_0.prototype, 'SIZE_BITS', {
    configurable: true,
    get: DoubleCompanionObject_0.prototype._get_SIZE_BITS__9
  });
  var DoubleCompanionObject_instance;
  function DoubleCompanionObject_getInstance() {
    if (DoubleCompanionObject_instance == null)
      new DoubleCompanionObject_0();
    return DoubleCompanionObject_instance;
  }
  function StringCompanionObject() {
    StringCompanionObject_instance = this;
  }
  StringCompanionObject.$metadata$ = {
    simpleName: 'StringCompanionObject',
    kind: 'object',
    interfaces: []
  };
  var StringCompanionObject_instance;
  function StringCompanionObject_getInstance() {
    if (StringCompanionObject_instance == null)
      new StringCompanionObject();
    return StringCompanionObject_instance;
  }
  function BooleanCompanionObject() {
    BooleanCompanionObject_instance = this;
  }
  BooleanCompanionObject.$metadata$ = {
    simpleName: 'BooleanCompanionObject',
    kind: 'object',
    interfaces: []
  };
  var BooleanCompanionObject_instance;
  function BooleanCompanionObject_getInstance() {
    if (BooleanCompanionObject_instance == null)
      new BooleanCompanionObject();
    return BooleanCompanionObject_instance;
  }
  function Comparator() {
  }
  Comparator.$metadata$ = {
    simpleName: 'Comparator',
    kind: 'interface',
    interfaces: []
  };
  function JsName(name) {
    this._name_0 = name;
  }
  JsName.prototype._get_name__23 = function () {
    return this._name_0;
  };
  JsName.$metadata$ = {
    simpleName: 'JsName',
    kind: 'class',
    interfaces: [Annotation]
  };
  function JsExport() {
  }
  JsExport.$metadata$ = {
    simpleName: 'JsExport',
    kind: 'class',
    interfaces: [Annotation]
  };
  function JsModule(import_0) {
    this._import = import_0;
  }
  JsModule.prototype._get_import_ = function () {
    return this._import;
  };
  JsModule.$metadata$ = {
    simpleName: 'JsModule',
    kind: 'class',
    interfaces: [Annotation]
  };
  function Volatile() {
  }
  Volatile.$metadata$ = {
    simpleName: 'Volatile',
    kind: 'class',
    interfaces: [Annotation]
  };
  function toTypedArray(_this_) {
    return copyToArray_0(_this_);
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
    var iterator_1 = collection.iterator_51();
    while (iterator_1.hasNext_43()) {
      array.push(iterator_1.next_48());
    }
    return array;
  }
  function copyToArrayOfAny(_this_, isVarargs) {
    var tmp;
    if (isVarargs) {
      tmp = _this_;
    } else {
      tmp = _this_.slice();
    }
    return tmp;
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function arrayCopy_0(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkRangeIndexes(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().checkRangeIndexes(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (ArrayBuffer.isView(destination) && ArrayBuffer.isView(source)) {
      var subrange = source.subarray(startIndex, endIndex);
      destination.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function copyToArrayImpl_1(collection, array) {
    if (array.length < collection._get_size__36()) {
      var tmp0_unsafeCast_0 = copyToArrayImpl_0(collection);
      return tmp0_unsafeCast_0;
    }var iterator_1 = collection.iterator_51();
    var index = 0;
    while (iterator_1.hasNext_43()) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      var tmp1_unsafeCast_0 = iterator_1.next_48();
      array[tmp0] = tmp1_unsafeCast_0;
    }
    if (index < array.length) {
      var tmp = index;
      var tmp2_unsafeCast_0 = null;
      array[tmp] = tmp2_unsafeCast_0;
    }return array;
  }
  function _no_name_provided__9($elements) {
    this._$elements_0 = $elements;
  }
  _no_name_provided__9.prototype.invoke_15 = function (it_0) {
    return this._$elements_0.contains_54(it_0);
  };
  _no_name_provided__9.prototype.invoke_68 = function (p1) {
    return this.invoke_15((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10($elements) {
    this._$elements_1 = $elements;
  }
  _no_name_provided__10.prototype.invoke_15 = function (it_0) {
    return !this._$elements_1.contains_54(it_0);
  };
  _no_name_provided__10.prototype.invoke_68 = function (p1) {
    return this.invoke_15((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.remove_27 = function (element) {
    this.checkIsMutable_11();
    var iterator_1 = this.iterator_51();
    while (iterator_1.hasNext_43()) {
      if (equals(iterator_1.next_48(), element)) {
        iterator_1.remove_21();
        return true;
      }}
    return false;
  };
  AbstractMutableCollection.prototype.addAll_15 = function (elements) {
    this.checkIsMutable_11();
    var modified = false;
    var tmp0_iterator = elements.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var element = tmp0_iterator.next_48();
      if (this.add_22(element))
        modified = true;
    }
    return modified;
  };
  AbstractMutableCollection.prototype.removeAll_11 = function (elements) {
    this.checkIsMutable_11();
    var tmp = isInterface(this, MutableIterable) ? this : THROW_CCE();
    return removeAll_0(tmp, _no_name_provided_$factory_4(elements));
  };
  AbstractMutableCollection.prototype.retainAll_11 = function (elements) {
    this.checkIsMutable_11();
    var tmp = isInterface(this, MutableIterable) ? this : THROW_CCE();
    return removeAll_0(tmp, _no_name_provided_$factory_5(elements));
  };
  AbstractMutableCollection.prototype.clear_18 = function () {
    this.checkIsMutable_11();
    var iterator_1 = this.iterator_51();
    while (iterator_1.hasNext_43()) {
      iterator_1.next_48();
      Unit_getInstance();
      iterator_1.remove_21();
    }
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_11 = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function _no_name_provided_$factory_4($elements) {
    var i = new _no_name_provided__9($elements);
    return function (p1) {
      return i.invoke_15(p1);
    };
  }
  function _no_name_provided_$factory_5($elements) {
    var i = new _no_name_provided__10($elements);
    return function (p1) {
      return i.invoke_15(p1);
    };
  }
  function _get_list__0($this) {
    return $this._list_0;
  }
  function _get_fromIndex__0($this) {
    return $this._fromIndex_0;
  }
  function _set__size__0($this, _set___) {
    $this.__size_0 = _set___;
  }
  function _get__size__0($this) {
    return $this.__size_0;
  }
  function IteratorImpl_0($outer) {
    this._$this_1 = $outer;
    this._index_4 = 0;
    this._last_4 = -1;
  }
  IteratorImpl_0.prototype._set_index__11 = function (_set___) {
    this._index_4 = _set___;
  };
  IteratorImpl_0.prototype._get_index__11 = function () {
    return this._index_4;
  };
  IteratorImpl_0.prototype._set_last__0 = function (_set___) {
    this._last_4 = _set___;
  };
  IteratorImpl_0.prototype._get_last__10 = function () {
    return this._last_4;
  };
  IteratorImpl_0.prototype.hasNext_43 = function () {
    return this._index_4 < this._$this_1._get_size__36();
  };
  IteratorImpl_0.prototype.next_48 = function () {
    if (!this.hasNext_43())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index_4;
    tmp0_this._index_4 = tmp1 + 1 | 0;
    tmp._last_4 = tmp1;
    return this._$this_1.get_39(this._last_4);
  };
  IteratorImpl_0.prototype.remove_21 = function () {
    var tmp0_check_0 = !(this._last_4 === -1);
    if (!tmp0_check_0) {
      var message_1 = 'Call next() or previous() before removing element from the iterator.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_1));
    }this._$this_1.removeAt_2(this._last_4);
    Unit_getInstance();
    this._index_4 = this._last_4;
    this._last_4 = -1;
  };
  IteratorImpl_0.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ListIteratorImpl_0($outer, index) {
    this._$this_2 = $outer;
    IteratorImpl_0.call(this, $outer);
    Companion_getInstance().checkPositionIndex(index, this._$this_2._get_size__36());
    this._set_index__11(index);
  }
  ListIteratorImpl_0.prototype.hasPrevious_3 = function () {
    return this._get_index__11() > 0;
  };
  ListIteratorImpl_0.prototype.nextIndex_3 = function () {
    return this._get_index__11();
  };
  ListIteratorImpl_0.prototype.previous_3 = function () {
    if (!this.hasPrevious_3())
      throw NoSuchElementException_init_$Create$();
    var tmp0_this = this;
    tmp0_this._set_index__11(tmp0_this._get_index__11() - 1 | 0);
    this._set_last__0(tmp0_this._get_index__11());
    return this._$this_2.get_39(this._get_last__10());
  };
  ListIteratorImpl_0.prototype.previousIndex_3 = function () {
    return this._get_index__11() - 1 | 0;
  };
  ListIteratorImpl_0.prototype.add_1 = function (element) {
    this._$this_2.add_20(this._get_index__11(), element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_index__11();
    tmp0_this._set_index__11(tmp1 + 1 | 0);
    Unit_getInstance();
    this._set_last__0(-1);
  };
  ListIteratorImpl_0.prototype.add_2 = function (element) {
    return this.add_1((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ListIteratorImpl_0.prototype.set_0 = function (element) {
    var tmp0_check_0 = !(this._get_last__10() === -1);
    if (!tmp0_check_0) {
      var message_1 = 'Call next() or previous() before updating element value with the iterator.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_1));
    }this._$this_2.set_9(this._get_last__10(), element);
    Unit_getInstance();
  };
  ListIteratorImpl_0.prototype.set_1 = function (element) {
    return this.set_0((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  ListIteratorImpl_0.$metadata$ = {
    simpleName: 'ListIteratorImpl',
    kind: 'class',
    interfaces: [MutableListIterator]
  };
  function SubList_0(list, fromIndex, toIndex) {
    AbstractMutableList.call(this);
    this._list_0 = list;
    this._fromIndex_0 = fromIndex;
    this.__size_0 = 0;
    Companion_getInstance().checkRangeIndexes(this._fromIndex_0, toIndex, this._list_0._get_size__36());
    this.__size_0 = toIndex - this._fromIndex_0 | 0;
  }
  SubList_0.prototype.add_20 = function (index, element) {
    Companion_getInstance().checkPositionIndex(index, this.__size_0);
    this._list_0.add_20(this._fromIndex_0 + index | 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this.__size_0;
    tmp0_this.__size_0 = tmp1 + 1 | 0;
    Unit_getInstance();
  };
  SubList_0.prototype.get_39 = function (index) {
    Companion_getInstance().checkElementIndex(index, this.__size_0);
    return this._list_0.get_39(this._fromIndex_0 + index | 0);
  };
  SubList_0.prototype.removeAt_2 = function (index) {
    Companion_getInstance().checkElementIndex(index, this.__size_0);
    var result = this._list_0.removeAt_2(this._fromIndex_0 + index | 0);
    var tmp0_this = this;
    var tmp1 = tmp0_this.__size_0;
    tmp0_this.__size_0 = tmp1 - 1 | 0;
    Unit_getInstance();
    return result;
  };
  SubList_0.prototype.set_9 = function (index, element) {
    Companion_getInstance().checkElementIndex(index, this.__size_0);
    return this._list_0.set_9(this._fromIndex_0 + index | 0, element);
  };
  SubList_0.prototype._get_size__36 = function () {
    return this.__size_0;
  };
  SubList_0.prototype.checkIsMutable_11 = function () {
    return this._list_0.checkIsMutable_11();
  };
  SubList_0.$metadata$ = {
    simpleName: 'SubList',
    kind: 'class',
    interfaces: [RandomAccess]
  };
  function _no_name_provided__11($elements) {
    this._$elements_2 = $elements;
  }
  _no_name_provided__11.prototype.invoke_15 = function (it_0) {
    return this._$elements_2.contains_54(it_0);
  };
  _no_name_provided__11.prototype.invoke_68 = function (p1) {
    return this.invoke_15((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12($elements) {
    this._$elements_3 = $elements;
  }
  _no_name_provided__12.prototype.invoke_15 = function (it_0) {
    return !this._$elements_3.contains_54(it_0);
  };
  _no_name_provided__12.prototype.invoke_68 = function (p1) {
    return this.invoke_15((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__1 = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__1 = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_22 = function (element) {
    this.checkIsMutable_11();
    this.add_20(this._get_size__36(), element);
    return true;
  };
  AbstractMutableList.prototype.addAll_13 = function (index, elements) {
    this.checkIsMutable_11();
    var _index = index;
    var changed = false;
    var tmp0_iterator = elements.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var e = tmp0_iterator.next_48();
      var tmp1 = _index;
      _index = tmp1 + 1 | 0;
      this.add_20(tmp1, e);
      changed = true;
    }
    return changed;
  };
  AbstractMutableList.prototype.clear_18 = function () {
    this.checkIsMutable_11();
    this.removeRange_1(0, this._get_size__36());
  };
  AbstractMutableList.prototype.removeAll_11 = function (elements) {
    this.checkIsMutable_11();
    return removeAll(this, _no_name_provided_$factory_6(elements));
  };
  AbstractMutableList.prototype.retainAll_11 = function (elements) {
    this.checkIsMutable_11();
    return removeAll(this, _no_name_provided_$factory_7(elements));
  };
  AbstractMutableList.prototype.iterator_51 = function () {
    return new IteratorImpl_0(this);
  };
  AbstractMutableList.prototype.contains_54 = function (element) {
    return this.indexOf_9(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_9 = function (element) {
    var inductionVariable = 0;
    var last_2 = _get_lastIndex__4(this);
    if (inductionVariable <= last_2)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.get_39(index), element)) {
          return index;
        }}
       while (!(index === last_2));
    return -1;
  };
  AbstractMutableList.prototype.lastIndexOf_9 = function (element) {
    var inductionVariable = _get_lastIndex__4(this);
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (equals(this.get_39(index), element)) {
          return index;
        }}
       while (0 <= inductionVariable);
    return -1;
  };
  AbstractMutableList.prototype.listIterator_13 = function () {
    return this.listIterator_14(0);
  };
  AbstractMutableList.prototype.listIterator_14 = function (index) {
    return new ListIteratorImpl_0(this, index);
  };
  AbstractMutableList.prototype.subList_6 = function (fromIndex, toIndex) {
    return new SubList_0(this, fromIndex, toIndex);
  };
  AbstractMutableList.prototype.removeRange_1 = function (fromIndex, toIndex) {
    var iterator_1 = this.listIterator_14(fromIndex);
    var tmp0_repeat_0 = toIndex - fromIndex | 0;
    var inductionVariable = 0;
    if (inductionVariable < tmp0_repeat_0)
      do {
        var index_2 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        iterator_1.next_48();
        Unit_getInstance();
        iterator_1.remove_21();
      }
       while (inductionVariable < tmp0_repeat_0);
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
  function _no_name_provided_$factory_6($elements) {
    var i = new _no_name_provided__11($elements);
    return function (p1) {
      return i.invoke_15(p1);
    };
  }
  function _no_name_provided_$factory_7($elements) {
    var i = new _no_name_provided__12($elements);
    return function (p1) {
      return i.invoke_15(p1);
    };
  }
  function SimpleEntry_init_$Init$(entry, $this) {
    SimpleEntry.call($this, entry._get_key__4(), entry._get_value__3());
    return $this;
  }
  function SimpleEntry_init_$Create$(entry) {
    return SimpleEntry_init_$Init$(entry, Object.create(SimpleEntry.prototype));
  }
  function _set__value_($this, _set___) {
    $this.__value = _set___;
  }
  function _get__value_($this) {
    return $this.__value;
  }
  function _no_name_provided__13($entryIterator) {
    this._$entryIterator_1 = $entryIterator;
  }
  _no_name_provided__13.prototype.hasNext_43 = function () {
    return this._$entryIterator_1.hasNext_43();
  };
  _no_name_provided__13.prototype.next_48 = function () {
    return this._$entryIterator_1.next_48()._get_key__4();
  };
  _no_name_provided__13.prototype.remove_21 = function () {
    return this._$entryIterator_1.remove_21();
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function _no_name_provided__14($entryIterator) {
    this._$entryIterator_2 = $entryIterator;
  }
  _no_name_provided__14.prototype.hasNext_43 = function () {
    return this._$entryIterator_2.hasNext_43();
  };
  _no_name_provided__14.prototype.next_48 = function () {
    return this._$entryIterator_2.next_48()._get_value__3();
  };
  _no_name_provided__14.prototype.remove_21 = function () {
    return this._$entryIterator_2.remove_21();
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this._key = key;
    this.__value = value;
  }
  SimpleEntry.prototype._get_key__4 = function () {
    return this._key;
  };
  SimpleEntry.prototype._get_value__3 = function () {
    return this.__value;
  };
  SimpleEntry.prototype.setValue_1 = function (newValue) {
    var oldValue = this.__value;
    this.__value = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_54 = function (element) {
    return this.containsEntry_4(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function _set__keys__0($this, _set___) {
    $this.__keys_0 = _set___;
  }
  function _get__keys__0($this) {
    return $this.__keys_0;
  }
  function _set__values_($this, _set___) {
    $this.__values_0 = _set___;
  }
  function _get__values_($this) {
    return $this.__values_0;
  }
  function _no_name_provided__15(this$0) {
    this._this$0_3 = this$0;
    AbstractMutableSet.call(this);
  }
  _no_name_provided__15.prototype.add_8 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  _no_name_provided__15.prototype.add_22 = function (element) {
    return this.add_8((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__15.prototype.clear_18 = function () {
    this._this$0_3.clear_18();
  };
  _no_name_provided__15.prototype.contains_47 = function (element) {
    return this._this$0_3.containsKey_6(element);
  };
  _no_name_provided__15.prototype.contains_54 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_47((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__15.prototype.iterator_51 = function () {
    var entryIterator = this._this$0_3._get_entries__5().iterator_51();
    return new _no_name_provided__13(entryIterator);
  };
  _no_name_provided__15.prototype.remove_28 = function (element) {
    this.checkIsMutable_11();
    if (this._this$0_3.containsKey_6(element)) {
      this._this$0_3.remove_28(element);
      Unit_getInstance();
      return true;
    }return false;
  };
  _no_name_provided__15.prototype.remove_27 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.remove_28((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__15.prototype._get_size__36 = function () {
    return this._this$0_3._get_size__36();
  };
  _no_name_provided__15.prototype.checkIsMutable_11 = function () {
    return this._this$0_3.checkIsMutable_11();
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16(this$0) {
    this._this$0_4 = this$0;
    AbstractMutableCollection.call(this);
  }
  _no_name_provided__16.prototype.add_10 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on values');
  };
  _no_name_provided__16.prototype.add_22 = function (element) {
    return this.add_10((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__16.prototype.clear_18 = function () {
    return this._this$0_4.clear_18();
  };
  _no_name_provided__16.prototype.contains_41 = function (element) {
    return this._this$0_4.containsValue_6(element);
  };
  _no_name_provided__16.prototype.contains_54 = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_41((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__16.prototype.iterator_51 = function () {
    var entryIterator = this._this$0_4._get_entries__5().iterator_51();
    return new _no_name_provided__14(entryIterator);
  };
  _no_name_provided__16.prototype._get_size__36 = function () {
    return this._this$0_4._get_size__36();
  };
  _no_name_provided__16.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(!(other == null) ? isInterface(other, Collection) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals(this, other);
  };
  _no_name_provided__16.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode(this);
  };
  _no_name_provided__16.prototype.checkIsMutable_11 = function () {
    return this._this$0_4.checkIsMutable_11();
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype.clear_18 = function () {
    this._get_entries__5().clear_18();
  };
  AbstractMutableMap.prototype._get_keys__6 = function () {
    if (this.__keys_0 == null) {
      var tmp = this;
      tmp.__keys_0 = new _no_name_provided__15(this);
    }return ensureNotNull(this.__keys_0);
  };
  AbstractMutableMap.prototype.putAll_2 = function (from) {
    this.checkIsMutable_11();
    var tmp0_iterator = from._get_entries__5().iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var tmp1_loop_parameter = tmp0_iterator.next_48();
      var key = tmp1_loop_parameter._get_key__4();
      var value = tmp1_loop_parameter._get_value__3();
      this.put_4(key, value);
      Unit_getInstance();
    }
  };
  AbstractMutableMap.prototype._get_values__6 = function () {
    if (this.__values_0 == null) {
      var tmp = this;
      tmp.__values_0 = new _no_name_provided__16(this);
    }return ensureNotNull(this.__values_0);
  };
  AbstractMutableMap.prototype.remove_28 = function (key) {
    this.checkIsMutable_11();
    var iter = this._get_entries__5().iterator_51();
    while (iter.hasNext_43()) {
      var entry = iter.next_48();
      var k = entry._get_key__4();
      if (equals(key, k)) {
        var value = entry._get_value__3();
        iter.remove_21();
        return value;
      }}
    return null;
  };
  AbstractMutableMap.prototype.checkIsMutable_11 = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function _set_array_($this, _set___) {
    $this._array_3 = _set___;
  }
  function _get_array__3($this) {
    return $this._array_3;
  }
  function _set_isReadOnly_($this, _set___) {
    $this._isReadOnly = _set___;
  }
  function _get_isReadOnly_($this) {
    return $this._isReadOnly;
  }
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
  function ArrayList_init_$Init$_1(initialCapacity, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      initialCapacity = 0;
    ArrayList_init_$Init$_0(initialCapacity, $this);
    return $this;
  }
  function ArrayList_init_$Create$_1(initialCapacity, $mask0, $marker) {
    return ArrayList_init_$Init$_1(initialCapacity, $mask0, $marker, Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_2(elements, $this) {
    ArrayList.call($this, copyToArray_0(elements));
    return $this;
  }
  function ArrayList_init_$Create$_2(elements) {
    return ArrayList_init_$Init$_2(elements, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    Companion_getInstance().checkElementIndex(index, $this._get_size__36());
    return index;
  }
  function insertionRangeCheck($this, index) {
    Companion_getInstance().checkPositionIndex(index, $this._get_size__36());
    return index;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array_3 = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype.build_0 = function () {
    this.checkIsMutable_11();
    this._isReadOnly = true;
    return this;
  };
  ArrayList.prototype.trimToSize_0 = function () {
  };
  ArrayList.prototype.ensureCapacity_0 = function (minCapacity) {
  };
  ArrayList.prototype._get_size__36 = function () {
    return this._array_3.length;
  };
  ArrayList.prototype.get_39 = function (index) {
    var tmp = this._array_3[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.set_9 = function (index, element) {
    this.checkIsMutable_11();
    rangeCheck(this, index);
    Unit_getInstance();
    var tmp0_apply_0 = this._array_3[index];
    this._array_3[index] = element;
    var tmp = tmp0_apply_0;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_22 = function (element) {
    this.checkIsMutable_11();
    var tmp0_asDynamic_0 = this._array_3;
    tmp0_asDynamic_0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_20 = function (index, element) {
    this.checkIsMutable_11();
    var tmp0_asDynamic_0 = this._array_3;
    tmp0_asDynamic_0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.addAll_15 = function (elements) {
    this.checkIsMutable_11();
    if (elements.isEmpty_47())
      return false;
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp0_plus_0 = tmp0_this._array_3;
    var tmp1_plus_0 = copyToArray_0(elements);
    tmp._array_3 = tmp0_plus_0.concat(tmp1_plus_0);
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__1();
    tmp1_this._set_modCount__1(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.addAll_13 = function (index, elements) {
    this.checkIsMutable_11();
    insertionRangeCheck(this, index);
    Unit_getInstance();
    if (index === this._get_size__36())
      return this.addAll_15(elements);
    if (elements.isEmpty_47())
      return false;
    var tmp0_subject = index;
    if (tmp0_subject === this._get_size__36())
      return this.addAll_15(elements);
    else if (tmp0_subject === 0) {
      var tmp = this;
      var tmp0_plus_0 = copyToArray_0(elements);
      var tmp1_plus_0 = this._array_3;
      tmp._array_3 = tmp0_plus_0.concat(tmp1_plus_0);
    } else {
      var tmp_0 = this;
      var tmp2_asDynamic_0 = copyOfRange(this._array_3, 0, index);
      tmp_0._array_3 = tmp2_asDynamic_0.concat(copyToArray_0(elements), copyOfRange(this._array_3, index, this._get_size__36()));
    }
    var tmp1_this = this;
    var tmp2 = tmp1_this._get_modCount__1();
    tmp1_this._set_modCount__1(tmp2 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.removeAt_2 = function (index) {
    this.checkIsMutable_11();
    rangeCheck(this, index);
    Unit_getInstance();
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
    var tmp;
    if (index === _get_lastIndex__4(this)) {
      var tmp0_asDynamic_0 = this._array_3;
      tmp = tmp0_asDynamic_0.pop();
    } else {
      var tmp1_asDynamic_0 = this._array_3;
      tmp = tmp1_asDynamic_0.splice(index, 1)[0];
    }
    return tmp;
  };
  ArrayList.prototype.remove_27 = function (element) {
    this.checkIsMutable_11();
    var inductionVariable = 0;
    var last_2 = this._array_3.length - 1 | 0;
    if (inductionVariable <= last_2)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this._array_3[index], element)) {
          var tmp0_asDynamic_0 = this._array_3;
          tmp0_asDynamic_0.splice(index, 1);
          var tmp1_this = this;
          var tmp2 = tmp1_this._get_modCount__1();
          tmp1_this._set_modCount__1(tmp2 + 1 | 0);
          Unit_getInstance();
          return true;
        }}
       while (inductionVariable <= last_2);
    return false;
  };
  ArrayList.prototype.removeRange_1 = function (fromIndex, toIndex) {
    this.checkIsMutable_11();
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
    var tmp0_asDynamic_0 = this._array_3;
    tmp0_asDynamic_0.splice(fromIndex, toIndex - fromIndex | 0);
  };
  ArrayList.prototype.clear_18 = function () {
    this.checkIsMutable_11();
    var tmp = this;
    tmp._array_3 = [];
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__1();
    tmp0_this._set_modCount__1(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.indexOf_9 = function (element) {
    return indexOf(this._array_3, element);
  };
  ArrayList.prototype.lastIndexOf_9 = function (element) {
    return lastIndexOf(this._array_3, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array_3);
  };
  ArrayList.prototype.toArray_17 = function (array) {
    if (array.length < this._get_size__36()) {
      var tmp = this.toArray_15();
      return isArray(tmp) ? tmp : THROW_CCE();
    }var tmp_0 = this._array_3;
    var tmp0_copyInto_0 = isArray(tmp_0) ? tmp_0 : THROW_CCE();
    var tmp1_copyInto_0 = 0;
    var tmp2_copyInto_0 = 0;
    var tmp3_copyInto_0 = tmp0_copyInto_0.length;
    arrayCopy_0(tmp0_copyInto_0, array, tmp1_copyInto_0, tmp2_copyInto_0, tmp3_copyInto_0);
    Unit_getInstance();
    if (array.length > this._get_size__36()) {
      var tmp_1 = this._get_size__36();
      array[tmp_1] = (null == null ? true : isObject(null)) ? null : THROW_CCE();
    }return array;
  };
  ArrayList.prototype.toArray_15 = function () {
    return [].slice.call(this._array_3);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_15();
  };
  ArrayList.prototype.checkIsMutable_11 = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function _set__stableSortingIsSupported_(_set___) {
    _stableSortingIsSupported = _set___;
  }
  function _get__stableSortingIsSupported_() {
    return _stableSortingIsSupported;
  }
  var _stableSortingIsSupported;
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_1 = function (value1, value2) {
    return equals(value1, value2);
  };
  HashCode.prototype.getHashCode_0 = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_3 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_17 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_22 = function (element) {
    return this.add_17((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.clear_18 = function () {
    this._$this_3.clear_18();
  };
  EntrySet.prototype.containsEntry_4 = function (element) {
    return this._$this_3.containsEntry_5(element);
  };
  EntrySet.prototype.iterator_51 = function () {
    return this._$this_3._internalMap.iterator_51();
  };
  EntrySet.prototype.remove_22 = function (element) {
    if (this.contains_54(element)) {
      this._$this_3.remove_28(element._get_key__4());
      Unit_getInstance();
      return true;
    }return false;
  };
  EntrySet.prototype.remove_27 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    else {
    }
    return this.remove_22((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype._get_size__36 = function () {
    return this._$this_3._get_size__36();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function _get_internalMap_($this) {
    return $this._internalMap;
  }
  function _get_equality_($this) {
    return $this._equality;
  }
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0();
    return $this;
  }
  function HashMap_init_$Create$(internalMap) {
    return HashMap_init_$Init$(internalMap, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$_0() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    var tmp0_require_0 = initialCapacity >= 0;
    if (!tmp0_require_0) {
      var message_1 = '' + 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1));
    }var tmp1_require_0 = loadFactor >= 0;
    if (!tmp1_require_0) {
      var message_1_0 = '' + 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_1_0));
    }return $this;
  }
  function HashMap_init_$Create$_1(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      loadFactor = 0.0;
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    return $this;
  }
  function HashMap_init_$Create$_2(initialCapacity, loadFactor, $mask0, $marker) {
    return HashMap_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_3(initialCapacity, $this) {
    HashMap_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashMap_init_$Create$_3(initialCapacity) {
    return HashMap_init_$Init$_3(initialCapacity, Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_4(original, $this) {
    HashMap_init_$Init$_0($this);
    $this.putAll_2(original);
    return $this;
  }
  function HashMap_init_$Create$_4(original) {
    return HashMap_init_$Init$_4(original, Object.create(HashMap.prototype));
  }
  function _set__entries_($this, _set___) {
    $this.__entries = _set___;
  }
  function _get__entries_($this) {
    return $this.__entries;
  }
  HashMap.prototype.clear_18 = function () {
    this._internalMap.clear_18();
  };
  HashMap.prototype.containsKey_6 = function (key) {
    return this._internalMap.contains_47(key);
  };
  HashMap.prototype.containsValue_6 = function (value) {
    var tmp$ret$0;
    l$ret$1: do {
      var tmp0_any_0 = this._internalMap;
      var tmp;
      if (isInterface(tmp0_any_0, Collection)) {
        tmp = tmp0_any_0.isEmpty_47();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break l$ret$1;
      } else {
      }
      var tmp0_iterator_1 = tmp0_any_0.iterator_51();
      while (tmp0_iterator_1.hasNext_43()) {
        var element_2 = tmp0_iterator_1.next_48();
        if (this._equality.equals_1(element_2._get_value__3(), value)) {
          tmp$ret$0 = true;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = false;
    }
     while (false);
    return tmp$ret$0;
  };
  HashMap.prototype._get_entries__5 = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet_0 = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_29 = function (key) {
    return this._internalMap.get_29(key);
  };
  HashMap.prototype.put_4 = function (key, value) {
    return this._internalMap.put_4(key, value);
  };
  HashMap.prototype.remove_28 = function (key) {
    return this._internalMap.remove_28(key);
  };
  HashMap.prototype._get_size__36 = function () {
    return this._internalMap._get_size__36();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp0_unsafeCast_0 = $this._chainOrEntry;
      var chainSize = tmp0_unsafeCast_0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_5._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function _set_backingMap_($this, _set___) {
    $this._backingMap = _set___;
  }
  function _get_backingMap_($this) {
    return $this._backingMap;
  }
  function _set_size_($this, _set___) {
    $this._size = _set___;
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_0(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_1(entry._get_key__4(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$0;
    l$ret$1: do {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last_2 = indexedObject.length;
      while (inductionVariable < last_2) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if ($this._equality_0.equals_1(element_2._get_key__4(), key)) {
          tmp$ret$0 = element_2;
          break l$ret$1;
        } else {
        }
      }
      tmp$ret$0 = null;
    }
     while (false);
    return tmp$ret$0;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__17(this$0) {
    this._this$0_5 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_5._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__17.prototype._set_state__0 = function (_set___) {
    this._state = _set___;
  };
  _no_name_provided__17.prototype._get_state__0 = function () {
    return this._state;
  };
  _no_name_provided__17.prototype._get_keys__6 = function () {
    return this._keys;
  };
  _no_name_provided__17.prototype._set_keyIndex_ = function (_set___) {
    this._keyIndex = _set___;
  };
  _no_name_provided__17.prototype._get_keyIndex_ = function () {
    return this._keyIndex;
  };
  _no_name_provided__17.prototype._set_chainOrEntry_ = function (_set___) {
    this._chainOrEntry = _set___;
  };
  _no_name_provided__17.prototype._get_chainOrEntry_ = function () {
    return this._chainOrEntry;
  };
  _no_name_provided__17.prototype._set_isChain_ = function (_set___) {
    this._isChain = _set___;
  };
  _no_name_provided__17.prototype._get_isChain_ = function () {
    return this._isChain;
  };
  _no_name_provided__17.prototype._set_itemIndex_ = function (_set___) {
    this._itemIndex = _set___;
  };
  _no_name_provided__17.prototype._get_itemIndex_ = function () {
    return this._itemIndex;
  };
  _no_name_provided__17.prototype._set_lastEntry_ = function (_set___) {
    this._lastEntry = _set___;
  };
  _no_name_provided__17.prototype._get_lastEntry_ = function () {
    return this._lastEntry;
  };
  _no_name_provided__17.prototype.hasNext_43 = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__17.prototype.next_48 = function () {
    if (!this.hasNext_43())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp0_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp0_unsafeCast_0[this._itemIndex];
    } else {
      var tmp1_unsafeCast_0 = this._chainOrEntry;
      tmp = tmp1_unsafeCast_0;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__17.prototype.remove_21 = function () {
    var tmp0_checkNotNull_0 = this._lastEntry;
    var tmp$ret$0;
    l$ret$1: do {
      if (tmp0_checkNotNull_0 == null) {
        var message_2_1 = 'Required value was null.';
        throw IllegalStateException_init_$Create$_0(toString_1(message_2_1));
      } else {
        tmp$ret$0 = tmp0_checkNotNull_0;
        break l$ret$1;
      }
    }
     while (false);
    Unit_getInstance();
    this._this$0_5.remove_28(ensureNotNull(this._lastEntry)._get_key__4());
    Unit_getInstance();
    this._lastEntry = null;
    var tmp0_this = this;
    var tmp1 = tmp0_this._itemIndex;
    tmp0_this._itemIndex = tmp1 - 1 | 0;
    Unit_getInstance();
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0 = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__36 = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.put_4 = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_0(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this._equality_0.equals_1(entry._get_key__4(), key)) {
          return entry.setValue_1(value);
        } else {
          var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
          this._backingMap[hashCode_1] = tmp0_arrayOf_0;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size;
          tmp0_this._size = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_1(value);
          }chain.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size;
    tmp2_this._size = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.remove_28 = function (key) {
    var hashCode_1 = this._equality_0.getHashCode_0(key);
    var tmp0_elvis_lhs = getChainOrEntryOrNull(this, hashCode_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if (this._equality_0.equals_1(entry._get_key__4(), key)) {
        jsDeleteProperty(this._backingMap, hashCode_1);
        var tmp1_this = this;
        var tmp2 = tmp1_this._size;
        tmp1_this._size = tmp2 - 1 | 0;
        Unit_getInstance();
        return entry._get_value__3();
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        var inductionVariable = 0;
        var last_2 = chain.length - 1 | 0;
        if (inductionVariable <= last_2)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var entry_0 = chain[index];
            if (this._equality_0.equals_1(key, entry_0._get_key__4())) {
              if (chain.length === 1) {
                chain.length = 0;
                jsDeleteProperty(this._backingMap, hashCode_1);
              } else {
                chain.splice(index, 1);
              }
              var tmp4_this = this;
              var tmp5 = tmp4_this._size;
              tmp4_this._size = tmp5 - 1 | 0;
              Unit_getInstance();
              return entry_0._get_value__3();
            }}
           while (inductionVariable <= last_2);
      }
    }
    return null;
  };
  InternalHashCodeMap.prototype.clear_18 = function () {
    this._backingMap = this.createJsMap_0();
    this._size = 0;
  };
  InternalHashCodeMap.prototype.contains_47 = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_29 = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__3();
  };
  InternalHashCodeMap.prototype.iterator_51 = function () {
    return new _no_name_provided__17(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  InternalMap.prototype.createJsMap_0 = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  function InternalMap() {
  }
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function _set_last_($this, _set___) {
    $this._last_5 = _set___;
  }
  function _get_last_($this) {
    return $this._last_5;
  }
  function _set_next__4($this, _set___) {
    $this._next_4 = _set___;
  }
  function _get_next__4($this) {
    return $this._next_4;
  }
  function EntryIterator($outer) {
    this._$this_4 = $outer;
    this._last_5 = null;
    this._next_4 = null;
    this._next_4 = this._$this_4._$this_6._head;
  }
  EntryIterator.prototype.hasNext_43 = function () {
    return !(this._next_4 === null);
  };
  EntryIterator.prototype.next_48 = function () {
    if (!this.hasNext_43())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this._next_4);
    this._last_5 = current;
    var tmp = this;
    var tmp0_takeIf_0 = current._next_5;
    var tmp_0;
    if (!(tmp0_takeIf_0 === this._$this_4._$this_6._head)) {
      tmp_0 = tmp0_takeIf_0;
    } else {
      {
        tmp_0 = null;
      }
    }
    tmp._next_4 = tmp_0;
    return current;
  };
  EntryIterator.prototype.remove_21 = function () {
    var tmp0_check_0 = !(this._last_5 == null);
    if (!tmp0_check_0) {
      var message_2_1 = 'Check failed.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_2_1));
    }this._$this_4.checkIsMutable_11();
    remove(ensureNotNull(this._last_5), this._$this_4._$this_6);
    this._$this_4._$this_6._map.remove_28(ensureNotNull(this._last_5)._get_key__4());
    Unit_getInstance();
    this._last_5 = null;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this._$this_5 = $outer;
    SimpleEntry.call(this, key, value);
    this._next_5 = null;
    this._prev = null;
  }
  ChainEntry.prototype._set_next_ = function (_set___) {
    this._next_5 = _set___;
  };
  ChainEntry.prototype._get_next_ = function () {
    return this._next_5;
  };
  ChainEntry.prototype._set_prev_ = function (_set___) {
    this._prev = _set___;
  };
  ChainEntry.prototype._get_prev_ = function () {
    return this._prev;
  };
  ChainEntry.prototype.setValue_1 = function (newValue) {
    this._$this_5.checkIsMutable_11();
    return SimpleEntry.prototype.setValue_1.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this._$this_6 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_17 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_22 = function (element) {
    return this.add_17((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.clear_18 = function () {
    this._$this_6.clear_18();
  };
  EntrySet_0.prototype.containsEntry_4 = function (element) {
    return this._$this_6.containsEntry_5(element);
  };
  EntrySet_0.prototype.iterator_51 = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype.remove_22 = function (element) {
    this.checkIsMutable_11();
    if (this.contains_54(element)) {
      this._$this_6.remove_28(element._get_key__4());
      Unit_getInstance();
      return true;
    }return false;
  };
  EntrySet_0.prototype.remove_27 = function (element) {
    if (!(!(element == null) ? isInterface(element, MutableEntry) : false))
      return false;
    else {
    }
    return this.remove_22((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype._get_size__36 = function () {
    return this._$this_6._get_size__36();
  };
  EntrySet_0.prototype.checkIsMutable_11 = function () {
    return this._$this_6.checkIsMutable_11();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function _set_head_($this, _set___) {
    $this._head = _set___;
  }
  function _get_head_($this) {
    return $this._head;
  }
  function addToEnd(_this_, $this) {
    var tmp0_check_0 = _this_._next_5 == null ? _this_._prev == null : false;
    if (!tmp0_check_0) {
      var message_2_1 = 'Check failed.';
      throw IllegalStateException_init_$Create$_0(toString_1(message_2_1));
    }var _head = $this._head;
    if (_head == null) {
      $this._head = _this_;
      _this_._next_5 = _this_;
      _this_._prev = _this_;
    } else {
      var tmp1_checkNotNull_0 = _head._prev;
      var tmp$ret$0;
      l$ret$1: do {
        if (tmp1_checkNotNull_0 == null) {
          var message_2_1_0 = 'Required value was null.';
          throw IllegalStateException_init_$Create$_0(toString_1(message_2_1_0));
        } else {
          tmp$ret$0 = tmp1_checkNotNull_0;
          break l$ret$1;
        }
      }
       while (false);
      var _tail = tmp$ret$0;
      _this_._prev = _tail;
      _this_._next_5 = _head;
      _head._prev = _this_;
      _tail._next_5 = _this_;
    }
  }
  function remove(_this_, $this) {
    if (_this_._next_5 === _this_) {
      $this._head = null;
    } else {
      if ($this._head === _this_) {
        $this._head = _this_._next_5;
      }ensureNotNull(_this_._next_5)._prev = _this_._prev;
      ensureNotNull(_this_._prev)._next_5 = _this_._next_5;
    }
    _this_._next_5 = null;
    _this_._prev = null;
  }
  function _get_map_($this) {
    return $this._map;
  }
  function _set_isReadOnly__0($this, _set___) {
    $this._isReadOnly_0 = _set___;
  }
  function _get_isReadOnly__0($this) {
    return $this._isReadOnly_0;
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map = HashMap_init_$Create$_0();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_0(backingMap, $this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    var tmp = $this;
    tmp._map = backingMap instanceof HashMap ? backingMap : THROW_CCE();
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(backingMap) {
    return LinkedHashMap_init_$Init$_0(backingMap, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    $this._map = HashMap_init_$Create$_0();
    return $this;
  }
  function LinkedHashMap_init_$Create$_1(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      loadFactor = 0.0;
    LinkedHashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_2(initialCapacity, loadFactor, $mask0, $marker) {
    return LinkedHashMap_init_$Init$_2(initialCapacity, loadFactor, $mask0, $marker, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_3(initialCapacity, $this) {
    LinkedHashMap_init_$Init$_1(initialCapacity, 0.0, $this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_3(initialCapacity) {
    return LinkedHashMap_init_$Init$_3(initialCapacity, Object.create(LinkedHashMap.prototype));
  }
  function LinkedHashMap_init_$Init$_4(original, $this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map = HashMap_init_$Create$_0();
    $this.putAll_2(original);
    return $this;
  }
  function LinkedHashMap_init_$Create$_4(original) {
    return LinkedHashMap_init_$Init$_4(original, Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.build_0 = function () {
    this.checkIsMutable_11();
    this._isReadOnly_0 = true;
    return this;
  };
  LinkedHashMap.prototype.clear_18 = function () {
    this.checkIsMutable_11();
    this._map.clear_18();
    this._head = null;
  };
  LinkedHashMap.prototype.containsKey_6 = function (key) {
    return this._map.containsKey_6(key);
  };
  LinkedHashMap.prototype.containsValue_6 = function (value) {
    var tmp0_elvis_lhs = this._head;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var node = tmp;
    do {
      if (equals(node._get_value__3(), value)) {
        return true;
      }node = ensureNotNull(node._next_5);
    }
     while (!(node === this._head));
    return false;
  };
  LinkedHashMap.prototype.createEntrySet_0 = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_29 = function (key) {
    var tmp0_safe_receiver = this._map.get_29(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__3();
  };
  LinkedHashMap.prototype.put_4 = function (key, value) {
    this.checkIsMutable_11();
    var old = this._map.get_29(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this._map.put_4(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_1(value);
    }
  };
  LinkedHashMap.prototype.remove_28 = function (key) {
    this.checkIsMutable_11();
    var entry = this._map.remove_28(key);
    if (!(entry == null)) {
      remove(entry, this);
      return entry._get_value__3();
    }return null;
  };
  LinkedHashMap.prototype._get_size__36 = function () {
    return this._map._get_size__36();
  };
  LinkedHashMap.prototype.checkIsMutable_11 = function () {
    if (this._isReadOnly_0)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this._head = null;
    this._isReadOnly_0 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  function _set_output_(_set___) {
    output = _set___;
  }
  function _get_output_() {
    return output;
  }
  var output;
  function BaseOutput() {
  }
  BaseOutput.prototype.println_5 = function () {
    this.print_2('\n');
  };
  BaseOutput.prototype.println_6 = function (message) {
    this.print_2(message);
    this.println_5();
  };
  BaseOutput.prototype.flush_2 = function () {
  };
  BaseOutput.$metadata$ = {
    simpleName: 'BaseOutput',
    kind: 'class',
    interfaces: []
  };
  function NodeJsOutput_0(outputStream) {
    BaseOutput.call(this);
    this._outputStream = outputStream;
  }
  NodeJsOutput_0.prototype._get_outputStream_ = function () {
    return this._outputStream;
  };
  NodeJsOutput_0.prototype.print_2 = function (message) {
    var messageString = String(message);
    this._outputStream.write(messageString);
  };
  NodeJsOutput_0.$metadata$ = {
    simpleName: 'NodeJsOutput',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutputToConsoleLog_0() {
    BufferedOutput_0.call(this);
  }
  BufferedOutputToConsoleLog_0.prototype.print_2 = function (message) {
    var s = String(message);
    var tmp0_nativeLastIndexOf_0 = s;
    var tmp1_nativeLastIndexOf_0 = '\n';
    var tmp2_nativeLastIndexOf_0 = 0;
    var i = tmp0_nativeLastIndexOf_0.lastIndexOf(tmp1_nativeLastIndexOf_0, tmp2_nativeLastIndexOf_0);
    if (i >= 0) {
      var tmp0_this = this;
      var tmp = tmp0_this._get_buffer__0();
      var tmp3_substring_0 = s;
      var tmp4_substring_0 = 0;
      tmp0_this._set_buffer__0(tmp + tmp3_substring_0.substring(tmp4_substring_0, i));
      this.flush_2();
      var tmp5_substring_0 = s;
      var tmp6_substring_0 = i + 1 | 0;
      s = tmp5_substring_0.substring(tmp6_substring_0);
    }var tmp1_this = this;
    tmp1_this._set_buffer__0(tmp1_this._get_buffer__0() + s);
  };
  BufferedOutputToConsoleLog_0.prototype.flush_2 = function () {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].concat([this._get_buffer__0()]));
    }.call(this));
    this._set_buffer__0('');
  };
  BufferedOutputToConsoleLog_0.$metadata$ = {
    simpleName: 'BufferedOutputToConsoleLog',
    kind: 'class',
    interfaces: []
  };
  function String_0(value) {
    return String(value);
  }
  function BufferedOutput_0() {
    BaseOutput.call(this);
    this._buffer = '';
  }
  BufferedOutput_0.prototype._set_buffer__0 = function (_set___) {
    this._buffer = _set___;
  };
  BufferedOutput_0.prototype._get_buffer__0 = function () {
    return this._buffer;
  };
  BufferedOutput_0.prototype.print_2 = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._buffer;
    tmp._buffer = tmp_0 + String(message);
  };
  BufferedOutput_0.prototype.flush_2 = function () {
    this._buffer = '';
  };
  BufferedOutput_0.$metadata$ = {
    simpleName: 'BufferedOutput',
    kind: 'class',
    interfaces: []
  };
  function output$init$() {
    var isNode_2 = typeof process !== 'undefined' && process.versions && !!process.versions.node;
    return isNode_2 ? new NodeJsOutput_0(process.stdout) : new BufferedOutputToConsoleLog_0();
  }
  function _get_EmptyContinuation_() {
    return EmptyContinuation;
  }
  var EmptyContinuation;
  function _no_name_provided__1_0($tmp0_Continuation_0) {
    this._$tmp0_Continuation_0 = $tmp0_Continuation_0;
  }
  _no_name_provided__1_0.prototype._get_context__2 = function () {
    return this._$tmp0_Continuation_0;
  };
  _no_name_provided__1_0.prototype._get_context__4 = function () {
    return this._get_context__2();
  };
  _no_name_provided__1_0.prototype.resumeWith_3 = function (result) {
    throwOnFailure(result);
    var tmp = _Result___get_value__impl_(result);
    if (tmp == null ? true : isObject(tmp))
      tmp;
    else
      THROW_CCE();
    return Unit_getInstance();
  };
  _no_name_provided__1_0.prototype.resumeWith_6 = function (result) {
    return this.resumeWith_3(result);
  };
  _no_name_provided__1_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: [Continuation]
  };
  function EmptyContinuation$init$() {
    var tmp0_Continuation_0 = EmptyCoroutineContext_getInstance();
    return new _no_name_provided__1_0(tmp0_Continuation_0);
  }
  function asDynamic(_this_) {
    return _this_;
  }
  function unsafeCast(_this_) {
    return _this_;
  }
  function unsafeCast_0(_this_) {
    return _this_;
  }
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function pow(_this_, n) {
    return Math.pow(_this_, n);
  }
  function cos(x) {
    return Math.cos(x);
  }
  function sin(x) {
    return Math.sin(x);
  }
  function sqrt(x) {
    return Math.sqrt(x);
  }
  function atan2(y, x) {
    return Math.atan2(y, x);
  }
  function acos(x) {
    return Math.acos(x);
  }
  function max(a, b) {
    return function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([a, b]))));
    }.call(this);
  }
  function min(a, b) {
    return function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([a, b]))));
    }.call(this);
  }
  function roundToInt(_this_) {
    var tmp;
    if (isNaN_0(_this_)) {
      throw IllegalArgumentException_init_$Create$_0('Cannot round NaN value.');
    } else if (_this_ > IntCompanionObject_getInstance()._MAX_VALUE_5) {
      tmp = IntCompanionObject_getInstance()._MAX_VALUE_5;
    } else if (_this_ < IntCompanionObject_getInstance()._MIN_VALUE_5) {
      tmp = IntCompanionObject_getInstance()._MIN_VALUE_5;
    } else {
      tmp = numberToInt(Math.round(_this_));
    }
    return tmp;
  }
  function abs(x) {
    return Math.abs(x);
  }
  function ceil(x) {
    return Math.ceil(x);
  }
  function floor(x) {
    return Math.floor(x);
  }
  function sign(x) {
    return Math.sign(x);
  }
  function asin(x) {
    return Math.asin(x);
  }
  function pow_0(_this_, x) {
    return Math.pow(_this_, x);
  }
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function _get_INV_2_26_() {
    return INV_2_26;
  }
  var INV_2_26;
  function _get_INV_2_53_() {
    return INV_2_53;
  }
  var INV_2_53;
  function INV_2_26$init$() {
    var tmp0_pow_0 = 2.0;
    var tmp1_pow_0 = -26;
    return Math.pow(tmp0_pow_0, tmp1_pow_0);
  }
  function INV_2_53$init$() {
    var tmp0_pow_0 = 2.0;
    var tmp1_pow_0 = -53;
    return Math.pow(tmp0_pow_0, tmp1_pow_0);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__2();
  }
  function KCallable() {
  }
  KCallable.$metadata$ = {
    simpleName: 'KCallable',
    kind: 'interface',
    interfaces: []
  };
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
  KClassImpl.prototype._get_qualifiedName__4 = function () {
    throw NotImplementedError_init_$Create$(null, 1, null);
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
    var tmp0_safe_receiver = this._get_simpleName__4();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__4();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function _get_givenSimpleName_($this) {
    return $this._givenSimpleName;
  }
  function _get_isInstanceFunction_($this) {
    return $this._isInstanceFunction;
  }
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
  PrimitiveKClassImpl.prototype._get_simpleName__4 = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.prototype.isInstance_4 = function (value) {
    return this._isInstanceFunction(value);
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
  NothingKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype.isInstance_4 = function (value) {
    return false;
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
  ErrorKClass.prototype._get_simpleName__4 = function () {
    var tmp0_error_0 = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype._get_qualifiedName__4 = function () {
    var tmp0_error_0 = 'Unknown qualifiedName for ErrorKClass';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
  ErrorKClass.prototype.isInstance_4 = function (value) {
    var tmp0_error_0 = "Can's check isInstance on ErrorKClass";
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
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
  SimpleKClassImpl.prototype._get_simpleName__4 = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.prototype.isInstance_4 = function (value) {
    return jsIsType(value, this._get_jClass__2());
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function KFunction() {
  }
  KFunction.$metadata$ = {
    simpleName: 'KFunction',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function KProperty() {
  }
  KProperty.$metadata$ = {
    simpleName: 'KProperty',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function KProperty0() {
  }
  KProperty0.$metadata$ = {
    simpleName: 'KProperty0',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KProperty1() {
  }
  KProperty1.$metadata$ = {
    simpleName: 'KProperty1',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KProperty2() {
  }
  KProperty2.$metadata$ = {
    simpleName: 'KProperty2',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KMutableProperty0() {
  }
  KMutableProperty0.$metadata$ = {
    simpleName: 'KMutableProperty0',
    kind: 'interface',
    interfaces: [KProperty0, KMutableProperty]
  };
  function KMutableProperty() {
  }
  KMutableProperty.$metadata$ = {
    simpleName: 'KMutableProperty',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KMutableProperty1() {
  }
  KMutableProperty1.$metadata$ = {
    simpleName: 'KMutableProperty1',
    kind: 'interface',
    interfaces: [KProperty1, KMutableProperty]
  };
  function KMutableProperty2() {
  }
  KMutableProperty2.$metadata$ = {
    simpleName: 'KMutableProperty2',
    kind: 'interface',
    interfaces: [KProperty2, KMutableProperty]
  };
  function KType() {
  }
  KType.$metadata$ = {
    simpleName: 'KType',
    kind: 'interface',
    interfaces: []
  };
  function createKType_0(classifier, arguments_0, isMarkedNullable) {
    return new KTypeImpl(classifier, asList(arguments_0), isMarkedNullable);
  }
  function createDynamicKType_0() {
    return DynamicKType_getInstance();
  }
  function createKTypeParameter_0(name, upperBounds, variance) {
    var tmp0_subject = variance;
    {
      var kVariance;
      switch (tmp0_subject) {
        case 'in':
          kVariance = KVariance_IN_getInstance();
          break;
        case 'out':
          kVariance = KVariance_OUT_getInstance();
          break;
        default:kVariance = KVariance_INVARIANT_getInstance();
          break;
      }
    }
    return new KTypeParameterImpl(name, asList(upperBounds), kVariance, false);
  }
  function getStarKTypeProjection_0() {
    return Companion_getInstance_3()._get_STAR_();
  }
  function createCovariantKTypeProjection_0(type) {
    return Companion_getInstance_3().covariant(type);
  }
  function createInvariantKTypeProjection_0(type) {
    return Companion_getInstance_3().invariant(type);
  }
  function createContravariantKTypeProjection_0(type) {
    return Companion_getInstance_3().contravariant(type);
  }
  function asString(_this_, $this) {
    if (_this_._variance == null)
      return '*';
    return prefixString(_this_._variance) + toString_0(_this_._type);
  }
  function _no_name_provided__18(this$0) {
    this._this$0_6 = this$0;
  }
  _no_name_provided__18.prototype.invoke_23 = function (it_0) {
    return asString(it_0, this._this$0_6);
  };
  _no_name_provided__18.prototype.invoke_68 = function (p1) {
    return this.invoke_23(p1 instanceof KTypeProjection ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function KTypeImpl(classifier, arguments_0, isMarkedNullable) {
    this._classifier = classifier;
    this._arguments = arguments_0;
    this._isMarkedNullable = isMarkedNullable;
  }
  KTypeImpl.prototype._get_classifier__1 = function () {
    return this._classifier;
  };
  KTypeImpl.prototype._get_arguments__1 = function () {
    return this._arguments;
  };
  KTypeImpl.prototype._get_isMarkedNullable__1 = function () {
    return this._isMarkedNullable;
  };
  KTypeImpl.prototype.equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof KTypeImpl) {
      tmp_1 = equals(this._classifier, other._classifier);
    } else {
      {
        tmp_1 = false;
      }
    }
    if (tmp_1) {
      tmp_0 = equals(this._arguments, other._arguments);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = this._isMarkedNullable === other._isMarkedNullable;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KTypeImpl.prototype.hashCode = function () {
    return imul(imul(hashCode(this._classifier), 31) + hashCode(this._arguments) | 0, 31) + (this._isMarkedNullable | 0) | 0;
  };
  KTypeImpl.prototype.toString = function () {
    var tmp = this._classifier;
    var kClass = isInterface(tmp, KClass) ? tmp : null;
    var classifierName = kClass == null ? toString_1(this._classifier) : !(kClass._get_simpleName__4() == null) ? kClass._get_simpleName__4() : '(non-denotable type)';
    var tmp_0;
    if (this._arguments.isEmpty_47()) {
      tmp_0 = '';
    } else {
      tmp_0 = joinToString$default_0(this._arguments, ', ', '<', '>', 0, null, _no_name_provided_$factory_8(this), 24, null);
    }
    var args = tmp_0;
    var nullable = this._isMarkedNullable ? '?' : '';
    return plus_0(classifierName, args) + nullable;
  };
  KTypeImpl.$metadata$ = {
    simpleName: 'KTypeImpl',
    kind: 'class',
    interfaces: [KType]
  };
  function prefixString(_this_) {
    var tmp0_subject = _this_;
    var tmp;
    if (tmp0_subject.equals(KVariance_INVARIANT_getInstance())) {
      tmp = '';
    } else if (tmp0_subject.equals(KVariance_IN_getInstance())) {
      tmp = 'in ';
    } else if (tmp0_subject.equals(KVariance_OUT_getInstance())) {
      tmp = 'out ';
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  }
  function DynamicKType() {
    DynamicKType_instance = this;
    this._classifier_0 = null;
    this._arguments_0 = emptyList();
    this._isMarkedNullable_0 = false;
  }
  DynamicKType.prototype._get_classifier__1 = function () {
    return this._classifier_0;
  };
  DynamicKType.prototype._get_arguments__1 = function () {
    return this._arguments_0;
  };
  DynamicKType.prototype._get_isMarkedNullable__1 = function () {
    return this._isMarkedNullable_0;
  };
  DynamicKType.prototype.toString = function () {
    return 'dynamic';
  };
  DynamicKType.$metadata$ = {
    simpleName: 'DynamicKType',
    kind: 'object',
    interfaces: [KType]
  };
  var DynamicKType_instance;
  function DynamicKType_getInstance() {
    if (DynamicKType_instance == null)
      new DynamicKType();
    return DynamicKType_instance;
  }
  function _no_name_provided_$factory_8(this$0) {
    var i = new _no_name_provided__18(this$0);
    return function (p1) {
      return i.invoke_23(p1);
    };
  }
  function KTypeParameterImpl(name, upperBounds, variance, isReified) {
    this._name_1 = name;
    this._upperBounds = upperBounds;
    this._variance_0 = variance;
    this._isReified = isReified;
  }
  KTypeParameterImpl.prototype._get_name__23 = function () {
    return this._name_1;
  };
  KTypeParameterImpl.prototype._get_upperBounds__0 = function () {
    return this._upperBounds;
  };
  KTypeParameterImpl.prototype._get_variance__1 = function () {
    return this._variance_0;
  };
  KTypeParameterImpl.prototype._get_isReified__0 = function () {
    return this._isReified;
  };
  KTypeParameterImpl.prototype.toString = function () {
    return this._name_1;
  };
  KTypeParameterImpl.prototype.component1_1 = function () {
    return this._name_1;
  };
  KTypeParameterImpl.prototype.component2_1 = function () {
    return this._upperBounds;
  };
  KTypeParameterImpl.prototype.component3 = function () {
    return this._variance_0;
  };
  KTypeParameterImpl.prototype.component4 = function () {
    return this._isReified;
  };
  KTypeParameterImpl.prototype.copy_1 = function (name, upperBounds, variance, isReified) {
    return new KTypeParameterImpl(name, upperBounds, variance, isReified);
  };
  KTypeParameterImpl.prototype.copy$default_1 = function (name, upperBounds, variance, isReified, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this._name_1;
    if (!(($mask0 & 2) === 0))
      upperBounds = this._upperBounds;
    if (!(($mask0 & 4) === 0))
      variance = this._variance_0;
    if (!(($mask0 & 8) === 0))
      isReified = this._isReified;
    return this.copy_1(name, upperBounds, variance, isReified);
  };
  KTypeParameterImpl.prototype.hashCode = function () {
    var result = getStringHashCode(this._name_1);
    result = imul(result, 31) + hashCode(this._upperBounds) | 0;
    result = imul(result, 31) + this._variance_0.hashCode() | 0;
    result = imul(result, 31) + (this._isReified | 0) | 0;
    return result;
  };
  KTypeParameterImpl.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KTypeParameterImpl))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof KTypeParameterImpl ? other : THROW_CCE();
    if (!(this._name_1 === tmp0_other_with_cast._name_1))
      return false;
    if (!equals(this._upperBounds, tmp0_other_with_cast._upperBounds))
      return false;
    if (!this._variance_0.equals(tmp0_other_with_cast._variance_0))
      return false;
    if (!(this._isReified === tmp0_other_with_cast._isReified))
      return false;
    return true;
  };
  KTypeParameterImpl.$metadata$ = {
    simpleName: 'KTypeParameterImpl',
    kind: 'class',
    interfaces: [KTypeParameter]
  };
  function _get_functionClasses_() {
    return functionClasses;
  }
  var functionClasses;
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_67 = function (it_0) {
    return isObject(it_0);
  };
  _no_name_provided__19.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_67 = function (it_0) {
    return isNumber(it_0);
  };
  _no_name_provided__20.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? typeof it_0 === 'boolean' : false;
  };
  _no_name_provided__21.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? typeof it_0 === 'number' : false;
  };
  _no_name_provided__22.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23() {
  }
  _no_name_provided__23.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? typeof it_0 === 'number' : false;
  };
  _no_name_provided__23.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? typeof it_0 === 'number' : false;
  };
  _no_name_provided__24.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25() {
  }
  _no_name_provided__25.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? typeof it_0 === 'number' : false;
  };
  _no_name_provided__25.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__26() {
  }
  _no_name_provided__26.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? typeof it_0 === 'number' : false;
  };
  _no_name_provided__26.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__27() {
  }
  _no_name_provided__27.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? isArray(it_0) : false;
  };
  _no_name_provided__27.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__28() {
  }
  _no_name_provided__28.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? typeof it_0 === 'string' : false;
  };
  _no_name_provided__28.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__29() {
  }
  _no_name_provided__29.prototype.invoke_67 = function (it_0) {
    return it_0 instanceof Error;
  };
  _no_name_provided__29.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__30() {
  }
  _no_name_provided__30.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? isBooleanArray(it_0) : false;
  };
  _no_name_provided__30.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__31() {
  }
  _no_name_provided__31.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? isCharArray(it_0) : false;
  };
  _no_name_provided__31.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__32() {
  }
  _no_name_provided__32.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? isByteArray(it_0) : false;
  };
  _no_name_provided__32.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__33() {
  }
  _no_name_provided__33.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? isShortArray(it_0) : false;
  };
  _no_name_provided__33.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__34() {
  }
  _no_name_provided__34.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? isIntArray(it_0) : false;
  };
  _no_name_provided__34.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__35() {
  }
  _no_name_provided__35.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? isLongArray(it_0) : false;
  };
  _no_name_provided__35.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__36() {
  }
  _no_name_provided__36.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? isFloatArray(it_0) : false;
  };
  _no_name_provided__36.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__37() {
  }
  _no_name_provided__37.prototype.invoke_67 = function (it_0) {
    return !(it_0 == null) ? isDoubleArray(it_0) : false;
  };
  _no_name_provided__37.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__37.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__38($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__38.prototype.invoke_67 = function (it_0) {
    var tmp;
    if (typeof it_0 === 'function') {
      tmp = it_0.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__38.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__38.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp0_unsafeCast_0 = Object;
    var tmp_0 = tmp0_unsafeCast_0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_9());
    var tmp_1 = this;
    var tmp0_unsafeCast_0_0 = Number;
    var tmp_2 = tmp0_unsafeCast_0_0;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_10());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp0_unsafeCast_0_1 = Boolean;
    var tmp_4 = tmp0_unsafeCast_0_1;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_11());
    var tmp_5 = this;
    var tmp0_unsafeCast_0_2 = Number;
    var tmp_6 = tmp0_unsafeCast_0_2;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_12());
    var tmp_7 = this;
    var tmp0_unsafeCast_0_3 = Number;
    var tmp_8 = tmp0_unsafeCast_0_3;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_13());
    var tmp_9 = this;
    var tmp0_unsafeCast_0_4 = Number;
    var tmp_10 = tmp0_unsafeCast_0_4;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_14());
    var tmp_11 = this;
    var tmp0_unsafeCast_0_5 = Number;
    var tmp_12 = tmp0_unsafeCast_0_5;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_15());
    var tmp_13 = this;
    var tmp0_unsafeCast_0_6 = Number;
    var tmp_14 = tmp0_unsafeCast_0_6;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_16());
    var tmp_15 = this;
    var tmp0_unsafeCast_0_7 = Array;
    var tmp_16 = tmp0_unsafeCast_0_7;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_17());
    var tmp_17 = this;
    var tmp0_unsafeCast_0_8 = String;
    var tmp_18 = tmp0_unsafeCast_0_8;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_18());
    var tmp_19 = this;
    var tmp0_unsafeCast_0_9 = Error;
    var tmp_20 = tmp0_unsafeCast_0_9;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_19());
    var tmp_21 = this;
    var tmp0_unsafeCast_0_10 = Array;
    var tmp_22 = tmp0_unsafeCast_0_10;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_20());
    var tmp_23 = this;
    var tmp0_unsafeCast_0_11 = Uint16Array;
    var tmp_24 = tmp0_unsafeCast_0_11;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_21());
    var tmp_25 = this;
    var tmp0_unsafeCast_0_12 = Int8Array;
    var tmp_26 = tmp0_unsafeCast_0_12;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_22());
    var tmp_27 = this;
    var tmp0_unsafeCast_0_13 = Int16Array;
    var tmp_28 = tmp0_unsafeCast_0_13;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_23());
    var tmp_29 = this;
    var tmp0_unsafeCast_0_14 = Int32Array;
    var tmp_30 = tmp0_unsafeCast_0_14;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_24());
    var tmp_31 = this;
    var tmp0_unsafeCast_0_15 = Array;
    var tmp_32 = tmp0_unsafeCast_0_15;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_25());
    var tmp_33 = this;
    var tmp0_unsafeCast_0_16 = Float32Array;
    var tmp_34 = tmp0_unsafeCast_0_16;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_26());
    var tmp_35 = this;
    var tmp0_unsafeCast_0_17 = Float64Array;
    var tmp_36 = tmp0_unsafeCast_0_17;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_27());
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
      var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_28(arity));
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
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__23();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__25();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__26();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__27();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__28();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__29();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_20() {
    var i = new _no_name_provided__30();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__31();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__32();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_23() {
    var i = new _no_name_provided__33();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_24() {
    var i = new _no_name_provided__34();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_25() {
    var i = new _no_name_provided__35();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_26() {
    var i = new _no_name_provided__36();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_27() {
    var i = new _no_name_provided__37();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function _no_name_provided_$factory_28($arity) {
    var i = new _no_name_provided__38($arity);
    return function (p1) {
      return i.invoke_67(p1);
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
  function getKClassFromExpression_0(e) {
    var tmp0_subject = typeof e;
    var tmp;
    switch (tmp0_subject) {
      case 'string':
        tmp = PrimitiveClasses_getInstance()._stringClass;
        break;
      case 'number':
        var tmp_0;
        var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
        if (tmp0_asDynamic_0 === e) {
          tmp_0 = PrimitiveClasses_getInstance()._intClass;
        } else {
          {
            tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
          }
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance()._booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        tmp = tmp_1.functionClass(e.length);
        break;
      default:var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass_0(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                          } else {
                            {
                              var constructor = Object.getPrototypeOf(e).constructor;
                              var tmp_3;
                              if (constructor === Object) {
                                tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                              } else if (constructor === Error) {
                                tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                              } else {
                                var jsClass_0 = constructor;
                                tmp_3 = getKClass1_0(jsClass_0);
                              }
                              tmp_2 = tmp_3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    var tmp1_unsafeCast_0 = tmp;
    return tmp1_unsafeCast_0;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_1($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_0(content, $this) {
    StringBuilder.call($this, toString_1(content));
    return $this;
  }
  function StringBuilder_init_$Create$_0(content) {
    return StringBuilder_init_$Init$_0(content, Object.create(StringBuilder.prototype));
  }
  function StringBuilder_init_$Init$_1($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_1() {
    return StringBuilder_init_$Init$_1(Object.create(StringBuilder.prototype));
  }
  function _set_string_($this, _set___) {
    $this._string = _set___;
  }
  function _get_string_($this) {
    return $this._string;
  }
  function checkReplaceRange($this, startIndex, endIndex, length) {
    if (startIndex < 0 ? true : startIndex > length) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'startIndex: ' + startIndex + ', length: ' + length);
    }if (startIndex > endIndex) {
      throw IllegalArgumentException_init_$Create$_0('' + 'startIndex(' + startIndex + ') > endIndex(' + endIndex + ')');
    }}
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0 = function () {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.length;
  };
  StringBuilder.prototype.get_39 = function (index) {
    var tmp0_getOrElse_0 = this._string;
    var tmp;
    if (index >= 0 ? index <= _get_lastIndex__5(tmp0_getOrElse_0) : false) {
      tmp = charSequenceGet(tmp0_getOrElse_0, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'index: ' + index + ', length: ' + this._get_length__0() + '}');
    }
    return tmp;
  };
  StringBuilder.prototype.subSequence_1 = function (startIndex, endIndex) {
    var tmp0_substring_0 = this._string;
    return tmp0_substring_0.substring(startIndex, endIndex);
  };
  StringBuilder.prototype.append_2 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_3 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_4 = function (value, startIndex, endIndex) {
    var tmp0_elvis_lhs = value;
    return this.appendRange_0(tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs, startIndex, endIndex);
  };
  StringBuilder.prototype.reverse = function () {
    var reversed_1 = '';
    var index = this._string.length - 1 | 0;
    while (index >= 0) {
      var tmp = this._string;
      var tmp0 = index;
      index = tmp0 - 1 | 0;
      var low = charSequenceGet(tmp, tmp0);
      if (isLowSurrogate(low) ? index >= 0 : false) {
        var tmp_0 = this._string;
        var tmp1 = index;
        index = tmp1 - 1 | 0;
        var high = charSequenceGet(tmp_0, tmp1);
        if (isHighSurrogate(high)) {
          reversed_1 = reversed_1 + high + low;
        } else {
          reversed_1 = reversed_1 + low + high;
        }
      } else {
        reversed_1 = reversed_1 + low;
      }
    }
    this._string = reversed_1;
    return this;
  };
  StringBuilder.prototype.append_5 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_6 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_7 = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + concatToString(value);
    return this;
  };
  StringBuilder.prototype.append_8 = function (value) {
    return this.append_9(value);
  };
  StringBuilder.prototype.append_9 = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.capacity = function () {
    return this._get_length__0();
  };
  StringBuilder.prototype.ensureCapacity_0 = function (minimumCapacity) {
  };
  StringBuilder.prototype.indexOf_6 = function (string) {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.indexOf(string);
  };
  StringBuilder.prototype.indexOf_7 = function (string, startIndex) {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.indexOf(string, startIndex);
  };
  StringBuilder.prototype.lastIndexOf_6 = function (string) {
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.lastIndexOf(string);
  };
  StringBuilder.prototype.lastIndexOf_7 = function (string, startIndex) {
    var tmp;
    if (charSequenceLength(string) === 0) {
      tmp = startIndex < 0;
    } else {
      {
        tmp = false;
      }
    }
    if (tmp)
      return -1;
    else {
    }
    var tmp0_asDynamic_0 = this._string;
    return tmp0_asDynamic_0.lastIndexOf(string, startIndex);
  };
  StringBuilder.prototype.insert = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + value;
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_0 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + value;
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_1 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + concatToString(value);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_2 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + toString_0(value);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_3 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + toString_0(value);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insert_4 = function (index, value) {
    return this.insert_5(index, value);
  };
  StringBuilder.prototype.insert_5 = function (index, value) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp0_elvis_lhs = value;
    var toInsert = tmp0_elvis_lhs == null ? 'null' : tmp0_elvis_lhs;
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + toInsert;
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.setLength = function (newLength) {
    if (newLength < 0) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Negative new length: ' + newLength + '.');
    }if (newLength <= this._get_length__0()) {
      var tmp = this;
      var tmp0_substring_0 = this._string;
      var tmp1_substring_0 = 0;
      tmp._string = tmp0_substring_0.substring(tmp1_substring_0, newLength);
    } else {
      var inductionVariable = this._get_length__0();
      if (inductionVariable < newLength)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp1_this = this;
          tmp1_this._string = tmp1_this._string + new Char_0(0);
        }
         while (inductionVariable < newLength);
    }
  };
  StringBuilder.prototype.substring = function (startIndex) {
    Companion_getInstance().checkPositionIndex(startIndex, this._get_length__0());
    var tmp0_substring_0 = this._string;
    return tmp0_substring_0.substring(startIndex);
  };
  StringBuilder.prototype.substring_0 = function (startIndex, endIndex) {
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, this._get_length__0());
    var tmp0_substring_0 = this._string;
    return tmp0_substring_0.substring(startIndex, endIndex);
  };
  StringBuilder.prototype.trimToSize_0 = function () {
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.prototype.clear_14 = function () {
    this._string = '';
    return this;
  };
  StringBuilder.prototype.set_15 = function (index, value) {
    Companion_getInstance().checkElementIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + value;
    var tmp2_substring_0 = this._string;
    var tmp3_substring_0 = index + 1 | 0;
    tmp._string = tmp_0 + tmp2_substring_0.substring(tmp3_substring_0);
  };
  StringBuilder.prototype.setRange = function (startIndex, endIndex, value) {
    checkReplaceRange(this, startIndex, endIndex, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, startIndex) + value;
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(endIndex);
    return this;
  };
  StringBuilder.prototype.deleteAt = function (index) {
    Companion_getInstance().checkElementIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index);
    var tmp2_substring_0 = this._string;
    var tmp3_substring_0 = index + 1 | 0;
    tmp._string = tmp_0 + tmp2_substring_0.substring(tmp3_substring_0);
    return this;
  };
  StringBuilder.prototype.deleteRange = function (startIndex, endIndex) {
    checkReplaceRange(this, startIndex, endIndex, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, startIndex);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(endIndex);
    return this;
  };
  StringBuilder.prototype.toCharArray = function (destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, this._get_length__0());
    Companion_getInstance().checkBoundsIndexes(destinationOffset, (destinationOffset + endIndex | 0) - startIndex | 0, destination.length);
    var dstIndex = destinationOffset;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1 = dstIndex;
        dstIndex = tmp1 + 1 | 0;
        destination[tmp1] = charSequenceGet(this._string, index);
      }
       while (inductionVariable < endIndex);
  };
  StringBuilder.prototype.toCharArray$default = function (destination, destinationOffset, startIndex, endIndex, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      destinationOffset = 0;
    if (!(($mask0 & 4) === 0))
      startIndex = 0;
    if (!(($mask0 & 8) === 0))
      endIndex = this._get_length__0();
    return this.toCharArray(destination, destinationOffset, startIndex, endIndex);
  };
  StringBuilder.prototype.appendRange = function (value, startIndex, endIndex) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + concatToString_0(value, startIndex, endIndex);
    return this;
  };
  StringBuilder.prototype.appendRange_0 = function (value, startIndex, endIndex) {
    var stringCsq = toString_1(value);
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, stringCsq.length);
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    tmp._string = tmp_0 + stringCsq.substring(startIndex, endIndex);
    return this;
  };
  StringBuilder.prototype.insertRange = function (index, value, startIndex, endIndex) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index) + concatToString_0(value, startIndex, endIndex);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_0 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.prototype.insertRange_0 = function (index, value, startIndex, endIndex) {
    Companion_getInstance().checkPositionIndex(index, this._get_length__0());
    var stringCsq = toString_1(value);
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, stringCsq.length);
    var tmp = this;
    var tmp0_substring_0 = this._string;
    var tmp1_substring_0 = 0;
    var tmp_0 = tmp0_substring_0.substring(tmp1_substring_0, index);
    var tmp_1 = tmp_0 + stringCsq.substring(startIndex, endIndex);
    var tmp2_substring_0 = this._string;
    tmp._string = tmp_1 + tmp2_substring_0.substring(index);
    return this;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function isLowSurrogate(_this_) {
    Companion_getInstance_19();
    var containsLower = new Char_0(56320);
    var tmp;
    Companion_getInstance_19();
    if (_this_ <= new Char_0(57343)) {
      tmp = containsLower <= _this_;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function isHighSurrogate(_this_) {
    Companion_getInstance_19();
    var containsLower = new Char_0(55296);
    var tmp;
    Companion_getInstance_19();
    if (_this_ <= new Char_0(56319)) {
      tmp = containsLower <= _this_;
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$_0('' + 'radix ' + radix + ' was not in valid range 2..36');
    }return radix;
  }
  function _get_STRING_CASE_INSENSITIVE_ORDER_() {
    return STRING_CASE_INSENSITIVE_ORDER;
  }
  var STRING_CASE_INSENSITIVE_ORDER;
  function nativeLastIndexOf(_this_, str, fromIndex) {
    return _this_.lastIndexOf(str, fromIndex);
  }
  function substring(_this_, startIndex, endIndex) {
    return _this_.substring(startIndex, endIndex);
  }
  function substring_0(_this_, startIndex) {
    return _this_.substring(startIndex);
  }
  function compareTo(_this_, other, ignoreCase) {
    if (ignoreCase) {
      var n1 = _this_.length;
      var n2 = other.length;
      var min_0 = function () {
        var $externalVarargReceiverTmp = Math;
        return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([n1, n2]))));
      }.call(this);
      if (min_0 === 0)
        return n1 - n2 | 0;
      var start = 0;
      $l$break: while (true) {
        var tmp0_minOf_0 = start + 16 | 0;
        var end = function () {
          var $externalVarargReceiverTmp = Math;
          return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([tmp0_minOf_0, min_0]))));
        }.call(this);
        var tmp1_substring_0 = start;
        var s1 = _this_.substring(tmp1_substring_0, end);
        var tmp2_substring_0 = start;
        var s2 = other.substring(tmp2_substring_0, end);
        if (!(s1 === s2)) {
          var tmp3_uppercase_0 = s1;
          s1 = tmp3_uppercase_0.toUpperCase();
          var tmp4_uppercase_0 = s2;
          s2 = tmp4_uppercase_0.toUpperCase();
          if (!(s1 === s2)) {
            var tmp5_lowercase_0 = s1;
            s1 = tmp5_lowercase_0.toLowerCase();
            var tmp6_lowercase_0 = s2;
            s2 = tmp6_lowercase_0.toLowerCase();
            if (!(s1 === s2)) {
              return compareTo_0(s1, s2);
            }}}if (end === min_0)
          break $l$break;
        start = end;
      }
      return n1 - n2 | 0;
    } else {
      return compareTo_0(_this_, other);
    }
  }
  function compareTo$default(_this_, other, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return compareTo(_this_, other, ignoreCase);
  }
  function uppercase(_this_) {
    return _this_.toUpperCase();
  }
  function lowercase(_this_) {
    return _this_.toLowerCase();
  }
  function concatToString(_this_) {
    var result = '';
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last_2 = indexedObject.length;
    while (inductionVariable < last_2) {
      var char = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      result = result + char;
    }
    return result;
  }
  function concatToString_0(_this_, startIndex, endIndex) {
    Companion_getInstance().checkBoundsIndexes(startIndex, endIndex, _this_.length);
    var result = '';
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + _this_[index];
      }
       while (inductionVariable < endIndex);
    return result;
  }
  function concatToString$default(_this_, startIndex, endIndex, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      startIndex = 0;
    if (!(($mask0 & 2) === 0))
      endIndex = _this_.length;
    return concatToString_0(_this_, startIndex, endIndex);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this._function = function_0;
  }
  sam$kotlin_Comparator$0.prototype.compare_0 = function (a, b) {
    return this._function(a, b);
  };
  sam$kotlin_Comparator$0.prototype.compare = function (a, b) {
    return this.compare_0(a, b);
  };
  sam$kotlin_Comparator$0.$metadata$ = {
    simpleName: 'sam$kotlin_Comparator$0',
    kind: 'class',
    interfaces: [Comparator]
  };
  function _no_name_provided__39() {
  }
  _no_name_provided__39.prototype.invoke_65 = function (a, b) {
    return compareTo(a, b, true);
  };
  _no_name_provided__39.prototype.invoke_66 = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'string' : false) ? p1 : THROW_CCE();
    return this.invoke_65(tmp, (!(p2 == null) ? typeof p2 === 'string' : false) ? p2 : THROW_CCE());
  };
  _no_name_provided__39.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_29() {
    var i = new _no_name_provided__39();
    return function (p1, p2) {
      return i.invoke_65(p1, p2);
    };
  }
  function STRING_CASE_INSENSITIVE_ORDER$init$() {
    var tmp = _no_name_provided_$factory_29();
    return new sam$kotlin_Comparator$0(tmp);
  }
  function _get_REPLACEMENT_BYTE_SEQUENCE_() {
    return REPLACEMENT_BYTE_SEQUENCE;
  }
  var REPLACEMENT_BYTE_SEQUENCE;
  function REPLACEMENT_BYTE_SEQUENCE$init$() {
    var tmp0_byteArrayOf_0 = new Int8Array([-17, -65, -67]);
    return tmp0_byteArrayOf_0;
  }
  function _get_value_($this) {
    return $this._value_1;
  }
  function Companion_20() {
    Companion_instance_19 = this;
    this._MIN_VALUE_8 = new Char_0(0);
    this._MAX_VALUE_8 = new Char_0(65535);
    this._MIN_HIGH_SURROGATE = new Char_0(55296);
    this._MAX_HIGH_SURROGATE = new Char_0(56319);
    this._MIN_LOW_SURROGATE = new Char_0(56320);
    this._MAX_LOW_SURROGATE = new Char_0(57343);
    this._MIN_SURROGATE = new Char_0(55296);
    this._MAX_SURROGATE = new Char_0(57343);
    this._SIZE_BYTES_8 = 2;
    this._SIZE_BITS_8 = 16;
  }
  Companion_20.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_8;
  };
  Companion_20.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_8;
  };
  Companion_20.prototype._get_MIN_HIGH_SURROGATE_ = function () {
    return this._MIN_HIGH_SURROGATE;
  };
  Companion_20.prototype._get_MAX_HIGH_SURROGATE_ = function () {
    return this._MAX_HIGH_SURROGATE;
  };
  Companion_20.prototype._get_MIN_LOW_SURROGATE_ = function () {
    return this._MIN_LOW_SURROGATE;
  };
  Companion_20.prototype._get_MAX_LOW_SURROGATE_ = function () {
    return this._MAX_LOW_SURROGATE;
  };
  Companion_20.prototype._get_MIN_SURROGATE_ = function () {
    return this._MIN_SURROGATE;
  };
  Companion_20.prototype._get_MAX_SURROGATE_ = function () {
    return this._MAX_SURROGATE;
  };
  Companion_20.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_8;
  };
  Companion_20.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_8;
  };
  Companion_20.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_20();
    return Companion_instance_19;
  }
  function Char_0(code) {
    Companion_getInstance_19();
    var tmp = this;
    tmp._value_1 = _UShort___get_data__impl_(code) & 65535;
  }
  Char_0.prototype.compareTo_17 = function (other) {
    return this._value_1 - other._value_1 | 0;
  };
  Char_0.prototype.compareTo_25 = function (other) {
    return this.compareTo_17(other instanceof Char_0 ? other : THROW_CCE());
  };
  Char_0.prototype.plus_37 = function (other) {
    return numberToChar(this._value_1 + other | 0);
  };
  Char_0.prototype.minus = function (other) {
    return this._value_1 - other._value_1 | 0;
  };
  Char_0.prototype.minus_33 = function (other) {
    return numberToChar(this._value_1 - other | 0);
  };
  Char_0.prototype.inc_5 = function () {
    return numberToChar(this._value_1 + 1 | 0);
  };
  Char_0.prototype.dec_5 = function () {
    return numberToChar(this._value_1 - 1 | 0);
  };
  Char_0.prototype.rangeTo = function (other) {
    return new CharRange(this, other);
  };
  Char_0.prototype.toByte_6 = function () {
    return toByte(this._value_1);
  };
  Char_0.prototype.toChar_6 = function () {
    return this;
  };
  Char_0.prototype.toShort_6 = function () {
    return toShort(this._value_1);
  };
  Char_0.prototype.toInt_6 = function () {
    return this._value_1;
  };
  Char_0.prototype.toLong_6 = function () {
    return toLong(this._value_1);
  };
  Char_0.prototype.toFloat_6 = function () {
    return this._value_1;
  };
  Char_0.prototype.toDouble_6 = function () {
    return this._value_1;
  };
  Char_0.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char_0))
      return false;
    else {
    }
    return this._value_1 === other._value_1;
  };
  Char_0.prototype.hashCode = function () {
    return this._value_1;
  };
  Char_0.prototype.toString = function () {
    var tmp0_unsafeCast_0 = String.fromCharCode(this._value_1);
    return tmp0_unsafeCast_0;
  };
  Char_0.$metadata$ = {
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
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
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
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function Companion_21() {
    Companion_instance_20 = this;
  }
  Companion_21.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_21();
    return Companion_instance_20;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_20();
    this._name_2 = name;
    this._ordinal = ordinal;
  }
  Enum.prototype._get_name__23 = function () {
    return this._name_2;
  };
  Enum.prototype._get_ordinal__8 = function () {
    return this._ordinal;
  };
  Enum.prototype.compareTo_19 = function (other) {
    return compareTo_0(this._ordinal, other._ordinal);
  };
  Enum.prototype.compareTo_25 = function (other) {
    return this.compareTo_19(other instanceof Enum ? other : THROW_CCE());
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name_2;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function byteArrayOf(elements) {
    return elements;
  }
  function arrayOf(elements) {
    return elements;
  }
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function plus_0(_this_, other) {
    var tmp2_safe_receiver = _this_;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toString_1(tmp2_safe_receiver);
    var tmp = tmp3_elvis_lhs == null ? 'null' : tmp3_elvis_lhs;
    var tmp0_safe_receiver = other;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
  }
  function booleanArrayOf(elements) {
    return elements;
  }
  function charArrayOf(elements) {
    return elements;
  }
  function shortArrayOf(elements) {
    return elements;
  }
  function intArrayOf(elements) {
    return elements;
  }
  function floatArrayOf(elements) {
    return elements;
  }
  function longArrayOf(elements) {
    return elements;
  }
  function doubleArrayOf(elements) {
    return elements;
  }
  function DefaultConstructorMarker() {
    DefaultConstructorMarker_instance = this;
  }
  DefaultConstructorMarker.$metadata$ = {
    simpleName: 'DefaultConstructorMarker',
    kind: 'object',
    interfaces: []
  };
  var DefaultConstructorMarker_instance;
  function DefaultConstructorMarker_getInstance() {
    if (DefaultConstructorMarker_instance == null)
      new DefaultConstructorMarker();
    return DefaultConstructorMarker_instance;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last_2 = array.length - 1 | 0;
    if (inductionVariable <= last_2)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last_2));
    return array;
  }
  function arrayWithFun(size_0, init) {
    var tmp0_fillArrayFun_0 = Array(size_0);
    var result_1 = tmp0_fillArrayFun_0;
    var i_2 = 0;
    while (!(i_2 === result_1.length)) {
      result_1[i_2] = init(i_2);
      i_2 = i_2 + 1 | 0;
      Unit_getInstance();
    }
    return result_1;
  }
  function fillArrayFun(array, init) {
    var result = array;
    var i = 0;
    while (!(i === result.length)) {
      result[i] = init(i);
      i = i + 1 | 0;
      Unit_getInstance();
    }
    return result;
  }
  function arrayIterator(array) {
    return new _no_name_provided__40(array);
  }
  function booleanArrayIterator(array) {
    return new _no_name_provided__41(array);
  }
  function charArrayIterator(array) {
    return new _no_name_provided__42(array);
  }
  function byteArrayIterator(array) {
    return new _no_name_provided__43(array);
  }
  function shortArrayIterator(array) {
    return new _no_name_provided__44(array);
  }
  function intArrayIterator(array) {
    return new _no_name_provided__45(array);
  }
  function floatArrayIterator(array) {
    return new _no_name_provided__46(array);
  }
  function longArrayIterator(array) {
    return new _no_name_provided__47(array);
  }
  function doubleArrayIterator(array) {
    return new _no_name_provided__48(array);
  }
  function booleanArray(size_0) {
    var tmp0_withType_0 = 'BooleanArray';
    var tmp1_withType_0 = fillArrayVal(Array(size_0), false);
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function charArray(size_0) {
    var tmp1_withType_0 = 'CharArray';
    var tmp = Array(size_0);
    var tmp0_Char_0 = 0;
    var tmp_0;
    Companion_getInstance_19();
    var tmp0__get_code__0_1 = new Char_0(0);
    if (tmp0_Char_0 < tmp0__get_code__0_1.toInt_6()) {
      tmp_0 = true;
    } else {
      {
        Companion_getInstance_19();
        var tmp1__get_code__0_2 = new Char_0(65535);
        tmp_0 = tmp0_Char_0 > tmp1__get_code__0_2.toInt_6();
      }
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + tmp0_Char_0);
    } else {
    }
    var tmp2_withType_0 = fillArrayVal(tmp, new Char_0(_UShort___init__impl_(toShort(tmp0_Char_0))));
    tmp2_withType_0.$type$ = tmp1_withType_0;
    var tmp3_unsafeCast_0 = tmp2_withType_0;
    return tmp3_unsafeCast_0;
  }
  function longArray(size_0) {
    var tmp0_withType_0 = 'LongArray';
    var tmp1_withType_0 = fillArrayVal(Array(size_0), new Long(0, 0));
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function booleanArrayOf_0(arr) {
    var tmp0_withType_0 = 'BooleanArray';
    var tmp1_withType_0 = arr.slice();
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function charArrayOf_0(arr) {
    var tmp0_withType_0 = 'CharArray';
    var tmp1_withType_0 = arr.slice();
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function longArrayOf_0(arr) {
    var tmp0_withType_0 = 'LongArray';
    var tmp1_withType_0 = arr.slice();
    tmp1_withType_0.$type$ = tmp0_withType_0;
    var tmp2_unsafeCast_0 = tmp1_withType_0;
    return tmp2_unsafeCast_0;
  }
  function _no_name_provided__40($array) {
    this._$array = $array;
    this._index_5 = 0;
  }
  _no_name_provided__40.prototype._set_index__11 = function (_set___) {
    this._index_5 = _set___;
  };
  _no_name_provided__40.prototype._get_index__11 = function () {
    return this._index_5;
  };
  _no_name_provided__40.prototype.hasNext_43 = function () {
    return !(this._index_5 === this._$array.length);
  };
  _no_name_provided__40.prototype.next_48 = function () {
    var tmp;
    if (!(this._index_5 === this._$array.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_5;
      tmp0_this._index_5 = tmp1 + 1 | 0;
      tmp = this._$array[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_5);
    }
    return tmp;
  };
  _no_name_provided__40.$metadata$ = {
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function _no_name_provided__41($array) {
    this._$array_0 = $array;
    BooleanIterator.call(this);
    this._index_6 = 0;
  }
  _no_name_provided__41.prototype._set_index__11 = function (_set___) {
    this._index_6 = _set___;
  };
  _no_name_provided__41.prototype._get_index__11 = function () {
    return this._index_6;
  };
  _no_name_provided__41.prototype.hasNext_43 = function () {
    return !(this._index_6 === this._$array_0.length);
  };
  _no_name_provided__41.prototype.nextBoolean_0 = function () {
    var tmp;
    if (!(this._index_6 === this._$array_0.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_6;
      tmp0_this._index_6 = tmp1 + 1 | 0;
      tmp = this._$array_0[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_6);
    }
    return tmp;
  };
  _no_name_provided__41.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__42($array) {
    this._$array_1 = $array;
    CharIterator.call(this);
    this._index_7 = 0;
  }
  _no_name_provided__42.prototype._set_index__11 = function (_set___) {
    this._index_7 = _set___;
  };
  _no_name_provided__42.prototype._get_index__11 = function () {
    return this._index_7;
  };
  _no_name_provided__42.prototype.hasNext_43 = function () {
    return !(this._index_7 === this._$array_1.length);
  };
  _no_name_provided__42.prototype.nextChar_1 = function () {
    var tmp;
    if (!(this._index_7 === this._$array_1.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_7;
      tmp0_this._index_7 = tmp1 + 1 | 0;
      tmp = this._$array_1[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_7);
    }
    return tmp;
  };
  _no_name_provided__42.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__43($array) {
    this._$array_2 = $array;
    ByteIterator.call(this);
    this._index_8 = 0;
  }
  _no_name_provided__43.prototype._set_index__11 = function (_set___) {
    this._index_8 = _set___;
  };
  _no_name_provided__43.prototype._get_index__11 = function () {
    return this._index_8;
  };
  _no_name_provided__43.prototype.hasNext_43 = function () {
    return !(this._index_8 === this._$array_2.length);
  };
  _no_name_provided__43.prototype.nextByte_0 = function () {
    var tmp;
    if (!(this._index_8 === this._$array_2.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_8;
      tmp0_this._index_8 = tmp1 + 1 | 0;
      tmp = this._$array_2[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_8);
    }
    return tmp;
  };
  _no_name_provided__43.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__44($array) {
    this._$array_3 = $array;
    ShortIterator.call(this);
    this._index_9 = 0;
  }
  _no_name_provided__44.prototype._set_index__11 = function (_set___) {
    this._index_9 = _set___;
  };
  _no_name_provided__44.prototype._get_index__11 = function () {
    return this._index_9;
  };
  _no_name_provided__44.prototype.hasNext_43 = function () {
    return !(this._index_9 === this._$array_3.length);
  };
  _no_name_provided__44.prototype.nextShort_0 = function () {
    var tmp;
    if (!(this._index_9 === this._$array_3.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_9;
      tmp0_this._index_9 = tmp1 + 1 | 0;
      tmp = this._$array_3[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_9);
    }
    return tmp;
  };
  _no_name_provided__44.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__45($array) {
    this._$array_4 = $array;
    IntIterator.call(this);
    this._index_10 = 0;
  }
  _no_name_provided__45.prototype._set_index__11 = function (_set___) {
    this._index_10 = _set___;
  };
  _no_name_provided__45.prototype._get_index__11 = function () {
    return this._index_10;
  };
  _no_name_provided__45.prototype.hasNext_43 = function () {
    return !(this._index_10 === this._$array_4.length);
  };
  _no_name_provided__45.prototype.nextInt_1 = function () {
    var tmp;
    if (!(this._index_10 === this._$array_4.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_10;
      tmp0_this._index_10 = tmp1 + 1 | 0;
      tmp = this._$array_4[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_10);
    }
    return tmp;
  };
  _no_name_provided__45.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__46($array) {
    this._$array_5 = $array;
    FloatIterator.call(this);
    this._index_11 = 0;
  }
  _no_name_provided__46.prototype._set_index__11 = function (_set___) {
    this._index_11 = _set___;
  };
  _no_name_provided__46.prototype._get_index__11 = function () {
    return this._index_11;
  };
  _no_name_provided__46.prototype.hasNext_43 = function () {
    return !(this._index_11 === this._$array_5.length);
  };
  _no_name_provided__46.prototype.nextFloat_0 = function () {
    var tmp;
    if (!(this._index_11 === this._$array_5.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_11;
      tmp0_this._index_11 = tmp1 + 1 | 0;
      tmp = this._$array_5[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_11);
    }
    return tmp;
  };
  _no_name_provided__46.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__47($array) {
    this._$array_6 = $array;
    LongIterator.call(this);
    this._index_12 = 0;
  }
  _no_name_provided__47.prototype._set_index__11 = function (_set___) {
    this._index_12 = _set___;
  };
  _no_name_provided__47.prototype._get_index__11 = function () {
    return this._index_12;
  };
  _no_name_provided__47.prototype.hasNext_43 = function () {
    return !(this._index_12 === this._$array_6.length);
  };
  _no_name_provided__47.prototype.nextLong_1 = function () {
    var tmp;
    if (!(this._index_12 === this._$array_6.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_12;
      tmp0_this._index_12 = tmp1 + 1 | 0;
      tmp = this._$array_6[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_12);
    }
    return tmp;
  };
  _no_name_provided__47.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__48($array) {
    this._$array_7 = $array;
    DoubleIterator.call(this);
    this._index_13 = 0;
  }
  _no_name_provided__48.prototype._set_index__11 = function (_set___) {
    this._index_13 = _set___;
  };
  _no_name_provided__48.prototype._get_index__11 = function () {
    return this._index_13;
  };
  _no_name_provided__48.prototype.hasNext_43 = function () {
    return !(this._index_13 === this._$array_7.length);
  };
  _no_name_provided__48.prototype.nextDouble_0 = function () {
    var tmp;
    if (!(this._index_13 === this._$array_7.length)) {
      var tmp0_this = this;
      var tmp1 = tmp0_this._index_13;
      tmp0_this._index_13 = tmp1 + 1 | 0;
      tmp = this._$array_7[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this._index_13);
    }
    return tmp;
  };
  _no_name_provided__48.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _get_buf_() {
    return buf;
  }
  var buf;
  function _get_bufFloat64_() {
    return bufFloat64;
  }
  var bufFloat64;
  function _get_bufFloat32_() {
    return bufFloat32;
  }
  var bufFloat32;
  function _get_bufInt32_() {
    return bufInt32;
  }
  var bufInt32;
  function _get_lowIndex_() {
    return lowIndex;
  }
  var lowIndex;
  function _get_highIndex_() {
    return highIndex;
  }
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
  function bufFloat32$init$() {
    var tmp0_unsafeCast_0 = new Float32Array(buf);
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
  function DoNotIntrinsify() {
  }
  DoNotIntrinsify.$metadata$ = {
    simpleName: 'DoNotIntrinsify',
    kind: 'class',
    interfaces: [Annotation]
  };
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.charCodeAt(index);
      var tmp1_Char_0 = tmp0_unsafeCast_0;
      var tmp_0;
      Companion_getInstance_19();
      var tmp0__get_code__0_1 = new Char_0(0);
      if (tmp1_Char_0 < tmp0__get_code__0_1.toInt_6()) {
        tmp_0 = true;
      } else {
        {
          Companion_getInstance_19();
          var tmp1__get_code__0_2 = new Char_0(65535);
          tmp_0 = tmp1_Char_0 > tmp1__get_code__0_2.toInt_6();
        }
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + tmp1_Char_0);
      } else {
      }
      tmp = new Char_0(_UShort___init__impl_(toShort(tmp1_Char_0)));
    } else {
      tmp = a.get_39(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.length;
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a._get_length__0();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      var tmp0_unsafeCast_0 = a.substring(startIndex, endIndex);
      tmp = tmp0_unsafeCast_0;
    } else {
      tmp = a.subSequence_1(startIndex, endIndex);
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_30(), 24, null);
  }
  function _no_name_provided__49() {
  }
  _no_name_provided__49.prototype.invoke_67 = function (it_0) {
    return toString_1(it_0);
  };
  _no_name_provided__49.prototype.invoke_68 = function (p1) {
    return this.invoke_67((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__49.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_30() {
    var i = new _no_name_provided__49();
    return function (p1) {
      return i.invoke_67(p1);
    };
  }
  function compareTo_0(a, b) {
    var tmp0_subject = typeof a;
    var tmp;
    switch (tmp0_subject) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.toDouble_6());
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
    return a.compareTo_25(b);
  }
  function construct(constructorType, resultType, args) {
    return Reflect.construct(constructorType, args, resultType);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
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
  function _get_OBJECT_HASH_CODE_PROPERTY_NAME_() {
    return OBJECT_HASH_CODE_PROPERTY_NAME;
  }
  var OBJECT_HASH_CODE_PROPERTY_NAME;
  function _get_POW_2_32_() {
    return POW_2_32;
  }
  var POW_2_32;
  function toString_1(o) {
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
    var last_2 = length - 1 | 0;
    if (inductionVariable <= last_2)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last_2));
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
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
  function boxIntrinsic(x) {
    var tmp0_error_0 = 'Should be lowered';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  }
  function unboxIntrinsic(x) {
    var tmp0_error_0 = 'Should be lowered';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      instance.stack = (new Error()).stack;
    }
  }
  function newThrowable(message, cause) {
    var throwable = new Error();
    var tmp;
    if (isUndefined(message)) {
      var tmp_0;
      if (isUndefined(cause)) {
        tmp_0 = message;
      } else {
        var tmp0_safe_receiver = cause;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
        tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp2_elvis_lhs = message;
      tmp = tmp2_elvis_lhs == null ? undefined : tmp2_elvis_lhs;
    }
    throwable.message = tmp;
    throwable.cause = cause;
    throwable.name = 'Throwable';
    return throwable;
  }
  function isUndefined(value) {
    return value === undefined;
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
  function getContinuation() {
    throw Exception_init_$Create$_0('Implemented as intrinsic');
  }
  function returnIfSuspended(argument, $cont) {
    throw Exception_init_$Create$_0('Implemented as intrinsic');
  }
  function suspendCoroutineUninterceptedOrReturnJS(block, $cont) {
    return block($cont);
  }
  function getCoroutineContext($cont) {
    return $cont._get_context__4();
  }
  function unreachableDeclarationLog() {
    var tmp0_asDynamic_0 = console;
    tmp0_asDynamic_0.trace('Unreachable declaration');
  }
  function unreachableDeclarationException() {
    throw new Error('Unreachable declaration');
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
  function noWhenBranchMatchedException() {
    throw NoWhenBranchMatchedException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$_0('' + 'lateinit property ' + name + ' has not been initialized');
  }
  function throwKotlinNothingValueException() {
    throw KotlinNothingValueException_init_$Create$();
  }
  function THROW_ISE() {
    throw IllegalStateException_init_$Create$();
  }
  function THROW_IAE(msg) {
    throw IllegalArgumentException_init_$Create$_0(msg);
  }
  function emptyArray() {
    return [];
  }
  function JsFun(code) {
    this._code = code;
  }
  JsFun.prototype._get_code_ = function () {
    return this._code;
  };
  JsFun.$metadata$ = {
    simpleName: 'JsFun',
    kind: 'class',
    interfaces: [Annotation]
  };
  function enumValueOfIntrinsic(name) {
    throw IllegalStateException_init_$Create$_0('Should be replaced by compiler');
  }
  function enumValuesIntrinsic() {
    throw IllegalStateException_init_$Create$_0('Should be replaced by compiler');
  }
  function Companion_22() {
    Companion_instance_21 = this;
    this._MIN_VALUE_9 = new Long(0, -2147483648);
    this._MAX_VALUE_9 = new Long(-1, 2147483647);
    this._SIZE_BYTES_9 = 8;
    this._SIZE_BITS_9 = 64;
  }
  Companion_22.prototype._get_MIN_VALUE__9 = function () {
    return this._MIN_VALUE_9;
  };
  Companion_22.prototype._get_MAX_VALUE__9 = function () {
    return this._MAX_VALUE_9;
  };
  Companion_22.prototype._get_SIZE_BYTES__9 = function () {
    return this._SIZE_BYTES_9;
  };
  Companion_22.prototype._get_SIZE_BITS__9 = function () {
    return this._SIZE_BITS_9;
  };
  Companion_22.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_22();
    return Companion_instance_21;
  }
  function Long(low, high) {
    Companion_getInstance_21();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype._get_low_ = function () {
    return this._low;
  };
  Long.prototype._get_high_ = function () {
    return this._high;
  };
  Long.prototype.compareTo_53 = function (other) {
    return this.compareTo_56(toLong(other));
  };
  Long.prototype.compareTo_54 = function (other) {
    return this.compareTo_56(toLong(other));
  };
  Long.prototype.compareTo_55 = function (other) {
    return this.compareTo_56(toLong(other));
  };
  Long.prototype.compareTo_56 = function (other) {
    return compare(this, other);
  };
  Long.prototype.compareTo_25 = function (other) {
    return this.compareTo_56(other instanceof Long ? other : THROW_CCE());
  };
  Long.prototype.compareTo_57 = function (other) {
    return compareTo_0(this.toFloat_6(), other);
  };
  Long.prototype.compareTo_58 = function (other) {
    return compareTo_0(this.toDouble_6(), other);
  };
  Long.prototype.plus_35 = function (other) {
    return this.plus_38(toLong(other));
  };
  Long.prototype.plus_36 = function (other) {
    return this.plus_38(toLong(other));
  };
  Long.prototype.plus_37 = function (other) {
    return this.plus_38(toLong(other));
  };
  Long.prototype.plus_38 = function (other) {
    return add(this, other);
  };
  Long.prototype.plus_39 = function (other) {
    return this.toFloat_6() + other;
  };
  Long.prototype.plus_40 = function (other) {
    return this.toDouble_6() + other;
  };
  Long.prototype.minus_31 = function (other) {
    return this.minus_34(toLong(other));
  };
  Long.prototype.minus_32 = function (other) {
    return this.minus_34(toLong(other));
  };
  Long.prototype.minus_33 = function (other) {
    return this.minus_34(toLong(other));
  };
  Long.prototype.minus_34 = function (other) {
    return subtract(this, other);
  };
  Long.prototype.minus_35 = function (other) {
    return this.toFloat_6() - other;
  };
  Long.prototype.minus_36 = function (other) {
    return this.toDouble_6() - other;
  };
  Long.prototype.times_29 = function (other) {
    return this.times_32(toLong(other));
  };
  Long.prototype.times_30 = function (other) {
    return this.times_32(toLong(other));
  };
  Long.prototype.times_31 = function (other) {
    return this.times_32(toLong(other));
  };
  Long.prototype.times_32 = function (other) {
    return multiply(this, other);
  };
  Long.prototype.times_33 = function (other) {
    return this.toFloat_6() * other;
  };
  Long.prototype.times_34 = function (other) {
    return this.toDouble_6() * other;
  };
  Long.prototype.div_29 = function (other) {
    return this.div_32(toLong(other));
  };
  Long.prototype.div_30 = function (other) {
    return this.div_32(toLong(other));
  };
  Long.prototype.div_31 = function (other) {
    return this.div_32(toLong(other));
  };
  Long.prototype.div_32 = function (other) {
    return divide(this, other);
  };
  Long.prototype.div_33 = function (other) {
    return this.toFloat_6() / other;
  };
  Long.prototype.div_34 = function (other) {
    return this.toDouble_6() / other;
  };
  Long.prototype.rem_29 = function (other) {
    return this.rem_32(toLong(other));
  };
  Long.prototype.rem_30 = function (other) {
    return this.rem_32(toLong(other));
  };
  Long.prototype.rem_31 = function (other) {
    return this.rem_32(toLong(other));
  };
  Long.prototype.rem_32 = function (other) {
    return modulo(this, other);
  };
  Long.prototype.rem_33 = function (other) {
    return this.toFloat_6() % other;
  };
  Long.prototype.rem_34 = function (other) {
    return this.toDouble_6() % other;
  };
  Long.prototype.inc_5 = function () {
    return this.plus_38(new Long(1, 0));
  };
  Long.prototype.dec_5 = function () {
    return this.minus_34(new Long(1, 0));
  };
  Long.prototype.unaryPlus_4 = function () {
    return this;
  };
  Long.prototype.unaryMinus_4 = function () {
    return this.inv_0().plus_38(new Long(1, 0));
  };
  Long.prototype.rangeTo_12 = function (other) {
    return this.rangeTo_15(toLong(other));
  };
  Long.prototype.rangeTo_13 = function (other) {
    return this.rangeTo_15(toLong(other));
  };
  Long.prototype.rangeTo_14 = function (other) {
    return this.rangeTo_15(toLong(other));
  };
  Long.prototype.rangeTo_15 = function (other) {
    return new LongRange(this, other);
  };
  Long.prototype.shl_0 = function (bitCount) {
    return shiftLeft(this, bitCount);
  };
  Long.prototype.shr_0 = function (bitCount) {
    return shiftRight(this, bitCount);
  };
  Long.prototype.ushr_0 = function (bitCount) {
    return shiftRightUnsigned(this, bitCount);
  };
  Long.prototype.and = function (other) {
    return new Long(this._low & other._low, this._high & other._high);
  };
  Long.prototype.or = function (other) {
    return new Long(this._low | other._low, this._high | other._high);
  };
  Long.prototype.xor = function (other) {
    return new Long(this._low ^ other._low, this._high ^ other._high);
  };
  Long.prototype.inv_0 = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toByte_6 = function () {
    return toByte(this._low);
  };
  Long.prototype.toChar_6 = function () {
    return numberToChar(this._low);
  };
  Long.prototype.toShort_6 = function () {
    return toShort(this._low);
  };
  Long.prototype.toInt_6 = function () {
    return this._low;
  };
  Long.prototype.toLong_6 = function () {
    return this;
  };
  Long.prototype.toFloat_6 = function () {
    return this.toDouble_6();
  };
  Long.prototype.toDouble_6 = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_6();
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
  function _get_ZERO_() {
    return ZERO;
  }
  var ZERO;
  function _get_ONE_() {
    return ONE;
  }
  var ONE;
  function _get_NEG_ONE_() {
    return NEG_ONE;
  }
  var NEG_ONE;
  function _get_MAX_VALUE_() {
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function _get_MIN_VALUE_() {
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function _get_TWO_PWR_24__() {
    return TWO_PWR_24_;
  }
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
      throw Exception_init_$Create$_0('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_32(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_32(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_32(negate(other));
      } else {
        tmp = negate(negate(_this_).div_32(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_32(negate(other)));
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
  function modulo(_this_, other) {
    return subtract(_this_, multiply(_this_.div_32(other), other));
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
  function shiftRightUnsigned(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >>> numBits_0);
      } else {
        var tmp;
        if (numBits_0 === 32) {
          tmp = new Long(_this_._high, 0);
        } else {
          tmp = new Long(_this_._high >>> (numBits_0 - 32 | 0), 0);
        }
        return tmp;
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
      throw Exception_init_$Create$_0('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_32(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_6();
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
      var remDiv = rem_0.div_32(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_6();
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
  function _get_TWO_PWR_32_DBL__() {
    return TWO_PWR_32_DBL_;
  }
  var TWO_PWR_32_DBL_;
  function _get_TWO_PWR_63_DBL__() {
    return TWO_PWR_63_DBL_;
  }
  var TWO_PWR_63_DBL_;
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function withType(type, array) {
    array.$type$ = type;
    return array;
  }
  function arrayConcat(args) {
    var len = args.length;
    var tmp0_unsafeCast_0 = arrayConcat$outlinedJsCode$(len);
    var typed = tmp0_unsafeCast_0;
    var inductionVariable = 0;
    var last_2 = len - 1 | 0;
    if (inductionVariable <= last_2)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var arr = args[i];
        if (!(!(arr == null) ? isArray(arr) : false)) {
          typed[i] = [].slice.call(arr);
        } else {
          {
            typed[i] = arr;
          }
        }
      }
       while (!(i === last_2));
    return [].concat.apply([], typed);
  }
  function primitiveArrayConcat(args) {
    var size_local = 0;
    var inductionVariable = 0;
    var last_2 = args.length - 1 | 0;
    if (inductionVariable <= last_2)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = size_local;
        var tmp0_unsafeCast_0 = args[i];
        size_local = tmp + tmp0_unsafeCast_0.length | 0;
      }
       while (!(i === last_2));
    var a = args[0];
    var tmp1_unsafeCast_0 = primitiveArrayConcat$outlinedJsCode$_0(a, size_local);
    var result = tmp1_unsafeCast_0;
    if (a.$type$ != null) {
      var tmp2_withType_0 = a.$type$;
      result.$type$ = tmp2_withType_0;
    } else {
    }
    size_local = 0;
    var inductionVariable_0 = 0;
    var last_3 = args.length - 1 | 0;
    if (inductionVariable_0 <= last_3)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp3_unsafeCast_0 = args[i_0];
        var arr = tmp3_unsafeCast_0;
        var inductionVariable_1 = 0;
        var last_4 = arr.length - 1 | 0;
        if (inductionVariable_1 <= last_4)
          do {
            var j = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var tmp3 = size_local;
            size_local = tmp3 + 1 | 0;
            result[tmp3] = arr[j];
          }
           while (!(j === last_4));
      }
       while (!(i_0 === last_3));
    return result;
  }
  function taggedArrayCopy(array) {
    var res = array.slice();
    res.$type$ = array.$type$;
    return res;
  }
  function arrayConcat$outlinedJsCode$(len) {
    return Array(len);
  }
  function primitiveArrayConcat$outlinedJsCode$_0(a, size_local) {
    return new a.constructor(size_local);
  }
  function numberToByte(a) {
    return toByte(numberToInt(a));
  }
  function toByte(a) {
    var tmp0_unsafeCast_0 = toByte$outlinedJsCode$(a);
    return tmp0_unsafeCast_0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_6();
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
  function numberToDouble(a) {
    var tmp0_unsafeCast_0 = numberToDouble$outlinedJsCode$_0(a);
    return tmp0_unsafeCast_0;
  }
  function numberToShort(a) {
    return toShort(numberToInt(a));
  }
  function toShort(a) {
    var tmp0_unsafeCast_0 = toShort$outlinedJsCode$_1(a);
    return tmp0_unsafeCast_0;
  }
  function numberToLong(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a;
    } else {
      {
        tmp = fromNumber(a);
      }
    }
    return tmp;
  }
  function numberToChar(a) {
    var tmp0_Char_0 = numberToInt(a) & 65535;
    var tmp;
    Companion_getInstance_19();
    var tmp0__get_code__0_1 = new Char_0(0);
    if (tmp0_Char_0 < tmp0__get_code__0_1.toInt_6()) {
      tmp = true;
    } else {
      {
        Companion_getInstance_19();
        var tmp1__get_code__0_2 = new Char_0(65535);
        tmp = tmp0_Char_0 > tmp1__get_code__0_2.toInt_6();
      }
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$_0('' + 'Invalid Char code: ' + tmp0_Char_0);
    } else {
    }
    return new Char_0(_UShort___init__impl_(toShort(tmp0_Char_0)));
  }
  function toLong(a) {
    return fromInt(a);
  }
  function toByte$outlinedJsCode$(a) {
    return a << 24 >> 24;
  }
  function numberToDouble$outlinedJsCode$_0(a) {
    return +a;
  }
  function toShort$outlinedJsCode$_1(a) {
    return a << 16 >> 16;
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function numberRangeToLong(start, endInclusive) {
    return new LongRange(numberToLong(start), endInclusive);
  }
  function _get_propertyRefClassMetadataCache_() {
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function metadataObject() {
    return {kind: 'class', interfaces: []};
  }
  function getPropertyCallableRef(name, paramCount, type, getter, setter) {
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp0_unsafeCast_0 = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter, type));
    return tmp0_unsafeCast_0;
  }
  function getPropertyRefClass(obj, metadata) {
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    return obj;
  }
  function getKPropMetadata(paramCount, setter, type) {
    var mdata = propertyRefClassMetadataCache[paramCount][setter == null ? 0 : 1];
    if (mdata.interfaces.length == 0) {
      mdata.interfaces.push(type);
    }return mdata;
  }
  function getLocalDelegateReference(name, type, mutable, lambda) {
    return getPropertyCallableRef(name, 0, type, lambda, mutable ? lambda : null);
  }
  function propertyRefClassMetadataCache$init$() {
    var tmp = {kind: 'class', interfaces: []};
    var tmp0_arrayOf_0 = [tmp, {kind: 'class', interfaces: []}];
    var tmp_0 = tmp0_arrayOf_0;
    var tmp_1 = {kind: 'class', interfaces: []};
    var tmp1_arrayOf_0 = [tmp_1, {kind: 'class', interfaces: []}];
    var tmp_2 = tmp1_arrayOf_0;
    var tmp_3 = {kind: 'class', interfaces: []};
    var tmp2_arrayOf_0 = [tmp_3, {kind: 'class', interfaces: []}];
    var tmp3_arrayOf_0 = [tmp_0, tmp_2, tmp2_arrayOf_0];
    return tmp3_arrayOf_0;
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
      var last_2 = indexedObject.length;
      while (inductionVariable < last_2) {
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
  function isSuspendFunction(obj, arity) {
    if (typeof obj === 'function') {
      var tmp0_unsafeCast_0 = obj.$arity;
      return tmp0_unsafeCast_0 === arity;
    }return false;
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
  function isComparable(value) {
    var type = typeof value;
    return ((type === 'string' ? true : type === 'boolean') ? true : isNumber(value)) ? true : isInterface(value, _get_js_(getKClass_0(Comparable)));
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
  function jsIsType(obj, jsClass_0) {
    if (jsClass_0 === Object) {
      return isObject(obj);
    }if ((obj == null ? true : jsClass_0 == null) ? true : !(typeof obj === 'object') ? !(typeof obj === 'function') : false) {
      return false;
    }if (typeof jsClass_0 === 'function' ? jsInstanceOf(obj, jsClass_0) : false) {
      return true;
    }var proto = jsGetPrototypeOf(jsClass_0);
    var tmp0_safe_receiver = proto;
    var constructor = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.constructor;
    if (constructor != null ? jsIn('$metadata$', constructor) : false) {
      var metadata = constructor.$metadata$;
      if (metadata.kind === 'object') {
        return obj === jsClass_0;
      }}var klassMetadata = jsClass_0.$metadata$;
    if (klassMetadata == null) {
      return jsInstanceOf(obj, jsClass_0);
    }if (klassMetadata.kind === 'interface' ? obj.constructor != null : false) {
      return isInterfaceImpl(obj.constructor, jsClass_0);
    }return false;
  }
  function jsGetPrototypeOf(jsClass_0) {
    return Object.getPrototypeOf(jsClass_0);
  }
  function asList(_this_) {
    return new ArrayList(_this_);
  }
  function plus_1(_this_, elements) {
    return _this_.concat(elements);
  }
  function copyOfRange(_this_, fromIndex, toIndex) {
    Companion_getInstance().checkRangeIndexes(fromIndex, toIndex, _this_.length);
    return _this_.slice(fromIndex, toIndex);
  }
  function copyInto(_this_, destination, destinationOffset, startIndex, endIndex) {
    arrayCopy_0(_this_, destination, destinationOffset, startIndex, endIndex);
    return destination;
  }
  function copyOf(_this_) {
    return _this_.slice();
  }
  function reverse(_this_) {
    var midPoint = (_this_._get_size__36() / 2 | 0) - 1 | 0;
    if (midPoint < 0)
      return Unit_getInstance();
    var reverseIndex = _get_lastIndex__4(_this_);
    var inductionVariable = 0;
    if (inductionVariable <= midPoint)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = _this_.get_39(index);
        _this_.set_9(index, _this_.get_39(reverseIndex));
        Unit_getInstance();
        _this_.set_9(reverseIndex, tmp);
        Unit_getInstance();
        var tmp1 = reverseIndex;
        reverseIndex = tmp1 - 1 | 0;
        Unit_getInstance();
      }
       while (!(index === midPoint));
  }
  function minOf_1(a, b) {
    return function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Int32Array([a, b]))));
    }.call(this);
  }
  function minOf_2(a, b) {
    return function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.min.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([a, b]))));
    }.call(this);
  }
  function maxOf_0(a, b) {
    return function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([a, b]))));
    }.call(this);
  }
  function _get_resultContinuation_($this) {
    return $this._resultContinuation;
  }
  function _get__context_($this) {
    return $this.__context;
  }
  function _set_intercepted__($this, _set___) {
    $this._intercepted_ = _set___;
  }
  function _get_intercepted__($this) {
    return $this._intercepted_;
  }
  function releaseIntercepted($this) {
    var intercepted = $this._intercepted_;
    if (!(intercepted == null) ? !(intercepted === $this) : false) {
      ensureNotNull($this._get_context__4().get_9(Key_getInstance())).releaseInterceptedContinuation(intercepted);
    }$this._intercepted_ = CompletedContinuation_getInstance();
  }
  function CoroutineImpl_0(resultContinuation) {
    this._resultContinuation = resultContinuation;
    this._state_0 = 0;
    this._exceptionState = 0;
    this._result = null;
    this._exception_0 = null;
    this._finallyPath = null;
    var tmp = this;
    var tmp0_safe_receiver = this._resultContinuation;
    tmp.__context = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__4();
    this._intercepted_ = null;
  }
  CoroutineImpl_0.prototype._set_state__0 = function (_set___) {
    this._state_0 = _set___;
  };
  CoroutineImpl_0.prototype._get_state__0 = function () {
    return this._state_0;
  };
  CoroutineImpl_0.prototype._set_exceptionState_ = function (_set___) {
    this._exceptionState = _set___;
  };
  CoroutineImpl_0.prototype._get_exceptionState_ = function () {
    return this._exceptionState;
  };
  CoroutineImpl_0.prototype._set_result_ = function (_set___) {
    this._result = _set___;
  };
  CoroutineImpl_0.prototype._get_result__0 = function () {
    return this._result;
  };
  CoroutineImpl_0.prototype._set_exception_ = function (_set___) {
    this._exception_0 = _set___;
  };
  CoroutineImpl_0.prototype._get_exception__0 = function () {
    return this._exception_0;
  };
  CoroutineImpl_0.prototype._set_finallyPath_ = function (_set___) {
    this._finallyPath = _set___;
  };
  CoroutineImpl_0.prototype._get_finallyPath_ = function () {
    return this._finallyPath;
  };
  CoroutineImpl_0.prototype._get_context__4 = function () {
    return ensureNotNull(this.__context);
  };
  CoroutineImpl_0.prototype.intercepted = function () {
    var tmp2_elvis_lhs = this._intercepted_;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp0_safe_receiver = this._get_context__4().get_9(Key_getInstance());
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interceptContinuation(this);
      var tmp0_also_0 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
      this._intercepted_ = tmp0_also_0;
      tmp = tmp0_also_0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  CoroutineImpl_0.prototype.resumeWith_5 = function (result) {
    var current = this;
    var tmp;
    if (_Result___get_isFailure__impl_(result)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl_(result);
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    }
    var currentResult = tmp;
    var currentException = Result__exceptionOrNull_impl(result);
    while (true) {
      var tmp0_with_0 = current;
      if (currentException == null) {
        tmp0_with_0._result = currentResult;
      } else {
        tmp0_with_0._state_0 = tmp0_with_0._exceptionState;
        tmp0_with_0._exception_0 = currentException;
      }
      try {
        var outcome_2 = tmp0_with_0.doResume();
        if (outcome_2 === _get_COROUTINE_SUSPENDED_())
          return Unit_getInstance();
        currentResult = outcome_2;
        currentException = null;
      } catch ($p) {
        currentResult = null;
        currentException = $p;
      }
      releaseIntercepted(tmp0_with_0);
      var completion_4 = ensureNotNull(tmp0_with_0._resultContinuation);
      if (completion_4 instanceof CoroutineImpl_0) {
        current = completion_4;
      } else {
        {
          if (!(currentException == null)) {
            var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
            var tmp0_failure_0_1_6 = Companion_getInstance_4();
            completion_4.resumeWith_6(_Result___init__impl_(createFailure(tmp0_resumeWithException_0_5)));
          } else {
            var tmp1_resume_0_7 = currentResult;
            var tmp0_success_0_1_8 = Companion_getInstance_4();
            completion_4.resumeWith_6(_Result___init__impl_(tmp1_resume_0_7));
          }
          return Unit_getInstance();
        }
      }
    }
  };
  CoroutineImpl_0.prototype.resumeWith_6 = function (result) {
    return this.resumeWith_5(result);
  };
  CoroutineImpl_0.prototype.create = function (completion) {
    throw UnsupportedOperationException_init_$Create$_0('create(Continuation) has not been overridden');
  };
  CoroutineImpl_0.prototype.create_0 = function (value, completion) {
    throw UnsupportedOperationException_init_$Create$_0('create(Any?;Continuation) has not been overridden');
  };
  CoroutineImpl_0.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__4 = function () {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_5 = function (result) {
    var tmp0_error_0 = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$_0(toString_1(tmp0_error_0));
  };
  CompletedContinuation.prototype.resumeWith_6 = function (result) {
    return this.resumeWith_5(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$() {
    var tmp = Exception_init_$Init$(Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_0(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$_0);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_1(message, cause) {
    var tmp = Exception_init_$Init$_1(message, cause, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$_1);
    return tmp;
  }
  function Exception_init_$Init$_2(cause, $this) {
    extendThrowable($this, void 1, cause);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_2(cause) {
    var tmp = Exception_init_$Init$_2(cause, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$_2);
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
  function Error_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$() {
    var tmp = Error_init_$Init$(Object.create(Error_0.prototype));
    captureStack(tmp, Error_init_$Create$);
    return tmp;
  }
  function Error_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$_0(message) {
    var tmp = Error_init_$Init$_0(message, Object.create(Error_0.prototype));
    captureStack(tmp, Error_init_$Create$_0);
    return tmp;
  }
  function Error_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$_1(message, cause) {
    var tmp = Error_init_$Init$_1(message, cause, Object.create(Error_0.prototype));
    captureStack(tmp, Error_init_$Create$_1);
    return tmp;
  }
  function Error_init_$Init$_2(cause, $this) {
    extendThrowable($this, void 1, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$_2(cause) {
    var tmp = Error_init_$Init$_2(cause, Object.create(Error_0.prototype));
    captureStack(tmp, Error_init_$Create$_2);
    return tmp;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$() {
    var tmp = IllegalArgumentException_init_$Init$(Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_0(message) {
    var tmp = IllegalArgumentException_init_$Init$_0(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$_0);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_1(message, cause) {
    var tmp = IllegalArgumentException_init_$Init$_1(message, cause, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$_1);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_2(cause) {
    var tmp = IllegalArgumentException_init_$Init$_2(cause, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$_2);
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
  function RuntimeException_init_$Create$() {
    var tmp = RuntimeException_init_$Init$(Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_0(message) {
    var tmp = RuntimeException_init_$Init$_0(message, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$_0);
    return tmp;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_1(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$_1);
    return tmp;
  }
  function RuntimeException_init_$Init$_2(cause, $this) {
    Exception_init_$Init$_2(cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_2(cause) {
    var tmp = RuntimeException_init_$Init$_2(cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$_2);
    return tmp;
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
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_1(message, cause) {
    var tmp = IllegalStateException_init_$Init$_1(message, cause, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_1);
    return tmp;
  }
  function IllegalStateException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_2(cause) {
    var tmp = IllegalStateException_init_$Init$_2(cause, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$_2);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function AssertionError_init_$Init$($this) {
    Error_init_$Init$($this);
    AssertionError.call($this);
    return $this;
  }
  function AssertionError_init_$Create$() {
    var tmp = AssertionError_init_$Init$(Object.create(AssertionError.prototype));
    captureStack(tmp, AssertionError_init_$Create$);
    return tmp;
  }
  function AssertionError_init_$Init$_0(message, $this) {
    Error_init_$Init$_0(message, $this);
    AssertionError.call($this);
    return $this;
  }
  function AssertionError_init_$Create$_0(message) {
    var tmp = AssertionError_init_$Init$_0(message, Object.create(AssertionError.prototype));
    captureStack(tmp, AssertionError_init_$Create$_0);
    return tmp;
  }
  function AssertionError_init_$Init$_1(message, $this) {
    var tmp0_safe_receiver = message;
    var tmp = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    Error_init_$Init$_1(tmp, message instanceof Error ? message : null, $this);
    AssertionError.call($this);
    return $this;
  }
  function AssertionError_init_$Create$_1(message) {
    var tmp = AssertionError_init_$Init$_1(message, Object.create(AssertionError.prototype));
    captureStack(tmp, AssertionError_init_$Create$_1);
    return tmp;
  }
  function AssertionError_init_$Init$_2(message, cause, $this) {
    Error_init_$Init$_1(message, cause, $this);
    AssertionError.call($this);
    return $this;
  }
  function AssertionError_init_$Create$_2(message, cause) {
    var tmp = AssertionError_init_$Init$_2(message, cause, Object.create(AssertionError.prototype));
    captureStack(tmp, AssertionError_init_$Create$_2);
    return tmp;
  }
  function AssertionError() {
    captureStack(this, AssertionError);
  }
  AssertionError.$metadata$ = {
    simpleName: 'AssertionError',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$() {
    var tmp = IndexOutOfBoundsException_init_$Init$(Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$_0(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$_0(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
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
  function UnsupportedOperationException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_1(message, cause) {
    var tmp = UnsupportedOperationException_init_$Init$_1(message, cause, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_1);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_2(cause) {
    var tmp = UnsupportedOperationException_init_$Init$_2(cause, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_2);
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
  function NullPointerException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$_0(message) {
    var tmp = NullPointerException_init_$Init$_0(message, Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$_0);
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
  function NoWhenBranchMatchedException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$() {
    var tmp = NoWhenBranchMatchedException_init_$Init$(Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$);
    return tmp;
  }
  function NoWhenBranchMatchedException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$_0(message) {
    var tmp = NoWhenBranchMatchedException_init_$Init$_0(message, Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$_0);
    return tmp;
  }
  function NoWhenBranchMatchedException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$_1(message, cause) {
    var tmp = NoWhenBranchMatchedException_init_$Init$_1(message, cause, Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$_1);
    return tmp;
  }
  function NoWhenBranchMatchedException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    NoWhenBranchMatchedException.call($this);
    return $this;
  }
  function NoWhenBranchMatchedException_init_$Create$_2(cause) {
    var tmp = NoWhenBranchMatchedException_init_$Init$_2(cause, Object.create(NoWhenBranchMatchedException.prototype));
    captureStack(tmp, NoWhenBranchMatchedException_init_$Create$_2);
    return tmp;
  }
  function NoWhenBranchMatchedException() {
    captureStack(this, NoWhenBranchMatchedException);
  }
  NoWhenBranchMatchedException.$metadata$ = {
    simpleName: 'NoWhenBranchMatchedException',
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
  function ClassCastException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$_0(message) {
    var tmp = ClassCastException_init_$Init$_0(message, Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$_0);
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
  function UninitializedPropertyAccessException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$() {
    var tmp = UninitializedPropertyAccessException_init_$Init$(Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$_0(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$_0(message, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$_0);
    return tmp;
  }
  function UninitializedPropertyAccessException_init_$Init$_1(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$_1(message, cause) {
    var tmp = UninitializedPropertyAccessException_init_$Init$_1(message, cause, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$_1);
    return tmp;
  }
  function UninitializedPropertyAccessException_init_$Init$_2(cause, $this) {
    RuntimeException_init_$Init$_2(cause, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$_2(cause) {
    var tmp = UninitializedPropertyAccessException_init_$Init$_2(cause, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$_2);
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
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$_1(obj_hack, property_hack);
  }
  function jsTypeOf(value_hack) {
    var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$_2(value_hack);
    return tmp0_unsafeCast_0;
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$_3(obj_hack, jsClass_hack);
    return tmp0_unsafeCast_0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$_4(lhs_hack, rhs_hack);
    return tmp0_unsafeCast_0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$_0(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsDeleteProperty$outlinedJsCode$_1(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsTypeOf$outlinedJsCode$_2(value_hack) {
    return typeof value_hack;
  }
  function jsInstanceOf$outlinedJsCode$_3(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$_4(lhs_hack, rhs_hack) {
    return lhs_hack & rhs_hack;
  }
  function toString_2(_this_, radix) {
    return toStringImpl(_this_, checkRadix(radix));
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
  Pose2d.prototype._get_x__3 = function () {
    return this._x;
  };
  Pose2d.prototype._get_y__2 = function () {
    return this._y;
  };
  Pose2d.prototype._get_heading__0 = function () {
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
    return this.copy_2(x === void 1 ? this._x : x, y === void 1 ? this._y : y, heading === void 1 ? this._heading : heading);
  };
  Pose2d.prototype.copy_2 = function (x, y, heading) {
    return new Pose2d(x, y, heading);
  };
  Pose2d.prototype.copy$default_2 = function (x, y, heading, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this._x;
    if (!(($mask0 & 2) === 0))
      y = this._y;
    if (!(($mask0 & 4) === 0))
      heading = this._heading;
    return this.copy_2(x, y, heading);
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
    get: Pose2d.prototype._get_x__3
  });
  Object.defineProperty(Pose2d.prototype, 'y', {
    configurable: true,
    get: Pose2d.prototype._get_y__2
  });
  Object.defineProperty(Pose2d.prototype, 'heading', {
    configurable: true,
    get: Pose2d.prototype._get_heading__0
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
  function Companion_23() {
    Companion_instance_22 = this;
  }
  Companion_23.prototype.polar = function (r, theta) {
    var tmp = r * Math.cos(theta);
    return new Vector2d(tmp, r * Math.sin(theta));
  };
  Companion_23.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_23();
    return Companion_instance_22;
  }
  function Vector2d(x, y) {
    Companion_getInstance_22();
    var x_0 = x === void 1 ? 0.0 : x;
    var y_0 = y === void 1 ? 0.0 : y;
    this._x_0 = x_0;
    this._y_0 = y_0;
  }
  Vector2d.prototype._get_x__3 = function () {
    return this._x_0;
  };
  Vector2d.prototype._get_y__2 = function () {
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
    return this.copy_4(x === void 1 ? this._x_0 : x, y === void 1 ? this._y_0 : y);
  };
  Vector2d.prototype.copy_4 = function (x, y) {
    return new Vector2d(x, y);
  };
  Vector2d.prototype.copy$default_4 = function (x, y, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      x = this._x_0;
    if (!(($mask0 & 2) === 0))
      y = this._y_0;
    return this.copy_4(x, y);
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
    get: Vector2d.prototype._get_x__3
  });
  Object.defineProperty(Vector2d.prototype, 'y', {
    configurable: true,
    get: Vector2d.prototype._get_y__2
  });
  function Kinematics() {
    Kinematics_instance = this;
  }
  Kinematics.prototype.fieldToRobotVelocity = function (fieldPose, fieldVel) {
    var rotated = fieldVel.vec().rotated(-fieldPose._heading);
    return new Pose2d(rotated._x_0, rotated._y_0, fieldVel._heading);
  };
  Kinematics.prototype.fieldToRobotAcceleration = function (fieldPose, fieldVel, fieldAccel) {
    var rotated = fieldAccel.vec().rotated(-fieldPose._heading);
    var tmp = new Pose2d(rotated._x_0, rotated._y_0, fieldAccel._heading);
    var tmp_0 = -fieldVel._x;
    var tmp0_sin_0 = fieldPose._heading;
    var tmp_1 = tmp_0 * Math.sin(tmp0_sin_0);
    var tmp1_cos_0 = fieldPose._heading;
    var tmp_2 = tmp_1 + fieldVel._y * Math.cos(tmp1_cos_0);
    var tmp_3 = -fieldVel._x;
    var tmp2_cos_0 = fieldPose._heading;
    var tmp_4 = tmp_3 * Math.cos(tmp2_cos_0);
    var tmp3_sin_0 = fieldPose._heading;
    return tmp.plus((new Pose2d(tmp_2, tmp_4 - fieldVel._y * Math.sin(tmp3_sin_0), 0.0)).times(fieldVel._heading));
  };
  Kinematics.prototype.calculateFieldPoseError = function (targetFieldPose, currentFieldPose) {
    var rotated = targetFieldPose.minus(currentFieldPose).vec();
    return new Pose2d(rotated._x_0, rotated._y_0, Angle_getInstance().normDelta(targetFieldPose._heading - currentFieldPose._heading));
  };
  Kinematics.prototype.calculateRobotPoseError = function (targetFieldPose, currentFieldPose) {
    var errorInFieldFrame = this.calculateFieldPoseError(targetFieldPose, currentFieldPose);
    var rotated = errorInFieldFrame.vec().rotated(-currentFieldPose._heading);
    return new Pose2d(rotated._x_0, rotated._y_0, errorInFieldFrame._heading);
  };
  Kinematics.prototype.calculateMotorFeedforward = function (vels, accels, kV, kA, kStatic) {
    var tmp0_map_0 = zip(vels, accels);
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_51();
    while (tmp0_iterator_1_2.hasNext_43()) {
      var item_2_3 = tmp0_iterator_1_2.next_48();
      var vel_5 = item_2_3.component1_1();
      var accel_6 = item_2_3.component2_1();
      tmp0_mapTo_0_1.add_22(Kinematics_getInstance().calculateMotorFeedforward_0(vel_5, accel_6, kV, kA, kStatic));
      Unit_getInstance();
    }
    return tmp0_mapTo_0_1;
  };
  Kinematics.prototype.calculateMotorFeedforward_0 = function (vel, accel, kV, kA, kStatic) {
    var basePower = vel * kV + accel * kA;
    var tmp;
    if (epsilonEquals(basePower, 0.0)) {
      tmp = 0.0;
    } else {
      tmp = basePower + Math.sign(basePower) * kStatic;
    }
    return tmp;
  };
  Kinematics.prototype.relativeOdometryUpdate = function (fieldPose, robotPoseDelta) {
    var dtheta = robotPoseDelta._heading;
    var tmp;
    if (epsilonEquals(dtheta, 0.0)) {
      tmp = to(1.0 - dtheta * dtheta / 6.0, dtheta / 2.0);
    } else {
      var tmp_0 = Math.sin(dtheta) / dtheta;
      tmp = to(tmp_0, (1 - Math.cos(dtheta)) / dtheta);
    }
    var tmp0_container = tmp;
    var sineTerm = tmp0_container.component1_1();
    var cosTerm = tmp0_container.component2_1();
    var fieldPositionDelta = new Vector2d(sineTerm * robotPoseDelta._x - cosTerm * robotPoseDelta._y, cosTerm * robotPoseDelta._x + sineTerm * robotPoseDelta._y);
    var rotated = fieldPositionDelta.rotated(fieldPose._heading);
    var fieldPoseDelta = new Pose2d(rotated._x_0, rotated._y_0, robotPoseDelta._heading);
    return new Pose2d(fieldPose._x + fieldPoseDelta._x, fieldPose._y + fieldPoseDelta._y, Angle_getInstance().norm(fieldPose._heading + fieldPoseDelta._heading));
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
  MecanumKinematics.prototype.robotToWheelVelocities$default = function (robotVel, trackWidth, wheelBase, lateralMultiplier, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      wheelBase = trackWidth;
    if (!(($mask0 & 8) === 0))
      lateralMultiplier = 1.0;
    return this.robotToWheelVelocities(robotVel, trackWidth, wheelBase, lateralMultiplier);
  };
  MecanumKinematics.prototype.robotToWheelAccelerations = function (robotAccel, trackWidth, wheelBase, lateralMultiplier) {
    return this.robotToWheelVelocities(robotAccel, trackWidth, wheelBase, lateralMultiplier);
  };
  MecanumKinematics.prototype.robotToWheelAccelerations$default = function (robotAccel, trackWidth, wheelBase, lateralMultiplier, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      wheelBase = trackWidth;
    if (!(($mask0 & 8) === 0))
      lateralMultiplier = 1.0;
    return this.robotToWheelAccelerations(robotAccel, trackWidth, wheelBase, lateralMultiplier);
  };
  MecanumKinematics.prototype.wheelToRobotVelocities = function (wheelVelocities, trackWidth, wheelBase, lateralMultiplier) {
    var k = (trackWidth + wheelBase) / 2.0;
    var tmp0_container = wheelVelocities;
    var frontLeft = tmp0_container.get_39(0);
    var rearLeft = tmp0_container.get_39(1);
    var rearRight = tmp0_container.get_39(2);
    var frontRight = tmp0_container.get_39(3);
    return (new Pose2d(sum(wheelVelocities), (rearLeft + frontRight - frontLeft - rearRight) / lateralMultiplier, (rearRight + frontRight - frontLeft - rearLeft) / k)).times(0.25);
  };
  MecanumKinematics.prototype.wheelToRobotVelocities$default = function (wheelVelocities, trackWidth, wheelBase, lateralMultiplier, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      wheelBase = trackWidth;
    if (!(($mask0 & 8) === 0))
      lateralMultiplier = 1.0;
    return this.wheelToRobotVelocities(wheelVelocities, trackWidth, wheelBase, lateralMultiplier);
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
  function _get_start_($this) {
    return $this._start;
  }
  function _get_diff_($this) {
    return $this._diff;
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
    return this.get_44(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.get_44 = function (s, t) {
    return this.internalGet_1(t);
  };
  ParametricCurve.prototype.get$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.get_44(s, t);
  };
  ParametricCurve.prototype.deriv = function (s, t) {
    return this.deriv_5(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.deriv_5 = function (s, t) {
    return this.internalDeriv_3(t).times(this.paramDeriv_1(t));
  };
  ParametricCurve.prototype.deriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.deriv_5(s, t);
  };
  ParametricCurve.prototype.secondDeriv = function (s, t) {
    return this.secondDeriv_5(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.secondDeriv_5 = function (s, t) {
    var deriv = this.internalDeriv_3(t);
    var secondDeriv = this.internalSecondDeriv_3(t);
    var paramDeriv = this.paramDeriv_1(t);
    var paramSecondDeriv = this.paramSecondDeriv_1(t);
    return secondDeriv.times(paramDeriv).times(paramDeriv).plus(deriv.times(paramSecondDeriv));
  };
  ParametricCurve.prototype.secondDeriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.secondDeriv_5(s, t);
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
    return this.get_44(0.0, 0.0);
  };
  ParametricCurve.prototype.startDeriv = function () {
    return this.deriv_5(0.0, 0.0);
  };
  ParametricCurve.prototype.startSecondDeriv = function () {
    return this.secondDeriv_5(0.0, 0.0);
  };
  ParametricCurve.prototype.startThirdDeriv = function () {
    return this.thirdDeriv_0(0.0, 0.0);
  };
  ParametricCurve.prototype.end = function () {
    return this.get_44(this.length(), 1.0);
  };
  ParametricCurve.prototype.endDeriv = function () {
    return this.deriv_5(this.length(), 1.0);
  };
  ParametricCurve.prototype.endSecondDeriv = function () {
    return this.secondDeriv_5(this.length(), 1.0);
  };
  ParametricCurve.prototype.endThirdDeriv = function () {
    return this.thirdDeriv_0(this.length(), 1.0);
  };
  ParametricCurve.prototype.tangentAngle = function (s, t) {
    return this.tangentAngle_1(s, t === void 1 ? this.reparam_2(s) : t);
  };
  ParametricCurve.prototype.tangentAngle_1 = function (s, t) {
    return this.deriv_5(s, t).angle();
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
    var deriv = this.deriv_5(s, t);
    var secondDeriv = this.secondDeriv_5(s, t);
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
    var deriv = this.deriv_5(s, t);
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
    var last_2 = indexedObject.length;
    while (inductionVariable < last_2) {
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
    var last_2 = indexedObject.length;
    while (inductionVariable < last_2) {
      var segment = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (remainingDisplacement <= segment.length()) {
        return to(segment, remainingDisplacement);
      }remainingDisplacement = remainingDisplacement - segment.length();
    }
    return to(last(this._segments), last(this._segments).length());
  };
  Path.prototype.get = function (s, t) {
    return this.get_44(s, t === void 1 ? this.reparam_2(s) : t);
  };
  Path.prototype.get_44 = function (s, t) {
    var tmp0_container = this.segment(s);
    var segment = tmp0_container.component1_1();
    var remainingDisplacement = tmp0_container.component2_1();
    return segment.get_44(remainingDisplacement, t);
  };
  Path.prototype.get$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.get_44(s, t);
  };
  Path.prototype.getSingleParam = function (s) {
    return this.get_44(s, this.reparam_2(s));
  };
  Path.prototype.deriv = function (s, t) {
    return this.deriv_5(s, t === void 1 ? this.reparam_2(s) : t);
  };
  Path.prototype.deriv_5 = function (s, t) {
    var tmp0_container = this.segment(s);
    var segment = tmp0_container.component1_1();
    var remainingDisplacement = tmp0_container.component2_1();
    return segment.deriv_5(remainingDisplacement, t);
  };
  Path.prototype.deriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.deriv_5(s, t);
  };
  Path.prototype.secondDeriv = function (s, t) {
    return this.secondDeriv_5(s, t === void 1 ? this.reparam_2(s) : t);
  };
  Path.prototype.secondDeriv_5 = function (s, t) {
    var tmp0_container = this.segment(s);
    var segment = tmp0_container.component1_1();
    var remainingDisplacement = tmp0_container.component2_1();
    return segment.secondDeriv_5(remainingDisplacement, t);
  };
  Path.prototype.secondDeriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam_2(s);
    return this.secondDeriv_5(s, t);
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
          var pathPoint_5 = this.get_44(s, t_4).vec();
          var deriv_6 = this.deriv_5(s, t_4).vec();
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
    var guesses = Companion_getInstance_23().fromClosedInterval(0.0, this.length(), samples);
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(guesses, 10));
    var tmp0_iterator_1_2 = guesses.iterator_51();
    while (tmp0_iterator_1_2.hasNext_43()) {
      var item_2_3 = tmp0_iterator_1_2.next_48();
      tmp0_mapTo_0_1.add_22(this.fastProject_0(queryPoint, item_2_3));
      Unit_getInstance();
    }
    var results = tmp0_mapTo_0_1;
    var tmp$ret$0;
    l$ret$1: do {
      var iterator_1 = results.iterator_51();
      if (!iterator_1.hasNext_43()) {
        tmp$ret$0 = null;
        break l$ret$1;
      }var minElem_2 = iterator_1.next_48();
      if (!iterator_1.hasNext_43()) {
        tmp$ret$0 = minElem_2;
        break l$ret$1;
      }var tmp0__anonymous__6 = minElem_2;
      var minValue_3 = this.get$default_3(tmp0__anonymous__6, 0.0, 2, null).vec().distTo(queryPoint);
      do {
        var e_4 = iterator_1.next_48();
        var v_5 = this.get$default_3(e_4, 0.0, 2, null).vec().distTo(queryPoint);
        if (compareTo_0(minValue_3, v_5) > 0) {
          minElem_2 = e_4;
          minValue_3 = v_5;
        }}
       while (iterator_1.hasNext_43());
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
  function PathBuilder_init_$Init$(startPose, startTangent, $this) {
    PathBuilder.call($this, startPose, startTangent, null, null);
    return $this;
  }
  function PathBuilder_init_$Create$(startPose, startTangent) {
    return PathBuilder_init_$Init$(startPose, startTangent, Object.create(PathBuilder.prototype));
  }
  function PathBuilder_init_$Init$_0(startPose, startTangent, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      startTangent = startPose._heading;
    PathBuilder_init_$Init$(startPose, startTangent, $this);
    return $this;
  }
  function PathBuilder_init_$Create$_0(startPose, startTangent, $mask0, $marker) {
    return PathBuilder_init_$Init$_0(startPose, startTangent, $mask0, $marker, Object.create(PathBuilder.prototype));
  }
  function PathBuilder_init_$Init$_1(startPose, reversed_1, $this) {
    PathBuilder_init_$Init$(startPose, Angle_getInstance().norm(startPose._heading + (reversed_1 ? 3.141592653589793 : 0.0)), $this);
    return $this;
  }
  function PathBuilder_init_$Create$_1(startPose, reversed_1) {
    return PathBuilder_init_$Init$_1(startPose, reversed_1, Object.create(PathBuilder.prototype));
  }
  function PathBuilder_init_$Init$_2(path, s, $this) {
    PathBuilder.call($this, null, null, path, s);
    return $this;
  }
  function PathBuilder_init_$Create$_2(path, s) {
    return PathBuilder_init_$Init$_2(path, s, Object.create(PathBuilder.prototype));
  }
  function _set_currentPose_($this, _set___) {
    $this._currentPose = _set___;
  }
  function _get_currentPose_($this) {
    return $this._currentPose;
  }
  function _set_currentTangent_($this, _set___) {
    $this._currentTangent = _set___;
  }
  function _get_currentTangent_($this) {
    return $this._currentTangent;
  }
  function _set_segments_($this, _set___) {
    $this._segments_0 = _set___;
  }
  function _get_segments_($this) {
    return $this._segments_0;
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
      var tmp_5 = Knot_init_$Create$_0(startPose.vec(), startDeriv, startSecondDeriv);
      var tmp_6 = Companion_getInstance_22().polar(derivMag, endTangent);
      tmp_2 = to(tmp_5, Knot_init_$Create$_1(endPosition, tmp_6, null, 4, null));
    } else {
      var tmp_7 = startPose.vec();
      var tmp_8 = Companion_getInstance_22().polar(derivMag, ensureNotNull($this._currentTangent));
      var tmp_9 = Knot_init_$Create$_1(tmp_7, tmp_8, null, 4, null);
      var tmp_10 = Companion_getInstance_22().polar(derivMag, endTangent);
      tmp_2 = to(tmp_9, Knot_init_$Create$_1(endPosition, tmp_10, null, 4, null));
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
    if (!tmp0_isNotEmpty_0.isEmpty_47()) {
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
    $this._segments_0.add_22(segment);
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
  PathBuilder.prototype._get_path__0 = function () {
    return this._path;
  };
  PathBuilder.prototype._get_s_ = function () {
    return this._s;
  };
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
    return this.lineTo(start.vec().plus(Companion_getInstance_22().polar(distance, start._heading)));
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
    return this.strafeTo(start.vec().plus(Companion_getInstance_22().polar(distance, start._heading + 1.5707963267948966)));
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
  function EmptyPathSegmentException() {
    PathBuilderException.call(this);
    captureStack(this, EmptyPathSegmentException);
  }
  EmptyPathSegmentException.$metadata$ = {
    simpleName: 'EmptyPathSegmentException',
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
  function PathBuilderException() {
    RuntimeException_init_$Init$(this);
    captureStack(this, PathBuilderException);
  }
  PathBuilderException.$metadata$ = {
    simpleName: 'PathBuilderException',
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
    return this.get_44(s, t === void 1 ? this.reparam(s) : t);
  };
  PathSegment.prototype.get_44 = function (s, t) {
    return new Pose2d(this._curve.get_44(s, t)._x_0, this._curve.get_44(s, t)._y_0, this._interpolator.get_44(s, t));
  };
  PathSegment.prototype.get$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam(s);
    return this.get_44(s, t);
  };
  PathSegment.prototype.deriv = function (s, t) {
    return this.deriv_5(s, t === void 1 ? this.reparam(s) : t);
  };
  PathSegment.prototype.deriv_5 = function (s, t) {
    return new Pose2d(this._curve.deriv_5(s, t)._x_0, this._curve.deriv_5(s, t)._y_0, this._interpolator.deriv_5(s, t));
  };
  PathSegment.prototype.deriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam(s);
    return this.deriv_5(s, t);
  };
  PathSegment.prototype.secondDeriv = function (s, t) {
    return this.secondDeriv_5(s, t === void 1 ? this.reparam(s) : t);
  };
  PathSegment.prototype.secondDeriv_5 = function (s, t) {
    return new Pose2d(this._curve.secondDeriv_5(s, t)._x_0, this._curve.secondDeriv_5(s, t)._y_0, this._interpolator.secondDeriv_5(s, t));
  };
  PathSegment.prototype.secondDeriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this.reparam(s);
    return this.secondDeriv_5(s, t);
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
    var coeff2 = isArray(tmp_6) ? tmp_6 : THROW_CCE();
    this._a = coeff2[0][0];
    this._b = coeff2[1][0];
    this._c = coeff2[2][0];
    this._d = coeff2[3][0];
    this._e = coeff2[4][0];
    this._f = coeff2[5][0];
  }
  QuinticPolynomial.prototype._get_a__0 = function () {
    return this._a;
  };
  QuinticPolynomial.prototype._get_b_ = function () {
    return this._b;
  };
  QuinticPolynomial.prototype._get_c_ = function () {
    return this._c;
  };
  QuinticPolynomial.prototype._get_d_ = function () {
    return this._d;
  };
  QuinticPolynomial.prototype._get_e_ = function () {
    return this._e;
  };
  QuinticPolynomial.prototype._get_f_ = function () {
    return this._f;
  };
  QuinticPolynomial.prototype.get_50 = function (t) {
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
  function Knot_init_$Init$(x, y, dx, dy, d2x, d2y, $mask0, $marker, $this) {
    if (!(($mask0 & 4) === 0))
      dx = 0.0;
    if (!(($mask0 & 8) === 0))
      dy = 0.0;
    if (!(($mask0 & 16) === 0))
      d2x = 0.0;
    if (!(($mask0 & 32) === 0))
      d2y = 0.0;
    Knot.call($this, x, y, dx, dy, d2x, d2y);
    return $this;
  }
  function Knot_init_$Create$(x, y, dx, dy, d2x, d2y, $mask0, $marker) {
    return Knot_init_$Init$(x, y, dx, dy, d2x, d2y, $mask0, $marker, Object.create(Knot.prototype));
  }
  function Knot_init_$Init$_0(pos, deriv, secondDeriv, $this) {
    Knot.call($this, pos._x_0, pos._y_0, deriv._x_0, deriv._y_0, secondDeriv._x_0, secondDeriv._y_0);
    return $this;
  }
  function Knot_init_$Create$_0(pos, deriv, secondDeriv) {
    return Knot_init_$Init$_0(pos, deriv, secondDeriv, Object.create(Knot.prototype));
  }
  function Knot_init_$Init$_1(pos, deriv, secondDeriv, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0)) {
      deriv = Vector2d_init_$Create$(0.0, 0.0, 3, null);
    }if (!(($mask0 & 4) === 0)) {
      secondDeriv = Vector2d_init_$Create$(0.0, 0.0, 3, null);
    }Knot_init_$Init$_0(pos, deriv, secondDeriv, $this);
    return $this;
  }
  function Knot_init_$Create$_1(pos, deriv, secondDeriv, $mask0, $marker) {
    return Knot_init_$Init$_1(pos, deriv, secondDeriv, $mask0, $marker, Object.create(Knot.prototype));
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
  function _get_maxDeltaK_($this) {
    return $this._maxDeltaK;
  }
  function _get_maxSegmentLength_($this) {
    return $this._maxSegmentLength;
  }
  function _get_maxDepth_($this) {
    return $this._maxDepth;
  }
  function Knot(x, y, dx, dy, d2x, d2y) {
    this._x_1 = x;
    this._y_1 = y;
    this._dx = dx;
    this._dy = dy;
    this._d2x = d2x;
    this._d2y = d2y;
  }
  Knot.prototype._get_x__3 = function () {
    return this._x_1;
  };
  Knot.prototype._get_y__2 = function () {
    return this._y_1;
  };
  Knot.prototype._get_dx_ = function () {
    return this._dx;
  };
  Knot.prototype._get_dy_ = function () {
    return this._dy;
  };
  Knot.prototype._get_d2x_ = function () {
    return this._d2x;
  };
  Knot.prototype._get_d2y_ = function () {
    return this._d2y;
  };
  Knot.prototype.pos = function () {
    return new Vector2d(this._x_1, this._y_1);
  };
  Knot.prototype.deriv_4 = function () {
    return new Vector2d(this._dx, this._dy);
  };
  Knot.prototype.secondDeriv_4 = function () {
    return new Vector2d(this._d2x, this._d2y);
  };
  Knot.$metadata$ = {
    simpleName: 'Knot',
    kind: 'class',
    interfaces: []
  };
  function _set_length_($this, _set___) {
    $this._length = _set___;
  }
  function _get_length_($this) {
    return $this._length;
  }
  function _get_sSamples_($this) {
    return $this._sSamples;
  }
  function _get_tSamples_($this) {
    return $this._tSamples;
  }
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
      $this._sSamples.add_22($this._length);
      Unit_getInstance();
      $this._tSamples.add_22(tHi);
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
    this._sSamples = mutableListOf_0([0.0]);
    this._tSamples = mutableListOf_0([0.0]);
    parameterize$default(this, 0.0, 1.0, null, null, 0, 56, null);
  }
  QuinticSpline.prototype._get_x__3 = function () {
    return this._x_2;
  };
  QuinticSpline.prototype._get_y__2 = function () {
    return this._y_2;
  };
  QuinticSpline.prototype.internalGet_1 = function (t) {
    return new Vector2d(this._x_2.get_50(t), this._y_2.get_50(t));
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
    var hi = this._sSamples._get_size__36();
    while (lo <= hi) {
      var mid = (hi + lo | 0) / 2 | 0;
      if (s < this._sSamples.get_39(mid)) {
        hi = mid - 1 | 0;
      } else if (s > this._sSamples.get_39(mid)) {
        lo = mid + 1 | 0;
      } else {
        return this._tSamples.get_39(mid);
      }
    }
    return interp(this, s, this._sSamples.get_39(lo), this._sSamples.get_39(hi), this._tSamples.get_39(lo), this._tSamples.get_39(hi));
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
  ConstantInterpolator.prototype._get_heading__0 = function () {
    return this._heading_0;
  };
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
    return this.get_44(s, t === void 1 ? this._get_curve__4().reparam_2(s) : t);
  };
  HeadingInterpolator.prototype.get_44 = function (s, t) {
    return this.internalGet_6(s, t);
  };
  HeadingInterpolator.prototype.get$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this._get_curve__4().reparam_2(s);
    return this.get_44(s, t);
  };
  HeadingInterpolator.prototype.deriv = function (s, t) {
    return this.deriv_5(s, t === void 1 ? this._get_curve__4().reparam_2(s) : t);
  };
  HeadingInterpolator.prototype.deriv_5 = function (s, t) {
    return this.internalDeriv_8(s, t);
  };
  HeadingInterpolator.prototype.deriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this._get_curve__4().reparam_2(s);
    return this.deriv_5(s, t);
  };
  HeadingInterpolator.prototype.secondDeriv = function (s, t) {
    return this.secondDeriv_5(s, t === void 1 ? this._get_curve__4().reparam_2(s) : t);
  };
  HeadingInterpolator.prototype.secondDeriv_5 = function (s, t) {
    return this.internalSecondDeriv_8(s, t);
  };
  HeadingInterpolator.prototype.secondDeriv$default_3 = function (s, t, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      t = this._get_curve__4().reparam_2(s);
    return this.secondDeriv_5(s, t);
  };
  HeadingInterpolator.prototype.start = function () {
    return this.get_44(0.0, 0.0);
  };
  HeadingInterpolator.prototype.startDeriv = function () {
    return this.deriv_5(0.0, 0.0);
  };
  HeadingInterpolator.prototype.startSecondDeriv = function () {
    return this.secondDeriv_5(0.0, 0.0);
  };
  HeadingInterpolator.prototype.end = function () {
    return this.get_44(this._get_curve__4().length(), 1.0);
  };
  HeadingInterpolator.prototype.endDeriv = function () {
    return this.deriv_5(this._get_curve__4().length(), 1.0);
  };
  HeadingInterpolator.prototype.endSecondDeriv = function () {
    return this.secondDeriv_5(this._get_curve__4().length(), 1.0);
  };
  HeadingInterpolator.$metadata$ = {
    simpleName: 'HeadingInterpolator',
    kind: 'class',
    interfaces: []
  };
  function _get_startHeading_($this) {
    return $this._startHeading;
  }
  function _get_angle_($this) {
    return $this._angle;
  }
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
  function _get_startHeading__0($this) {
    return $this._startHeading_0;
  }
  function _get_endHeading_($this) {
    return $this._endHeading;
  }
  function _get_startHeadingDeriv_($this) {
    return $this._startHeadingDeriv;
  }
  function _get_startHeadingSecondDeriv_($this) {
    return $this._startHeadingSecondDeriv;
  }
  function _get_endHeadingDeriv_($this) {
    return $this._endHeadingDeriv;
  }
  function _get_endHeadingSecondDeriv_($this) {
    return $this._endHeadingSecondDeriv;
  }
  function _get_tangentInterpolator_($this) {
    return $this._tangentInterpolator;
  }
  function _set_headingSpline_($this, _set___) {
    $this._headingSpline = _set___;
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
    return Angle_getInstance().norm(this._startHeading_0 + _get_headingSpline_(this).get_50(s / this._get_curve__4().length()));
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
  TangentInterpolator.prototype._get_offset_ = function () {
    return this._offset;
  };
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
    var tmp0_iterator = this._segments_1.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var segment = tmp0_iterator.next_48();
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
    var tmp0_iterator_2 = tmp0_sumByDouble_0.iterator_51();
    while (tmp0_iterator_2.hasNext_43()) {
      var element_3 = tmp0_iterator_2.next_48();
      var tmp = sum_1;
      sum_1 = tmp + element_3._dt;
    }
    return sum_1;
  };
  MotionProfile.prototype.reversed = function () {
    var tmp0_map_0 = this._segments_1;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_51();
    while (tmp0_iterator_1_2.hasNext_43()) {
      var item_2_3 = tmp0_iterator_1_2.next_48();
      tmp0_mapTo_0_1.add_22(item_2_3.reversed());
      Unit_getInstance();
    }
    var tmp1_toTypedArray_0 = reversed(tmp0_mapTo_0_1);
    return new MotionProfile(copyToArray_0(tmp1_toTypedArray_0));
  };
  MotionProfile.prototype.flipped = function () {
    var tmp0_map_0 = this._segments_1;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_51();
    while (tmp0_iterator_1_2.hasNext_43()) {
      var item_2_3 = tmp0_iterator_1_2.next_48();
      tmp0_mapTo_0_1.add_22(item_2_3.flipped());
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
  function _set_currentState_($this, _set___) {
    $this._currentState = _set___;
  }
  function _get_currentState_($this) {
    return $this._currentState;
  }
  function _get_segments__0($this) {
    return $this._segments_2;
  }
  function MotionProfileBuilder(start) {
    this._currentState = start;
    var tmp = this;
    tmp._segments_2 = ArrayList_init_$Create$();
  }
  MotionProfileBuilder.prototype.appendJerkControl = function (jerk, dt) {
    var segment = new MotionSegment(new MotionState(this._currentState._x_3, this._currentState._v, this._currentState._a_0, jerk), dt);
    this._segments_2.add_22(segment);
    Unit_getInstance();
    this._currentState = segment.end();
    return this;
  };
  MotionProfileBuilder.prototype.appendAccelerationControl = function (accel, dt) {
    var tmp = this._currentState._x_3;
    var tmp_0 = this._currentState._v;
    var segment = new MotionSegment(MotionState_init_$Create$(tmp, tmp_0, accel, 0.0, 8, null), dt);
    this._segments_2.add_22(segment);
    Unit_getInstance();
    this._currentState = segment.end();
    return this;
  };
  MotionProfileBuilder.prototype.appendProfile = function (profile) {
    var tmp0_iterator = profile._segments_1.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var segment = tmp0_iterator.next_48();
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
            var tmp0_iterator_1_2 = roots.iterator_51();
            while (tmp0_iterator_1_2.hasNext_43()) {
              var element_2_3 = tmp0_iterator_1_2.next_48();
              if (element_2_3 >= 0.0) {
                tmp0_filterTo_0_1.add_22(element_2_3);
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
          var tmp0_iterator_1_2_0 = roots_0.iterator_51();
          while (tmp0_iterator_1_2_0.hasNext_43()) {
            var element_2_3_0 = tmp0_iterator_1_2_0.next_48();
            if (element_2_3_0 >= 0.0) {
              tmp0_filterTo_0_1_0.add_22(element_2_3_0);
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
    var dx = displacements._step_9;
    var lastState = start;
    var tmp0_forEach_0 = dropLast(zip(displacements, constraints), 1);
    var tmp0_iterator_1 = tmp0_forEach_0.iterator_51();
    while (tmp0_iterator_1.hasNext_43()) {
      var element_2 = tmp0_iterator_1.next_48();
      var displacement_4 = element_2.component1_1();
      var constraint_5 = element_2.component2_1();
      var maxVel_6 = constraint_5._maxVel;
      var maxAccel_7 = constraint_5._maxAccel;
      var tmp;
      if (lastState._v >= maxVel_6) {
        var state_8 = MotionState_init_$Create$(displacement_4, maxVel_6, 0.0, 0.0, 8, null);
        forwardStates.add_22(new Pair(state_8, dx));
        Unit_getInstance();
        tmp = afterDisplacement(MotionProfileGenerator_getInstance(), state_8, dx);
      } else {
        var tmp0_sqrt_0_10 = lastState._v * lastState._v + 2 * maxAccel_7 * dx;
        var finalVel_9 = Math.sqrt(tmp0_sqrt_0_10);
        var tmp_0;
        if (finalVel_9 <= maxVel_6) {
          var tmp_1 = lastState._v;
          var state_11 = MotionState_init_$Create$(displacement_4, tmp_1, maxAccel_7, 0.0, 8, null);
          forwardStates.add_22(new Pair(state_11, dx));
          Unit_getInstance();
          tmp_0 = afterDisplacement(MotionProfileGenerator_getInstance(), state_11, dx);
        } else {
          var accelDx_12 = (maxVel_6 * maxVel_6 - lastState._v * lastState._v) / (2 * maxAccel_7);
          var tmp_2 = lastState._v;
          var accelState_13 = MotionState_init_$Create$(displacement_4, tmp_2, maxAccel_7, 0.0, 8, null);
          var tmp_3 = displacement_4 + accelDx_12;
          var coastState_14 = MotionState_init_$Create$(tmp_3, maxVel_6, 0.0, 0.0, 8, null);
          forwardStates.add_22(new Pair(accelState_13, accelDx_12));
          Unit_getInstance();
          forwardStates.add_22(new Pair(coastState_14, dx - accelDx_12));
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
    this._function_0 = function_0;
  }
  sam$profile_VelocityConstraint$0.prototype.get_50 = function (s) {
    return this._function_0(s);
  };
  sam$profile_VelocityConstraint$0.$metadata$ = {
    simpleName: 'sam$profile_VelocityConstraint$0',
    kind: 'class',
    interfaces: [VelocityConstraint]
  };
  function sam$profile_AccelerationConstraint$0(function_0) {
    this._function_1 = function_0;
  }
  sam$profile_AccelerationConstraint$0.prototype.get_50 = function (s) {
    return this._function_1(s);
  };
  sam$profile_AccelerationConstraint$0.$metadata$ = {
    simpleName: 'sam$profile_AccelerationConstraint$0',
    kind: 'class',
    interfaces: [AccelerationConstraint]
  };
  function _no_name_provided__50($velocityConstraint) {
    this._$velocityConstraint = $velocityConstraint;
  }
  _no_name_provided__50.prototype.invoke_105 = function (it_0) {
    return this._$velocityConstraint.get_50(-it_0);
  };
  _no_name_provided__50.prototype.invoke_68 = function (p1) {
    return this.invoke_105((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__50.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__51($accelerationConstraint) {
    this._$accelerationConstraint = $accelerationConstraint;
  }
  _no_name_provided__51.prototype.invoke_105 = function (it_0) {
    return this._$accelerationConstraint.get_50(-it_0);
  };
  _no_name_provided__51.prototype.invoke_68 = function (p1) {
    return this.invoke_105((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__51.$metadata$ = {
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
            var tmp0_iterator_1_2 = roots.iterator_51();
            while (tmp0_iterator_1_2.hasNext_43()) {
              var element_2_3 = tmp0_iterator_1_2.next_48();
              if (element_2_3 >= 0.0) {
                tmp0_filterTo_0_1.add_22(element_2_3);
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
              var tmp0_iterator_1_2_0 = roots_0.iterator_51();
              while (tmp0_iterator_1_2_0.hasNext_43()) {
                var element_2_3_0 = tmp0_iterator_1_2_0.next_48();
                if (element_2_3_0 >= 0.0) {
                  tmp0_filterTo_0_1_0.add_22(element_2_3_0);
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
          var error_0 = goal._x_3 - searchProfile.end()._x_3;
          if (epsilonEquals(error_0, 0.0)) {
            return searchProfile;
          }if (error_0 > 0.0) {
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
      var tmp_1 = _no_name_provided_$factory_31(velocityConstraint);
      var tmp_2 = new sam$profile_VelocityConstraint$0(tmp_1);
      var tmp_3 = _no_name_provided_$factory_32(accelerationConstraint);
      return this.generateMotionProfile_0(tmp, tmp_0, tmp_2, new sam$profile_AccelerationConstraint$0(tmp_3), resolution).flipped();
    }var length = goal._x_3 - start._x_3;
    var tmp0_ceil_0 = length / resolution;
    var samples = numberToInt(Math.ceil(tmp0_ceil_0));
    var s = Companion_getInstance_23().fromClosedInterval(0.0, length, samples);
    var tmp1_map_0 = s.plus_40(start._x_3);
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp1_map_0, 10));
    var tmp0_iterator_1_2 = tmp1_map_0.iterator_51();
    while (tmp0_iterator_1_2.hasNext_43()) {
      var item_2_3 = tmp0_iterator_1_2.next_48();
      tmp0_mapTo_0_1.add_22(new EvaluatedConstraint(velocityConstraint.get_50(item_2_3), accelerationConstraint.get_50(item_2_3)));
      Unit_getInstance();
    }
    var constraintsList = tmp0_mapTo_0_1;
    var tmp2_map_0 = forwardPass(this, MotionState_init_$Create$(0.0, start._v, start._a_0, 0.0, 8, null), s, constraintsList);
    var tmp0_mapTo_0_1_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp2_map_0, 10));
    var tmp0_iterator_1_2_0 = tmp2_map_0.iterator_51();
    while (tmp0_iterator_1_2_0.hasNext_43()) {
      var item_2_3_0 = tmp0_iterator_1_2_0.next_48();
      var motionState_5 = item_2_3_0.component1_1();
      var dx_6 = item_2_3_0.component2_1();
      var tmp_4 = motionState_5._x_3 + start._x_3;
      tmp0_mapTo_0_1_0.add_22(new Pair(MotionState_init_$Create$(tmp_4, motionState_5._v, motionState_5._a_0, 0.0, 8, null), dx_6));
      Unit_getInstance();
    }
    var forwardStates = toMutableList_0(tmp0_mapTo_0_1_0);
    var tmp3_map_0 = forwardPass(this, MotionState_init_$Create$(0.0, goal._v, goal._a_0, 0.0, 8, null), s, reversed(constraintsList));
    var tmp0_mapTo_0_1_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp3_map_0, 10));
    var tmp0_iterator_1_2_1 = tmp3_map_0.iterator_51();
    while (tmp0_iterator_1_2_1.hasNext_43()) {
      var item_2_3_1 = tmp0_iterator_1_2_1.next_48();
      var motionState_5_0 = item_2_3_1.component1_1();
      var dx_6_0 = item_2_3_1.component2_1();
      tmp0_mapTo_0_1_1.add_22(new Pair(afterDisplacement(MotionProfileGenerator_getInstance(), motionState_5_0, dx_6_0), dx_6_0));
      Unit_getInstance();
    }
    var tmp4_map_0 = tmp0_mapTo_0_1_1;
    var tmp0_mapTo_0_1_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp4_map_0, 10));
    var tmp0_iterator_1_2_2 = tmp4_map_0.iterator_51();
    while (tmp0_iterator_1_2_2.hasNext_43()) {
      var item_2_3_2 = tmp0_iterator_1_2_2.next_48();
      var motionState_5_1 = item_2_3_2.component1_1();
      var dx_6_1 = item_2_3_2.component2_1();
      var tmp_5 = goal._x_3 - motionState_5_1._x_3;
      var tmp_6 = -motionState_5_1._a_0;
      tmp0_mapTo_0_1_2.add_22(new Pair(MotionState_init_$Create$(tmp_5, motionState_5_1._v, tmp_6, 0.0, 8, null), dx_6_1));
      Unit_getInstance();
    }
    var backwardStates = toMutableList_0(reversed(tmp0_mapTo_0_1_2));
    var finalStates = ArrayList_init_$Create$();
    var i = 0;
    while (i < forwardStates._get_size__36() ? i < backwardStates._get_size__36() : false) {
      var tmp0_container = forwardStates.get_39(i);
      var forwardStartState = tmp0_container.component1_1();
      var forwardDx = tmp0_container.component2_1();
      var tmp1_container = backwardStates.get_39(i);
      var backwardStartState = tmp1_container.component1_1();
      var backwardDx = tmp1_container.component2_1();
      if (!epsilonEquals(forwardDx, backwardDx)) {
        if (forwardDx > backwardDx) {
          forwardStates.add_20(i + 1 | 0, new Pair(afterDisplacement(this, forwardStartState, backwardDx), forwardDx - backwardDx));
          forwardDx = backwardDx;
        } else {
          backwardStates.add_20(i + 1 | 0, new Pair(afterDisplacement(this, backwardStartState, forwardDx), backwardDx - forwardDx));
          backwardDx = forwardDx;
        }
      }var forwardEndState = afterDisplacement(this, forwardStartState, forwardDx);
      var backwardEndState = afterDisplacement(this, backwardStartState, backwardDx);
      if (forwardStartState._v <= backwardStartState._v) {
        if (forwardEndState._v <= backwardEndState._v) {
          finalStates.add_22(new Pair(forwardStartState, forwardDx));
          Unit_getInstance();
        } else {
          var intersection_0 = intersection(this, forwardStartState, backwardStartState);
          finalStates.add_22(new Pair(forwardStartState, intersection_0));
          Unit_getInstance();
          finalStates.add_22(new Pair(afterDisplacement(this, backwardStartState, intersection_0), backwardDx - intersection_0));
          Unit_getInstance();
        }
      } else {
        if (forwardEndState._v >= backwardEndState._v) {
          finalStates.add_22(new Pair(backwardStartState, backwardDx));
          Unit_getInstance();
        } else {
          var intersection_1 = intersection(this, forwardStartState, backwardStartState);
          finalStates.add_22(new Pair(backwardStartState, intersection_1));
          Unit_getInstance();
          finalStates.add_22(new Pair(afterDisplacement(this, forwardStartState, intersection_1), forwardDx - intersection_1));
          Unit_getInstance();
        }
      }
      var tmp2 = i;
      i = tmp2 + 1 | 0;
      Unit_getInstance();
    }
    var motionSegments = ArrayList_init_$Create$();
    var tmp3_iterator = finalStates.iterator_51();
    while (tmp3_iterator.hasNext_43()) {
      var tmp4_loop_parameter = tmp3_iterator.next_48();
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
      motionSegments.add_22(new MotionSegment(state, dt));
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
  EvaluatedConstraint.prototype._get_maxVel_ = function () {
    return this._maxVel;
  };
  EvaluatedConstraint.prototype._get_maxAccel_ = function () {
    return this._maxAccel;
  };
  EvaluatedConstraint.prototype.component1_1 = function () {
    return this._maxVel;
  };
  EvaluatedConstraint.prototype.component2_1 = function () {
    return this._maxAccel;
  };
  EvaluatedConstraint.prototype.copy_4 = function (maxVel, maxAccel) {
    return new EvaluatedConstraint(maxVel, maxAccel);
  };
  EvaluatedConstraint.prototype.copy$default_4 = function (maxVel, maxAccel, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      maxVel = this._maxVel;
    if (!(($mask0 & 2) === 0))
      maxAccel = this._maxAccel;
    return this.copy_4(maxVel, maxAccel);
  };
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
  function _no_name_provided_$factory_31($velocityConstraint) {
    var i = new _no_name_provided__50($velocityConstraint);
    return function (p1) {
      return i.invoke_105(p1);
    };
  }
  function _no_name_provided_$factory_32($accelerationConstraint) {
    var i = new _no_name_provided__51($accelerationConstraint);
    return function (p1) {
      return i.invoke_105(p1);
    };
  }
  function MotionSegment(start, dt) {
    this._start_0 = start;
    this._dt = dt;
  }
  MotionSegment.prototype._get_start__8 = function () {
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
    get: MotionSegment.prototype._get_start__8
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
  MotionState.prototype._get_x__3 = function () {
    return this._x_3;
  };
  MotionState.prototype._get_v_ = function () {
    return this._v;
  };
  MotionState.prototype._get_a__0 = function () {
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
    get: MotionState.prototype._get_x__3
  });
  Object.defineProperty(MotionState.prototype, 'v', {
    configurable: true,
    get: MotionState.prototype._get_v_
  });
  Object.defineProperty(MotionState.prototype, 'a', {
    configurable: true,
    get: MotionState.prototype._get_a__0
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
    return this.copy_5(producer === void 1 ? this._producer : producer, callback === void 1 ? this._callback : callback);
  };
  DisplacementMarker.prototype.copy_5 = function (producer, callback) {
    return new DisplacementMarker(producer, callback);
  };
  DisplacementMarker.prototype.copy$default_5 = function (producer, callback, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      producer = this._producer;
    if (!(($mask0 & 2) === 0))
      callback = this._callback;
    return this.copy_5(producer, callback);
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
  function DisplacementProducer() {
  }
  DisplacementProducer.$metadata$ = {
    simpleName: 'DisplacementProducer',
    kind: 'interface',
    interfaces: []
  };
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
    return this.copy_6(point === void 1 ? this._point : point, callback === void 1 ? this._callback_0 : callback);
  };
  SpatialMarker.prototype.copy_6 = function (point, callback) {
    return new SpatialMarker(point, callback);
  };
  SpatialMarker.prototype.copy$default_6 = function (point, callback, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      point = this._point;
    if (!(($mask0 & 2) === 0))
      callback = this._callback_0;
    return this.copy_6(point, callback);
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
    return this.copy_7(producer === void 1 ? this._producer_0 : producer, callback === void 1 ? this._callback_1 : callback);
  };
  TemporalMarker.prototype.copy_7 = function (producer, callback) {
    return new TemporalMarker(producer, callback);
  };
  TemporalMarker.prototype.copy$default_7 = function (producer, callback, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      producer = this._producer_0;
    if (!(($mask0 & 2) === 0))
      callback = this._callback_1;
    return this.copy_7(producer, callback);
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
  Trajectory.prototype._get_path__0 = function () {
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
    return this._path_0.get_44(0.0, 0.0);
  };
  Trajectory.prototype.end = function () {
    return this._path_0.get_44(this._path_0.length(), 1.0);
  };
  Trajectory.$metadata$ = {
    simpleName: 'Trajectory',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Trajectory.prototype, 'path', {
    configurable: true,
    get: Trajectory.prototype._get_path__0
  });
  Object.defineProperty(Trajectory.prototype, 'profile', {
    configurable: true,
    get: Trajectory.prototype._get_profile_
  });
  Object.defineProperty(Trajectory.prototype, 'markers', {
    configurable: true,
    get: Trajectory.prototype._get_markers_
  });
  function _get_baseVelConstraint_($this) {
    return $this._baseVelConstraint;
  }
  function _get_baseAccelConstraint_($this) {
    return $this._baseAccelConstraint;
  }
  function _get_start__0($this) {
    return $this._start_1;
  }
  function _get_resolution_($this) {
    return $this._resolution;
  }
  function _set_pathBuilder_($this, _set___) {
    $this._pathBuilder = _set___;
  }
  function _get_pathBuilder_($this) {
    return $this._pathBuilder;
  }
  function _get_temporalMarkers_($this) {
    return $this._temporalMarkers;
  }
  function _get_displacementMarkers_($this) {
    return $this._displacementMarkers;
  }
  function _get_spatialMarkers_($this) {
    return $this._spatialMarkers;
  }
  function _get_velConstraintOverrides_($this) {
    return $this._velConstraintOverrides;
  }
  function _get_accelConstraintOverrides_($this) {
    return $this._accelConstraintOverrides;
  }
  function addSegment_0($this, add_0, velConstraintOverride, accelConstraintOverride) {
    var start = $this._pathBuilder.build_0().length();
    add_0();
    var end = $this._pathBuilder.build_0().length();
    if (!(velConstraintOverride == null)) {
      $this._velConstraintOverrides.add_22(new IntervalVelocityConstraint(start, end, velConstraintOverride));
      Unit_getInstance();
    }if (!(accelConstraintOverride == null)) {
      $this._accelConstraintOverrides.add_22(new IntervalAccelerationConstraint(start, end, accelConstraintOverride));
      Unit_getInstance();
    }return $this;
  }
  function addTemporalMarker($this, scale, offset, callback) {
    return addTemporalMarker_0($this, _no_name_provided_$factory_46(scale, offset), callback);
  }
  function addTemporalMarker_0($this, time, callback) {
    $this._temporalMarkers.add_22(new TemporalMarker(new sam$trajectory_TimeProducer$0(time), callback));
    Unit_getInstance();
    return $this;
  }
  function addDisplacementMarker($this, callback) {
    return addDisplacementMarker_0($this, $this._pathBuilder.build_0().length(), callback);
  }
  function addDisplacementMarker_0($this, displacement, callback) {
    return addDisplacementMarker_1($this, 0.0, displacement, callback);
  }
  function addDisplacementMarker_1($this, scale, offset, callback) {
    return addDisplacementMarker_2($this, _no_name_provided_$factory_47(scale, offset), callback);
  }
  function addDisplacementMarker_2($this, displacement, callback) {
    $this._displacementMarkers.add_22(new DisplacementMarker(new sam$trajectory_DisplacementProducer$0(displacement), callback));
    Unit_getInstance();
    return $this;
  }
  function sam$trajectory_TimeProducer$0(function_0) {
    this._function_2 = function_0;
  }
  sam$trajectory_TimeProducer$0.prototype.produce_2 = function (duration) {
    return this._function_2(duration);
  };
  sam$trajectory_TimeProducer$0.$metadata$ = {
    simpleName: 'sam$trajectory_TimeProducer$0',
    kind: 'class',
    interfaces: [TimeProducer]
  };
  function sam$trajectory_DisplacementProducer$0(function_0) {
    this._function_3 = function_0;
  }
  sam$trajectory_DisplacementProducer$0.prototype.produce_2 = function (length) {
    return this._function_3(length);
  };
  sam$trajectory_DisplacementProducer$0.$metadata$ = {
    simpleName: 'sam$trajectory_DisplacementProducer$0',
    kind: 'class',
    interfaces: [DisplacementProducer]
  };
  function _no_name_provided__52(this$0, $endPosition) {
    this._this$0_7 = this$0;
    this._$endPosition = $endPosition;
  }
  _no_name_provided__52.prototype.invoke_97 = function () {
    this._this$0_7._pathBuilder.lineTo(this._$endPosition);
    Unit_getInstance();
  };
  _no_name_provided__52.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__52.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__53(this$0, $endPosition) {
    this._this$0_8 = this$0;
    this._$endPosition_0 = $endPosition;
  }
  _no_name_provided__53.prototype.invoke_97 = function () {
    this._this$0_8._pathBuilder.lineToConstantHeading(this._$endPosition_0);
    Unit_getInstance();
  };
  _no_name_provided__53.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__53.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__54(this$0, $endPose) {
    this._this$0_9 = this$0;
    this._$endPose = $endPose;
  }
  _no_name_provided__54.prototype.invoke_97 = function () {
    this._this$0_9._pathBuilder.lineToLinearHeading(this._$endPose);
    Unit_getInstance();
  };
  _no_name_provided__54.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__54.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__55(this$0, $endPose) {
    this._this$0_10 = this$0;
    this._$endPose_0 = $endPose;
  }
  _no_name_provided__55.prototype.invoke_97 = function () {
    this._this$0_10._pathBuilder.lineToSplineHeading(this._$endPose_0);
    Unit_getInstance();
  };
  _no_name_provided__55.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__55.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__56(this$0, $endPosition) {
    this._this$0_11 = this$0;
    this._$endPosition_1 = $endPosition;
  }
  _no_name_provided__56.prototype.invoke_97 = function () {
    this._this$0_11._pathBuilder.strafeTo(this._$endPosition_1);
    Unit_getInstance();
  };
  _no_name_provided__56.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__56.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__57(this$0, $distance) {
    this._this$0_12 = this$0;
    this._$distance = $distance;
  }
  _no_name_provided__57.prototype.invoke_97 = function () {
    this._this$0_12._pathBuilder.forward(this._$distance);
    Unit_getInstance();
  };
  _no_name_provided__57.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__57.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__58(this$0, $distance) {
    this._this$0_13 = this$0;
    this._$distance_0 = $distance;
  }
  _no_name_provided__58.prototype.invoke_97 = function () {
    this._this$0_13._pathBuilder.back(this._$distance_0);
    Unit_getInstance();
  };
  _no_name_provided__58.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__58.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__59(this$0, $distance) {
    this._this$0_14 = this$0;
    this._$distance_1 = $distance;
  }
  _no_name_provided__59.prototype.invoke_97 = function () {
    this._this$0_14._pathBuilder.strafeLeft(this._$distance_1);
    Unit_getInstance();
  };
  _no_name_provided__59.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__59.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__60(this$0, $distance) {
    this._this$0_15 = this$0;
    this._$distance_2 = $distance;
  }
  _no_name_provided__60.prototype.invoke_97 = function () {
    this._this$0_15._pathBuilder.strafeRight(this._$distance_2);
    Unit_getInstance();
  };
  _no_name_provided__60.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__60.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__61(this$0, $endPosition, $endTangent) {
    this._this$0_16 = this$0;
    this._$endPosition_2 = $endPosition;
    this._$endTangent = $endTangent;
  }
  _no_name_provided__61.prototype.invoke_97 = function () {
    this._this$0_16._pathBuilder.splineTo(this._$endPosition_2, this._$endTangent);
    Unit_getInstance();
  };
  _no_name_provided__61.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__61.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__62(this$0, $endPosition, $endTangent) {
    this._this$0_17 = this$0;
    this._$endPosition_3 = $endPosition;
    this._$endTangent_0 = $endTangent;
  }
  _no_name_provided__62.prototype.invoke_97 = function () {
    this._this$0_17._pathBuilder.splineToConstantHeading(this._$endPosition_3, this._$endTangent_0);
    Unit_getInstance();
  };
  _no_name_provided__62.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__62.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__63(this$0, $endPose, $endTangent) {
    this._this$0_18 = this$0;
    this._$endPose_1 = $endPose;
    this._$endTangent_1 = $endTangent;
  }
  _no_name_provided__63.prototype.invoke_97 = function () {
    this._this$0_18._pathBuilder.splineToLinearHeading(this._$endPose_1, this._$endTangent_1);
    Unit_getInstance();
  };
  _no_name_provided__63.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__63.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__64(this$0, $endPose, $endTangent) {
    this._this$0_19 = this$0;
    this._$endPose_2 = $endPose;
    this._$endTangent_2 = $endTangent;
  }
  _no_name_provided__64.prototype.invoke_97 = function () {
    this._this$0_19._pathBuilder.splineToSplineHeading(this._$endPose_2, this._$endTangent_2);
    Unit_getInstance();
  };
  _no_name_provided__64.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__64.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__65($scale, $offset) {
    this._$scale = $scale;
    this._$offset = $offset;
  }
  _no_name_provided__65.prototype.invoke_105 = function (it_0) {
    return this._$scale * it_0 + this._$offset;
  };
  _no_name_provided__65.prototype.invoke_68 = function (p1) {
    return this.invoke_105((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__65.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__66($scale, $offset) {
    this._$scale_0 = $scale;
    this._$offset_0 = $offset;
  }
  _no_name_provided__66.prototype.invoke_105 = function (it_0) {
    return this._$scale_0 * it_0 + this._$offset_0;
  };
  _no_name_provided__66.prototype.invoke_68 = function (p1) {
    return this.invoke_105((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__66.$metadata$ = {
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
      tmp_0 = PathBuilder_init_$Create$_2(ensureNotNull(trajectory)._path_0, trajectory._profile.get(ensureNotNull(t))._x_3);
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
    return addSegment_0(this, _no_name_provided_$factory_33(this, endPosition), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.lineToConstantHeading = function (endPosition, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_34(this, endPosition), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.lineToLinearHeading = function (endPose, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_35(this, endPose), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.lineToSplineHeading = function (endPose, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_36(this, endPose), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.strafeTo = function (endPosition, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_37(this, endPosition), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.forward = function (distance, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_38(this, distance), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.back = function (distance, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_39(this, distance), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.strafeLeft = function (distance, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_40(this, distance), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.strafeRight = function (distance, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_41(this, distance), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.splineTo = function (endPosition, endTangent, velConstraintOverride, accelConstraintOverride) {
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].concat(['builder spline to']));
    }.call(this));
    (function () {
      var $externalVarargReceiverTmp = console;
      return $externalVarargReceiverTmp.log.apply($externalVarargReceiverTmp, [].concat([endPosition]));
    }.call(this));
    return addSegment_0(this, _no_name_provided_$factory_42(this, endPosition, endTangent), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.splineToConstantHeading = function (endPosition, endTangent, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_43(this, endPosition, endTangent), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.splineToLinearHeading = function (endPose, endTangent, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_44(this, endPose, endTangent), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.splineToSplineHeading = function (endPose, endTangent, velConstraintOverride, accelConstraintOverride) {
    return addSegment_0(this, _no_name_provided_$factory_45(this, endPose, endTangent), velConstraintOverride, accelConstraintOverride);
  };
  TrajectoryBuilder.prototype.addTemporalMarker = function (time, callback) {
    return addTemporalMarker(this, 0.0, time, callback);
  };
  TrajectoryBuilder.prototype.addSpatialMarker = function (point, callback) {
    this._spatialMarkers.add_22(new SpatialMarker(point, callback));
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
  IntervalVelocityConstraint.prototype._get_start__8 = function () {
    return this._start_2;
  };
  IntervalVelocityConstraint.prototype._get_end__0 = function () {
    return this._end;
  };
  IntervalVelocityConstraint.prototype._get_constraint__0 = function () {
    return this._constraint;
  };
  IntervalVelocityConstraint.prototype.component1_1 = function () {
    return this._start_2;
  };
  IntervalVelocityConstraint.prototype.component2_1 = function () {
    return this._end;
  };
  IntervalVelocityConstraint.prototype.component3 = function () {
    return this._constraint;
  };
  IntervalVelocityConstraint.prototype.copy_8 = function (start, end, constraint) {
    return new IntervalVelocityConstraint(start, end, constraint);
  };
  IntervalVelocityConstraint.prototype.copy$default_8 = function (start, end, constraint, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = this._start_2;
    if (!(($mask0 & 2) === 0))
      end = this._end;
    if (!(($mask0 & 4) === 0))
      constraint = this._constraint;
    return this.copy_8(start, end, constraint);
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
  function IntervalAccelerationConstraint(start, end, constraint) {
    this._start_3 = start;
    this._end_0 = end;
    this._constraint_0 = constraint;
  }
  IntervalAccelerationConstraint.prototype._get_start__8 = function () {
    return this._start_3;
  };
  IntervalAccelerationConstraint.prototype._get_end__0 = function () {
    return this._end_0;
  };
  IntervalAccelerationConstraint.prototype._get_constraint__0 = function () {
    return this._constraint_0;
  };
  IntervalAccelerationConstraint.prototype.component1_1 = function () {
    return this._start_3;
  };
  IntervalAccelerationConstraint.prototype.component2_1 = function () {
    return this._end_0;
  };
  IntervalAccelerationConstraint.prototype.component3 = function () {
    return this._constraint_0;
  };
  IntervalAccelerationConstraint.prototype.copy_9 = function (start, end, constraint) {
    return new IntervalAccelerationConstraint(start, end, constraint);
  };
  IntervalAccelerationConstraint.prototype.copy$default_9 = function (start, end, constraint, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = this._start_3;
    if (!(($mask0 & 2) === 0))
      end = this._end_0;
    if (!(($mask0 & 4) === 0))
      constraint = this._constraint_0;
    return this.copy_9(start, end, constraint);
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
  function _get_baseConstraint_($this) {
    return $this._baseConstraint;
  }
  function _get_constraintOverrides_($this) {
    return $this._constraintOverrides;
  }
  function PiecewiseVelocityConstraint(baseConstraint, constraintOverrides) {
    TrajectoryVelocityConstraint.call(this);
    this._baseConstraint = baseConstraint;
    this._constraintOverrides = constraintOverrides;
  }
  PiecewiseVelocityConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    var tmp0_iterator = this._constraintOverrides.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var interval = tmp0_iterator.next_48();
      var tmp1_container = interval;
      var start = tmp1_container.component1_1();
      var end = tmp1_container.component2_1();
      var constraint = tmp1_container.component3();
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
  function _get_baseConstraint__0($this) {
    return $this._baseConstraint_0;
  }
  function _get_constraintOverrides__0($this) {
    return $this._constraintOverrides_0;
  }
  function PiecewiseAccelerationConstraint(baseConstraint, constraintOverrides) {
    TrajectoryAccelerationConstraint.call(this);
    this._baseConstraint_0 = baseConstraint;
    this._constraintOverrides_0 = constraintOverrides;
  }
  PiecewiseAccelerationConstraint.prototype.get = function (s, pose, deriv, baseRobotVel) {
    var tmp0_iterator = this._constraintOverrides_0.iterator_51();
    while (tmp0_iterator.hasNext_43()) {
      var interval = tmp0_iterator.next_48();
      var tmp1_container = interval;
      var start = tmp1_container.component1_1();
      var end = tmp1_container.component2_1();
      var constraint = tmp1_container.component3();
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
  function _no_name_provided_$factory_33(this$0, $endPosition) {
    var i = new _no_name_provided__52(this$0, $endPosition);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_34(this$0, $endPosition) {
    var i = new _no_name_provided__53(this$0, $endPosition);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_35(this$0, $endPose) {
    var i = new _no_name_provided__54(this$0, $endPose);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_36(this$0, $endPose) {
    var i = new _no_name_provided__55(this$0, $endPose);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_37(this$0, $endPosition) {
    var i = new _no_name_provided__56(this$0, $endPosition);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_38(this$0, $distance) {
    var i = new _no_name_provided__57(this$0, $distance);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_39(this$0, $distance) {
    var i = new _no_name_provided__58(this$0, $distance);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_40(this$0, $distance) {
    var i = new _no_name_provided__59(this$0, $distance);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_41(this$0, $distance) {
    var i = new _no_name_provided__60(this$0, $distance);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_42(this$0, $endPosition, $endTangent) {
    var i = new _no_name_provided__61(this$0, $endPosition, $endTangent);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_43(this$0, $endPosition, $endTangent) {
    var i = new _no_name_provided__62(this$0, $endPosition, $endTangent);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_44(this$0, $endPose, $endTangent) {
    var i = new _no_name_provided__63(this$0, $endPose, $endTangent);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_45(this$0, $endPose, $endTangent) {
    var i = new _no_name_provided__64(this$0, $endPose, $endTangent);
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_46($scale, $offset) {
    var i = new _no_name_provided__65($scale, $offset);
    return function (p1) {
      return i.invoke_105(p1);
    };
  }
  function _no_name_provided_$factory_47($scale, $offset) {
    var i = new _no_name_provided__66($scale, $offset);
    return function (p1) {
      return i.invoke_105(p1);
    };
  }
  function generateProfile($this, path, velocityConstraint, accelerationConstraint, start, goal, resolution) {
    var tmp = MotionProfileGenerator_getInstance();
    var tmp_0 = _no_name_provided_$factory_48(path, velocityConstraint);
    var tmp_1 = new sam$profile_VelocityConstraint$0_0(tmp_0);
    var tmp_2 = _no_name_provided_$factory_49(path, accelerationConstraint);
    return tmp.generateMotionProfile_0(start, goal, tmp_1, new sam$profile_AccelerationConstraint$0_0(tmp_2), resolution);
  }
  function generateSimpleProfile($this, maxProfileVel, maxProfileAccel, maxProfileJerk, start, goal) {
    var tmp = MotionProfileGenerator_getInstance();
    return tmp.generateSimpleMotionProfile$default(start, goal, maxProfileVel, maxProfileAccel, maxProfileJerk, false, 32, null);
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
    var tmp0_iterator_1_2 = temporalMarkers.iterator_51();
    while (tmp0_iterator_1_2.hasNext_43()) {
      var item_2_3 = tmp0_iterator_1_2.next_48();
      var producer_5 = item_2_3.component1();
      var callback_6 = item_2_3.component2();
      tmp0_mapTo_0_1.add_22(new TrajectoryMarker(producer_5.produce_2(profile.duration()), callback_6));
      Unit_getInstance();
    }
    var tmp0_mapTo_0_1_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(displacementMarkers, 10));
    var tmp0_iterator_1_2_0 = displacementMarkers.iterator_51();
    while (tmp0_iterator_1_2_0.hasNext_43()) {
      var item_2_3_0 = tmp0_iterator_1_2_0.next_48();
      var producer_5_0 = item_2_3_0.component1();
      var callback_6_0 = item_2_3_0.component2();
      tmp0_mapTo_0_1_0.add_22(new TrajectoryMarker(displacementToTime(TrajectoryGenerator_getInstance(), profile, producer_5_0.produce_2(path.length())), callback_6_0));
      Unit_getInstance();
    }
    var tmp = plus(tmp0_mapTo_0_1, tmp0_mapTo_0_1_0);
    var tmp0_mapTo_0_1_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(spatialMarkers, 10));
    var tmp0_iterator_1_2_1 = spatialMarkers.iterator_51();
    while (tmp0_iterator_1_2_1.hasNext_43()) {
      var item_2_3_1 = tmp0_iterator_1_2_1.next_48();
      var point_5 = item_2_3_1.component1();
      var callback_6_1 = item_2_3_1.component2();
      tmp0_mapTo_0_1_1.add_22(new TrajectoryMarker(pointToTime(TrajectoryGenerator_getInstance(), path, profile, point_5), callback_6_1));
      Unit_getInstance();
    }
    return plus(tmp, tmp0_mapTo_0_1_1);
  }
  function sam$profile_VelocityConstraint$0_0(function_0) {
    this._function_4 = function_0;
  }
  sam$profile_VelocityConstraint$0_0.prototype.get_50 = function (s) {
    return this._function_4(s);
  };
  sam$profile_VelocityConstraint$0_0.$metadata$ = {
    simpleName: 'sam$profile_VelocityConstraint$0',
    kind: 'class',
    interfaces: [VelocityConstraint]
  };
  function sam$profile_AccelerationConstraint$0_0(function_0) {
    this._function_5 = function_0;
  }
  sam$profile_AccelerationConstraint$0_0.prototype.get_50 = function (s) {
    return this._function_5(s);
  };
  sam$profile_AccelerationConstraint$0_0.$metadata$ = {
    simpleName: 'sam$profile_AccelerationConstraint$0',
    kind: 'class',
    interfaces: [AccelerationConstraint]
  };
  function _no_name_provided__67($path, $velocityConstraint) {
    this._$path = $path;
    this._$velocityConstraint_0 = $velocityConstraint;
  }
  _no_name_provided__67.prototype.invoke_105 = function (s) {
    var t = this._$path.reparam_2(s);
    var tmp = this._$path.get_44(s, t);
    var tmp_0 = this._$path.deriv_5(s, t);
    return this._$velocityConstraint_0.get(s, tmp, tmp_0, Pose2d_init_$Create$(0.0, 0.0, 0.0, 7, null));
  };
  _no_name_provided__67.prototype.invoke_68 = function (p1) {
    return this.invoke_105((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__67.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__68($path, $accelerationConstraint) {
    this._$path_0 = $path;
    this._$accelerationConstraint_0 = $accelerationConstraint;
  }
  _no_name_provided__68.prototype.invoke_105 = function (s) {
    var t = this._$path_0.reparam_2(s);
    var tmp = this._$path_0.get_44(s, t);
    var tmp_0 = this._$path_0.deriv_5(s, t);
    return this._$accelerationConstraint_0.get(s, tmp, tmp_0, Pose2d_init_$Create$(0.0, 0.0, 0.0, 7, null));
  };
  _no_name_provided__68.prototype.invoke_68 = function (p1) {
    return this.invoke_105((!(p1 == null) ? typeof p1 === 'number' : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__68.$metadata$ = {
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
  TrajectoryGenerator.prototype.generateTrajectory$default = function (path, velocityConstraint, accelerationConstraint, start, goal, temporalMarkers, displacementMarkers, spatialMarkers, resolution, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      start = MotionState_init_$Create$(0.0, 0.0, 0.0, 0.0, 8, null);
    }if (!(($mask0 & 16) === 0)) {
      var tmp = path.length();
      goal = MotionState_init_$Create$(tmp, 0.0, 0.0, 0.0, 8, null);
    }if (!(($mask0 & 32) === 0))
      temporalMarkers = emptyList();
    if (!(($mask0 & 64) === 0))
      displacementMarkers = emptyList();
    if (!(($mask0 & 128) === 0))
      spatialMarkers = emptyList();
    if (!(($mask0 & 256) === 0))
      resolution = 0.25;
    return this.generateTrajectory(path, velocityConstraint, accelerationConstraint, start, goal, temporalMarkers, displacementMarkers, spatialMarkers, resolution);
  };
  TrajectoryGenerator.prototype.generateSimpleTrajectory = function (path, maxProfileVel, maxProfileAccel, maxProfileJerk, start, goal, temporalMarkers, displacementMarkers, spatialMarkers) {
    var profile = generateSimpleProfile(this, maxProfileVel, maxProfileAccel, maxProfileJerk, start, goal);
    var markers = convertMarkers(this, path, profile, temporalMarkers, displacementMarkers, spatialMarkers);
    return new Trajectory(path, profile, copyToArray_0(markers));
  };
  TrajectoryGenerator.prototype.generateSimpleTrajectory$default = function (path, maxProfileVel, maxProfileAccel, maxProfileJerk, start, goal, temporalMarkers, displacementMarkers, spatialMarkers, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      start = new MotionState(0.0, 0.0, 0.0, 0.0);
    if (!(($mask0 & 32) === 0))
      goal = new MotionState(path.length(), 0.0, 0.0, 0.0);
    if (!(($mask0 & 64) === 0))
      temporalMarkers = emptyList();
    if (!(($mask0 & 128) === 0))
      displacementMarkers = emptyList();
    if (!(($mask0 & 256) === 0))
      spatialMarkers = emptyList();
    return this.generateSimpleTrajectory(path, maxProfileVel, maxProfileAccel, maxProfileJerk, start, goal, temporalMarkers, displacementMarkers, spatialMarkers);
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
  function _no_name_provided_$factory_48($path, $velocityConstraint) {
    var i = new _no_name_provided__67($path, $velocityConstraint);
    return function (p1) {
      return i.invoke_105(p1);
    };
  }
  function _no_name_provided_$factory_49($path, $accelerationConstraint) {
    var i = new _no_name_provided__68($path, $accelerationConstraint);
    return function (p1) {
      return i.invoke_105(p1);
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
    return this.copy_10(time === void 1 ? this._time : time, callback === void 1 ? this._callback_2 : callback);
  };
  TrajectoryMarker.prototype.copy_10 = function (time, callback) {
    return new TrajectoryMarker(time, callback);
  };
  TrajectoryMarker.prototype.copy$default_10 = function (time, callback, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      time = this._time;
    if (!(($mask0 & 2) === 0))
      callback = this._callback_2;
    return this.copy_10(time, callback);
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
  function _get_maxAngularVel_($this) {
    return $this._maxAngularVel;
  }
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
  function _get_maxWheelVel_($this) {
    return $this._maxWheelVel;
  }
  function _get_trackWidth_($this) {
    return $this._trackWidth;
  }
  function _get_wheelBase_($this) {
    return $this._wheelBase;
  }
  function _get_lateralMultiplier_($this) {
    return $this._lateralMultiplier;
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
    var iterator_1 = wheel0.iterator_51();
    if (!iterator_1.hasNext_43())
      throw NoSuchElementException_init_$Create$();
    var maxValue_2 = abs(iterator_1.next_48());
    while (iterator_1.hasNext_43()) {
      var v_3 = abs(iterator_1.next_48());
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
    var iterator_1_0 = tmp0_minOf_0.iterator_51();
    if (!iterator_1_0.hasNext_43())
      throw NoSuchElementException_init_$Create$();
    var tmp1__anonymous__5 = iterator_1_0.next_48();
    var tmp0_max_0_6 = (this._maxWheelVel - tmp1__anonymous__5._first) / tmp1__anonymous__5._second;
    var tmp1_max_0_7 = (-this._maxWheelVel - tmp1__anonymous__5._first) / tmp1__anonymous__5._second;
    var minValue_2 = function () {
      var $externalVarargReceiverTmp = Math;
      return $externalVarargReceiverTmp.max.apply($externalVarargReceiverTmp, [].concat([].slice.call(new Float64Array([tmp0_max_0_6, tmp1_max_0_7]))));
    }.call(this);
    while (iterator_1_0.hasNext_43()) {
      var tmp2__anonymous__5 = iterator_1_0.next_48();
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
  function _get_constraints_($this) {
    return $this._constraints;
  }
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
    var last_2 = _get_lastIndex_(tmp0_minOf_0);
    if (inductionVariable <= last_2)
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
       while (!(i_3 === last_2));
    return minValue_1;
  };
  MinVelocityConstraint.$metadata$ = {
    simpleName: 'MinVelocityConstraint',
    kind: 'class',
    interfaces: []
  };
  function _get_maxProfileAccel_($this) {
    return $this._maxProfileAccel;
  }
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
  function _get_TAU_($this) {
    return $this._TAU;
  }
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
  function _get_iterator_($this) {
    return $this._iterator;
  }
  function Companion_24() {
    Companion_instance_23 = this;
  }
  Companion_24.prototype.fromClosedInterval = function (start, endInclusive, count_0) {
    var tmp;
    if (count_0 === 0) {
      tmp = 0.0;
    } else {
      tmp = (endInclusive - start) / (count_0 - 1 | 0);
    }
    var step = tmp;
    return new DoubleProgression(start, step, count_0);
  };
  Companion_24.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_24();
    return Companion_instance_23;
  }
  function rawIndex($this, query) {
    return (query - $this._start_4) / $this._step_9;
  }
  function IteratorImpl_1($outer) {
    this._$this_7 = $outer;
    this._iterator = (new IntRange(0, this._$this_7._progressionSize - 1 | 0)).iterator_51();
  }
  IteratorImpl_1.prototype.hasNext_43 = function () {
    return this._iterator.hasNext_43();
  };
  IteratorImpl_1.prototype.next_48 = function () {
    return this._$this_7.get_39(this._iterator.next_48());
  };
  IteratorImpl_1.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [Iterator_3]
  };
  function DoubleProgression(start, step, progressionSize) {
    Companion_getInstance_23();
    this._start_4 = start;
    this._step_9 = step;
    this._progressionSize = progressionSize;
  }
  DoubleProgression.prototype._get_start__8 = function () {
    return this._start_4;
  };
  DoubleProgression.prototype._get_step__11 = function () {
    return this._step_9;
  };
  DoubleProgression.prototype._get_progressionSize_ = function () {
    return this._progressionSize;
  };
  DoubleProgression.prototype.plus_40 = function (offset) {
    return new DoubleProgression(this._start_4 + offset, this._step_9, this._progressionSize);
  };
  DoubleProgression.prototype.minus_36 = function (offset) {
    return new DoubleProgression(this._start_4 - offset, this._step_9, this._progressionSize);
  };
  DoubleProgression.prototype.unaryMinus_4 = function () {
    return new DoubleProgression(-this._start_4, -this._step_9, this._progressionSize);
  };
  DoubleProgression.prototype.isEmpty_47 = function () {
    return this._progressionSize === 0;
  };
  DoubleProgression.prototype.floorIndex = function (query) {
    var tmp0_floor_0 = rawIndex(this, query);
    return numberToInt(Math.floor(tmp0_floor_0));
  };
  DoubleProgression.prototype.ceilIndex = function (query) {
    var tmp0_ceil_0 = rawIndex(this, query);
    return numberToInt(Math.ceil(tmp0_ceil_0));
  };
  DoubleProgression.prototype.get_39 = function (index) {
    return this._start_4 + this._step_9 * index;
  };
  DoubleProgression.prototype.contains_14 = function (query) {
    var rawIndex_0 = rawIndex(this, query);
    var tmp;
    if (rawIndex_0 < 0.0) {
      tmp = false;
    } else {
      tmp = Math.ceil(rawIndex_0) < this._progressionSize;
    }
    return tmp;
  };
  DoubleProgression.prototype.split = function (sep) {
    var sepIndex = this.ceilIndex(sep);
    return sepIndex < 0 ? to(new DoubleProgression(sep, this._step_9, 0), this) : sepIndex >= this._progressionSize ? to(this, new DoubleProgression(sep, this._step_9, 0)) : to(new DoubleProgression(this._start_4, this._step_9, sepIndex), new DoubleProgression(this.get_39(sepIndex), this._step_9, this._progressionSize - sepIndex | 0));
  };
  DoubleProgression.prototype.iterator_51 = function () {
    return new IteratorImpl_1(this);
  };
  DoubleProgression.prototype.component1_1 = function () {
    return this._start_4;
  };
  DoubleProgression.prototype.component2_1 = function () {
    return this._step_9;
  };
  DoubleProgression.prototype.component3 = function () {
    return this._progressionSize;
  };
  DoubleProgression.prototype.copy_11 = function (start, step, progressionSize) {
    return new DoubleProgression(start, step, progressionSize);
  };
  DoubleProgression.prototype.copy$default_11 = function (start, step, progressionSize, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      start = this._start_4;
    if (!(($mask0 & 2) === 0))
      step = this._step_9;
    if (!(($mask0 & 4) === 0))
      progressionSize = this._progressionSize;
    return this.copy_11(start, step, progressionSize);
  };
  DoubleProgression.prototype.toString = function () {
    return '' + 'DoubleProgression(start=' + this._start_4 + ', step=' + this._step_9 + ', progressionSize=' + this._progressionSize + ')';
  };
  DoubleProgression.prototype.hashCode = function () {
    var result = getNumberHashCode(this._start_4);
    result = imul(result, 31) + getNumberHashCode(this._step_9) | 0;
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
    if (!equals(this._step_9, tmp0_other_with_cast._step_9))
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
  function epsilonEquals(_this_, other) {
    var tmp0_abs_0 = _this_ - other;
    return Math.abs(tmp0_abs_0) < 1.0E-6;
  }
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
  function _get_EPSILON_() {
    return EPSILON;
  }
  var EPSILON;
  function _set__asserter_(_set___) {
    _asserter = _set___;
  }
  function _get__asserter_() {
    return _asserter;
  }
  var _asserter;
  function _no_name_provided__69($message) {
    this._$message = $message;
  }
  _no_name_provided__69.prototype.invoke_20 = function () {
    return this._$message;
  };
  _no_name_provided__69.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__70($message, $expected, $actual) {
    this._$message_0 = $message;
    this._$expected = $expected;
    this._$actual = $actual;
  }
  _no_name_provided__70.prototype.invoke_20 = function () {
    return messagePrefix(this._$message_0) + ('' + 'Expected <' + this._$expected + '>, actual <' + this._$actual + '>.');
  };
  _no_name_provided__70.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__71($message, $actual) {
    this._$message_1 = $message;
    this._$actual_0 = $actual;
  }
  _no_name_provided__71.prototype.invoke_20 = function () {
    return messagePrefix(this._$message_1) + ('' + 'Illegal value: <' + this._$actual_0 + '>.');
  };
  _no_name_provided__71.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__72($message, $expected, $actual) {
    this._$message_2 = $message;
    this._$expected_0 = $expected;
    this._$actual_1 = $actual;
  }
  _no_name_provided__72.prototype.invoke_20 = function () {
    return messagePrefix(this._$message_2) + ('' + 'Expected <' + this._$expected_0 + '>, actual <' + this._$actual_1 + '> is not same.');
  };
  _no_name_provided__72.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__73($message, $actual) {
    this._$message_3 = $message;
    this._$actual_2 = $actual;
  }
  _no_name_provided__73.prototype.invoke_20 = function () {
    return messagePrefix(this._$message_3) + ('' + 'Expected not same as <' + this._$actual_2 + '>.');
  };
  _no_name_provided__73.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__74($message, $actual) {
    this._$message_4 = $message;
    this._$actual_3 = $actual;
  }
  _no_name_provided__74.prototype.invoke_20 = function () {
    return messagePrefix(this._$message_4) + ('' + 'Expected value to be null, but was: <' + this._$actual_3 + '>.');
  };
  _no_name_provided__74.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__75($message) {
    this._$message_5 = $message;
  }
  _no_name_provided__75.prototype.invoke_20 = function () {
    return messagePrefix(this._$message_5) + 'Expected value to be not null.';
  };
  _no_name_provided__75.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  Asserter.prototype.assertTrue_1 = function (lazyMessage, actual) {
    if (!actual) {
      this.fail_1(lazyMessage());
    }};
  Asserter.prototype.assertTrue_2 = function (message, actual) {
    this.assertTrue_1(_no_name_provided_$factory_50(message), actual);
  };
  Asserter.prototype.assertEquals_0 = function (message, expected, actual) {
    this.assertTrue_1(_no_name_provided_$factory_51(message, expected, actual), equals(actual, expected));
  };
  Asserter.prototype.assertNotEquals_0 = function (message, illegal, actual) {
    this.assertTrue_1(_no_name_provided_$factory_52(message, actual), !equals(actual, illegal));
  };
  Asserter.prototype.assertSame_0 = function (message, expected, actual) {
    this.assertTrue_1(_no_name_provided_$factory_53(message, expected, actual), actual === expected);
  };
  Asserter.prototype.assertNotSame_0 = function (message, illegal, actual) {
    this.assertTrue_1(_no_name_provided_$factory_54(message, actual), !(actual === illegal));
  };
  Asserter.prototype.assertNull_0 = function (message, actual) {
    this.assertTrue_1(_no_name_provided_$factory_55(message, actual), actual == null);
  };
  Asserter.prototype.assertNotNull_0 = function (message, actual) {
    this.assertTrue_1(_no_name_provided_$factory_56(message), !(actual == null));
  };
  function Asserter() {
  }
  Asserter.$metadata$ = {
    simpleName: 'Asserter',
    kind: 'interface',
    interfaces: []
  };
  function assertTrue(actual, message) {
    var tmp = _get_asserter_();
    var tmp0_elvis_lhs = message;
    return tmp.assertTrue_2(tmp0_elvis_lhs == null ? 'Expected value to be true.' : tmp0_elvis_lhs, actual);
  }
  function assertTrue$default(actual, message, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      message = null;
    return assertTrue(actual, message);
  }
  function _get_asserter_() {
    var tmp0_elvis_lhs = _asserter;
    return tmp0_elvis_lhs == null ? lookupAsserter() : tmp0_elvis_lhs;
  }
  function assertEquals(expected, actual, message) {
    _get_asserter_().assertEquals_0(message, expected, actual);
  }
  function assertEquals$default(expected, actual, message, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      message = null;
    return assertEquals(expected, actual, message);
  }
  function _no_name_provided_$factory_50($message) {
    var i = new _no_name_provided__69($message);
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_51($message, $expected, $actual) {
    var i = new _no_name_provided__70($message, $expected, $actual);
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_52($message, $actual) {
    var i = new _no_name_provided__71($message, $actual);
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_53($message, $expected, $actual) {
    var i = new _no_name_provided__72($message, $expected, $actual);
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_54($message, $actual) {
    var i = new _no_name_provided__73($message, $actual);
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_55($message, $actual) {
    var i = new _no_name_provided__74($message, $actual);
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_56($message) {
    var i = new _no_name_provided__75($message);
    return function () {
      return i.invoke_20();
    };
  }
  function messagePrefix(message) {
    return message == null ? '' : '' + message + '. ';
  }
  function _set_value_(_set___) {
    value = _set___;
  }
  function _get_value__0() {
    return value;
  }
  var value;
  function _set_tests_(_set___) {
    tests = _set___;
  }
  function _get_tests_() {
    return tests;
  }
  var tests;
  function Test() {
  }
  Test.$metadata$ = {
    simpleName: 'Test',
    kind: 'class',
    interfaces: [Annotation]
  };
  function _set_assertHook_(_set___) {
    assertHook = _set___;
  }
  function _get_assertHook_() {
    return assertHook;
  }
  var assertHook;
  function _set_e_($this, _set___) {
    $this._e_0 = _set___;
  }
  function _get_e_($this) {
    return $this._e_0;
  }
  function _set_a_($this, _set___) {
    $this._a_1 = _set___;
  }
  function _get_a_($this) {
    return $this._a_1;
  }
  function failWithMessage($this, lazyMessage, cause) {
    var message = lazyMessage();
    invokeHook($this, false, _no_name_provided_$factory_61(message));
    throw AssertionError_init_$Create$_2(message, cause);
  }
  function invokeHook($this, result, lazyMessage) {
    try {
      var tmp = assertHook;
      tmp(new _no_name_provided__80(result, lazyMessage));
    }finally {
      $this._e_0 = undefined;
      $this._a_1 = undefined;
    }
  }
  function _no_name_provided__76($message_1) {
    this._$message_1_0 = $message_1;
  }
  _no_name_provided__76.prototype.invoke_20 = function () {
    return this._$message_1_0;
  };
  _no_name_provided__76.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__77($message) {
    this._$message_6 = $message;
  }
  _no_name_provided__77.prototype.invoke_20 = function () {
    return this._$message_6;
  };
  _no_name_provided__77.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__78($message_1) {
    this._$message_1_1 = $message_1;
  }
  _no_name_provided__78.prototype.invoke_20 = function () {
    return this._$message_1_1;
  };
  _no_name_provided__78.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__79($message) {
    this._$message_7 = $message;
  }
  _no_name_provided__79.prototype.invoke_20 = function () {
    return this._$message_7;
  };
  _no_name_provided__79.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__80($result, $lazyMessage) {
    this._$result = $result;
    this._$lazyMessage = $lazyMessage;
    this._result_0 = this._$result;
    this._expected = DefaultJsAsserter_getInstance()._e_0;
    this._actual = DefaultJsAsserter_getInstance()._a_1;
    this._lazyMessage = this._$lazyMessage;
  }
  _no_name_provided__80.prototype._get_result__0 = function () {
    return this._result_0;
  };
  _no_name_provided__80.prototype._get_expected_ = function () {
    return this._expected;
  };
  _no_name_provided__80.prototype._get_actual_ = function () {
    return this._actual;
  };
  _no_name_provided__80.prototype._get_lazyMessage_ = function () {
    return this._lazyMessage;
  };
  _no_name_provided__80.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(_no_name_provided__80.prototype, 'result', {
    configurable: true,
    get: _no_name_provided__80.prototype._get_result__0
  });
  Object.defineProperty(_no_name_provided__80.prototype, 'expected', {
    configurable: true,
    get: _no_name_provided__80.prototype._get_expected_
  });
  Object.defineProperty(_no_name_provided__80.prototype, 'actual', {
    configurable: true,
    get: _no_name_provided__80.prototype._get_actual_
  });
  Object.defineProperty(_no_name_provided__80.prototype, 'lazyMessage', {
    configurable: true,
    get: _no_name_provided__80.prototype._get_lazyMessage_
  });
  function DefaultJsAsserter() {
    DefaultJsAsserter_instance = this;
    this._e_0 = undefined;
    this._a_1 = undefined;
  }
  DefaultJsAsserter.prototype.assertEquals_0 = function (message, expected, actual) {
    this._e_0 = expected;
    this._a_1 = actual;
    Asserter.prototype.assertEquals_0.call(this, message, expected, actual);
  };
  DefaultJsAsserter.prototype.assertNotEquals_0 = function (message, illegal, actual) {
    this._e_0 = illegal;
    this._a_1 = actual;
    Asserter.prototype.assertNotEquals_0.call(this, message, illegal, actual);
  };
  DefaultJsAsserter.prototype.assertSame_0 = function (message, expected, actual) {
    this._e_0 = expected;
    this._a_1 = actual;
    Asserter.prototype.assertSame_0.call(this, message, expected, actual);
  };
  DefaultJsAsserter.prototype.assertNotSame_0 = function (message, illegal, actual) {
    this._e_0 = illegal;
    this._a_1 = actual;
    Asserter.prototype.assertNotSame_0.call(this, message, illegal, actual);
  };
  DefaultJsAsserter.prototype.assertNull_0 = function (message, actual) {
    this._a_1 = actual;
    Asserter.prototype.assertNull_0.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertNotNull_0 = function (message, actual) {
    this._a_1 = actual;
    Asserter.prototype.assertNotNull_0.call(this, message, actual);
  };
  DefaultJsAsserter.prototype.assertTrue_1 = function (lazyMessage, actual) {
    if (!actual) {
      var tmp0_failWithMessage_0 = null;
      var message_1 = lazyMessage();
      invokeHook(this, false, _no_name_provided_$factory_58(message_1));
      throw AssertionError_init_$Create$_2(message_1, tmp0_failWithMessage_0);
    } else {
      invokeHook(this, true, lazyMessage);
    }
  };
  DefaultJsAsserter.prototype.assertTrue_2 = function (message, actual) {
    this.assertTrue_1(_no_name_provided_$factory_59(message), actual);
  };
  DefaultJsAsserter.prototype.fail_1 = function (message) {
    this.fail_2(message, null);
  };
  DefaultJsAsserter.prototype.fail_2 = function (message, cause) {
    var message_1 = message;
    invokeHook(this, false, _no_name_provided_$factory_60(message_1));
    throw AssertionError_init_$Create$_2(message_1, cause);
  };
  DefaultJsAsserter.$metadata$ = {
    simpleName: 'DefaultJsAsserter',
    kind: 'object',
    interfaces: [Asserter]
  };
  var DefaultJsAsserter_instance;
  function DefaultJsAsserter_getInstance() {
    if (DefaultJsAsserter_instance == null)
      new DefaultJsAsserter();
    return DefaultJsAsserter_instance;
  }
  function _no_name_provided__81() {
  }
  _no_name_provided__81.prototype.invoke_125 = function (_anonymous_parameter_0_) {
    return Unit_getInstance();
  };
  _no_name_provided__81.prototype.invoke_68 = function (p1) {
    this.invoke_125((!(p1 == null) ? isObject(p1) : false) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__81.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_57() {
    var i = new _no_name_provided__81();
    return function (p1) {
      i.invoke_125(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_58($message_1) {
    var i = new _no_name_provided__76($message_1);
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_59($message) {
    var i = new _no_name_provided__77($message);
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_60($message_1) {
    var i = new _no_name_provided__78($message_1);
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_61($message) {
    var i = new _no_name_provided__79($message);
    return function () {
      return i.invoke_20();
    };
  }
  function assertHook$init$() {
    return _no_name_provided_$factory_57();
  }
  function lookupAsserter() {
    return DefaultJsAsserter_getInstance();
  }
  function AssertionErrorWithCause(message, cause) {
    return AssertionError_init_$Create$_2(message, cause);
  }
  function _set_currentAdapter_(_set___) {
    currentAdapter = _set___;
  }
  function _get_currentAdapter_() {
    return currentAdapter;
  }
  var currentAdapter;
  function _get_NAME_TO_ADAPTER_() {
    return NAME_TO_ADAPTER;
  }
  var NAME_TO_ADAPTER;
  function detectAdapter() {
    return isQUnit() ? new QUnitAdapter() : isJasmine() ? new JasmineLikeAdapter() : new BareAdapter();
  }
  function suite_0(name, ignored, suiteFn) {
    adapter().suite(name, ignored, suiteFn);
  }
  function adapter() {
    var tmp0_elvis_lhs = currentAdapter;
    var result = tmp0_elvis_lhs == null ? detectAdapter() : tmp0_elvis_lhs;
    currentAdapter = result;
    return result;
  }
  function test_0(name, ignored, testFn) {
    adapter().test(name, ignored, testFn);
  }
  function _no_name_provided__82() {
  }
  _no_name_provided__82.prototype.invoke_20 = function () {
    return new QUnitAdapter();
  };
  _no_name_provided__82.prototype._get_name__23 = function () {
    return '<init>';
  };
  _no_name_provided__82.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__83() {
  }
  _no_name_provided__83.prototype.invoke_20 = function () {
    return new JasmineLikeAdapter();
  };
  _no_name_provided__83.prototype._get_name__23 = function () {
    return '<init>';
  };
  _no_name_provided__83.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__84() {
  }
  _no_name_provided__84.prototype.invoke_20 = function () {
    return new JasmineLikeAdapter();
  };
  _no_name_provided__84.prototype._get_name__23 = function () {
    return '<init>';
  };
  _no_name_provided__84.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__85() {
  }
  _no_name_provided__85.prototype.invoke_20 = function () {
    return new JasmineLikeAdapter();
  };
  _no_name_provided__85.prototype._get_name__23 = function () {
    return '<init>';
  };
  _no_name_provided__85.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__86() {
  }
  _no_name_provided__86.prototype.invoke_20 = function () {
    return detectAdapter();
  };
  _no_name_provided__86.prototype._get_name__23 = function () {
    return 'detectAdapter';
  };
  _no_name_provided__86.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_62() {
    var i = new _no_name_provided__82();
    var l = function () {
      return i.invoke_20();
    };
    l.callableName = i._get_name__23();
    return l;
  }
  function _no_name_provided_$factory_63() {
    var i = new _no_name_provided__83();
    var l = function () {
      return i.invoke_20();
    };
    l.callableName = i._get_name__23();
    return l;
  }
  function _no_name_provided_$factory_64() {
    var i = new _no_name_provided__84();
    var l = function () {
      return i.invoke_20();
    };
    l.callableName = i._get_name__23();
    return l;
  }
  function _no_name_provided_$factory_65() {
    var i = new _no_name_provided__85();
    var l = function () {
      return i.invoke_20();
    };
    l.callableName = i._get_name__23();
    return l;
  }
  function _no_name_provided_$factory_66() {
    var i = new _no_name_provided__86();
    var l = function () {
      return i.invoke_20();
    };
    l.callableName = i._get_name__23();
    return l;
  }
  function NAME_TO_ADAPTER$init$() {
    var tmp = to('qunit', _no_name_provided_$factory_62());
    var tmp_0 = to('jasmine', _no_name_provided_$factory_63());
    var tmp_1 = to('mocha', _no_name_provided_$factory_64());
    var tmp_2 = to('jest', _no_name_provided_$factory_65());
    return mapOf([tmp, tmp_0, tmp_1, tmp_2, to('auto', _no_name_provided_$factory_66())]);
  }
  function BareAdapter() {
  }
  BareAdapter.prototype.suite_2 = function (name, ignored, suiteFn) {
    if (!ignored) {
      suiteFn();
    }};
  BareAdapter.prototype.suite = function (name, ignored, suiteFn) {
    return this.suite_2(name, ignored, suiteFn);
  };
  BareAdapter.prototype.test_2 = function (name, ignored, testFn) {
    if (!ignored) {
      testFn();
      Unit_getInstance();
    }};
  BareAdapter.prototype.test = function (name, ignored, testFn) {
    return this.test_2(name, ignored, testFn);
  };
  BareAdapter.$metadata$ = {
    simpleName: 'BareAdapter',
    kind: 'class',
    interfaces: []
  };
  function isQUnit() {
    return typeof QUnit !== 'undefined';
  }
  function isJasmine() {
    return typeof describe === 'function' && typeof it === 'function';
  }
  function JasmineLikeAdapter() {
  }
  JasmineLikeAdapter.prototype.suite_2 = function (name, ignored, suiteFn) {
    if (ignored) {
      xdescribe(name, suiteFn);
    } else {
      describe(name, suiteFn);
    }
  };
  JasmineLikeAdapter.prototype.suite = function (name, ignored, suiteFn) {
    return this.suite_2(name, ignored, suiteFn);
  };
  JasmineLikeAdapter.prototype.test_2 = function (name, ignored, testFn) {
    if (ignored) {
      xit(name, testFn);
    } else {
      it(name, testFn);
    }
  };
  JasmineLikeAdapter.prototype.test = function (name, ignored, testFn) {
    return this.test_2(name, ignored, testFn);
  };
  JasmineLikeAdapter.$metadata$ = {
    simpleName: 'JasmineLikeAdapter',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__87($assertionsHappened, $assert) {
    this._$assertionsHappened = $assertionsHappened;
    this._$assert = $assert;
  }
  _no_name_provided__87.prototype.invoke_125 = function (testResult) {
    this._$assertionsHappened._v = true;
    this._$assert.ok(testResult.result, testResult.lazyMessage());
  };
  _no_name_provided__87.prototype.invoke_68 = function (p1) {
    this.invoke_125((!(p1 == null) ? isObject(p1) : false) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__87.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function wrapTest($this, testFn) {
    return _no_name_provided_$factory_67(testFn);
  }
  function _no_name_provided__88($testFn) {
    this._$testFn = $testFn;
  }
  _no_name_provided__88.prototype.invoke_127 = function (assert) {
    var assertionsHappened = {_v: false};
    assertHook = _no_name_provided_$factory_68(assertionsHappened, assert);
    var possiblePromise = this._$testFn();
    if (!assertionsHappened._v) {
      assertTrue(true, 'A test with no assertions is considered successful');
    }return possiblePromise;
  };
  _no_name_provided__88.prototype.invoke_68 = function (p1) {
    return this.invoke_127((p1 == null ? true : p1) ? p1 : THROW_CCE());
  };
  _no_name_provided__88.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function QUnitAdapter() {
    this._ignoredSuite = false;
  }
  QUnitAdapter.prototype._set_ignoredSuite_ = function (_set___) {
    this._ignoredSuite = _set___;
  };
  QUnitAdapter.prototype._get_ignoredSuite_ = function () {
    return this._ignoredSuite;
  };
  QUnitAdapter.prototype.suite_2 = function (name, ignored, suiteFn) {
    var prevIgnore = this._ignoredSuite;
    this._ignoredSuite = !!(this._ignoredSuite | ignored);
    QUnit.module(name, suiteFn);
    this._ignoredSuite = prevIgnore;
  };
  QUnitAdapter.prototype.suite = function (name, ignored, suiteFn) {
    return this.suite_2(name, ignored, suiteFn);
  };
  QUnitAdapter.prototype.test_2 = function (name, ignored, testFn) {
    if (!!(ignored | this._ignoredSuite)) {
      QUnit.skip(name, wrapTest(this, testFn));
    } else {
      QUnit.test(name, wrapTest(this, testFn));
    }
  };
  QUnitAdapter.prototype.test = function (name, ignored, testFn) {
    return this.test_2(name, ignored, testFn);
  };
  QUnitAdapter.$metadata$ = {
    simpleName: 'QUnitAdapter',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_67($testFn) {
    var i = new _no_name_provided__88($testFn);
    return function (p1) {
      return i.invoke_127(p1);
    };
  }
  function _no_name_provided_$factory_68($assertionsHappened, $assert) {
    var i = new _no_name_provided__87($assertionsHappened, $assert);
    return function (p1) {
      i.invoke_125(p1);
      return Unit_getInstance();
    };
  }
  function DoubleProgressionTest() {
  }
  DoubleProgressionTest.prototype.testNormalSplit = function () {
    var prog = new DoubleProgression(0.0, 0.1, 10);
    var tmp0_container = prog.split(0.25);
    var firstHalf = tmp0_container.component1_1();
    var secondHalf = tmp0_container.component2_1();
    assertEquals$default(3, firstHalf._progressionSize, null, 4, null);
    assertEquals$default(7, secondHalf._progressionSize, null, 4, null);
  };
  DoubleProgressionTest.prototype.testLowSplit = function () {
    var prog = new DoubleProgression(0.0, 0.1, 10);
    var tmp0_container = prog.split(-0.45);
    var firstHalf = tmp0_container.component1_1();
    var secondHalf = tmp0_container.component2_1();
    assertEquals$default(0, firstHalf._progressionSize, null, 4, null);
    assertEquals$default(10, secondHalf._progressionSize, null, 4, null);
  };
  DoubleProgressionTest.prototype.testHighSplit = function () {
    var prog = new DoubleProgression(0.0, 0.1, 10);
    var tmp0_container = prog.split(1.5);
    var firstHalf = tmp0_container.component1_1();
    var secondHalf = tmp0_container.component2_1();
    assertEquals$default(10, firstHalf._progressionSize, null, 4, null);
    assertEquals$default(0, secondHalf._progressionSize, null, 4, null);
  };
  DoubleProgressionTest.prototype.testIndexing = function () {
    var prog = new DoubleProgression(0.0, 0.1, 10);
    var tmp = prog.floorIndex(0.25);
    assertEquals$default(2, tmp, null, 4, null);
    var tmp_0 = prog.ceilIndex(0.25);
    assertEquals$default(3, tmp_0, null, 4, null);
    var tmp_1 = prog.contains_14(0.25);
    assertEquals$default(true, tmp_1, null, 4, null);
    var tmp_2 = prog.contains_14(-0.55);
    assertEquals$default(false, tmp_2, null, 4, null);
  };
  DoubleProgressionTest.prototype.testIterator = function () {
    var prog = new DoubleProgression(0.0, 0.1, 10);
    var tmp0_abs_0 = 0.9 - last_1(prog);
    var tmp = Math.abs(tmp0_abs_0) < 1.0E-6;
    assertTrue$default(tmp, null, 2, null);
  };
  DoubleProgressionTest.prototype.testClosedIntervalConstruction = function () {
    var prog = Companion_getInstance_23().fromClosedInterval(0.0, 1.0, 11);
    var tmp0_abs_0 = 0.0 - first_0(prog);
    var tmp = Math.abs(tmp0_abs_0) < 1.0E-6;
    assertTrue$default(tmp, null, 2, null);
    var tmp1_abs_0 = 1.0 - last_1(prog);
    var tmp_0 = Math.abs(tmp1_abs_0) < 1.0E-6;
    assertTrue$default(tmp_0, null, 2, null);
  };
  DoubleProgressionTest.$metadata$ = {
    simpleName: 'DoubleProgressionTest',
    kind: 'class',
    interfaces: []
  };
  function _get_ACCEL_CONSTRAINT_() {
    return ACCEL_CONSTRAINT;
  }
  var ACCEL_CONSTRAINT;
  function _get_MAX_WHEEL_VEL_() {
    return MAX_WHEEL_VEL;
  }
  var MAX_WHEEL_VEL;
  function _get_TRACK_WIDTH_() {
    return TRACK_WIDTH;
  }
  var TRACK_WIDTH;
  function DriveWheelConstraintsTest() {
  }
  DriveWheelConstraintsTest.$metadata$ = {
    simpleName: 'DriveWheelConstraintsTest',
    kind: 'class',
    interfaces: []
  };
  function throwsPathBuilderException($this, generatePath) {
    var tmp;
    try {
      generatePath();
      tmp = false;
    } catch ($p) {
      var tmp_0;
      if ($p instanceof PathBuilderException) {
        tmp_0 = true;
      } else {
        if ($p instanceof Error) {
          tmp_0 = false;
        } else {
          {
            throw $p;
          }
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function _no_name_provided__89() {
  }
  _no_name_provided__89.prototype.invoke_97 = function () {
    var tmp = Pose2d_init_$Create$(0.0, 0.0, 0.0, 7, null);
    PathBuilder_init_$Create$_0(tmp, 0.0, 2, null).lineTo(new Vector2d(10.0, 0.0)).lineTo(new Vector2d(-10.0, 0.0)).build_0();
    Unit_getInstance();
  };
  _no_name_provided__89.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__89.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__90() {
  }
  _no_name_provided__90.prototype.invoke_97 = function () {
    var tmp = Pose2d_init_$Create$(0.0, 0.0, 0.0, 7, null);
    PathBuilder_init_$Create$_0(tmp, 0.0, 2, null).lineToLinearHeading(new Pose2d(10.0, 0.0, 1.5707963267948966)).lineToLinearHeading(new Pose2d(-10.0, 0.0, 0.0)).build_0();
    Unit_getInstance();
  };
  _no_name_provided__90.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__90.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__91() {
  }
  _no_name_provided__91.prototype.invoke_97 = function () {
    var tmp = Pose2d_init_$Create$(0.0, 0.0, 0.0, 7, null);
    PathBuilder_init_$Create$_0(tmp, 0.0, 2, null).splineTo(new Vector2d(10.0, 10.0), 0.0).splineTo(new Vector2d(20.0, 20.0), 0.0);
    Unit_getInstance();
  };
  _no_name_provided__91.prototype.invoke_20 = function () {
    this.invoke_97();
    return Unit_getInstance();
  };
  _no_name_provided__91.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PathBuilderTest() {
  }
  PathBuilderTest.prototype.testTangentReversal = function () {
    var tmp = throwsPathBuilderException(this, _no_name_provided_$factory_69());
    assertEquals$default(true, tmp, null, 4, null);
  };
  PathBuilderTest.prototype.testImproperHeadingInterpSeq = function () {
    var tmp = throwsPathBuilderException(this, _no_name_provided_$factory_70());
    assertEquals$default(true, tmp, null, 4, null);
  };
  PathBuilderTest.prototype.testNoContinuityException = function () {
    var tmp = throwsPathBuilderException(this, _no_name_provided_$factory_71());
    assertEquals$default(false, tmp, null, 4, null);
  };
  PathBuilderTest.$metadata$ = {
    simpleName: 'PathBuilderTest',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_69() {
    var i = new _no_name_provided__89();
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_70() {
    var i = new _no_name_provided__90();
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_71() {
    var i = new _no_name_provided__91();
    return function () {
      i.invoke_97();
      return Unit_getInstance();
    };
  }
  function PathTest() {
  }
  PathTest.prototype.testPathDerivatives = function () {
    var tmp = Knot_init_$Create$(0.0, 0.0, 20.0, 40.0, 0.0, 0.0, 48, null);
    var tmp_0 = Knot_init_$Create$(45.0, 35.0, 60.0, 10.0, 0.0, 0.0, 48, null);
    var tmp_1 = QuinticSpline_init_$Create$(tmp, tmp_0, 0.0, 0.0, 0, 28, null);
    var tmp0_toTypedArray_0 = listOf_0(PathSegment_init_$Create$(tmp_1, null, 2, null));
    var splineSegment = new Path(copyToArray_0(tmp0_toTypedArray_0));
    var resolution = 1000;
    var s = Companion_getInstance_23().fromClosedInterval(0.0, splineSegment.length(), resolution);
    var ds = s._step_9;
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(s, 10));
    var tmp0_iterator_1_2 = s.iterator_51();
    while (tmp0_iterator_1_2.hasNext_43()) {
      var item_2_3 = tmp0_iterator_1_2.next_48();
      tmp0_mapTo_0_1.add_22(splineSegment.get$default_3(item_2_3, 0.0, 2, null)._x);
      Unit_getInstance();
    }
    var x = tmp0_mapTo_0_1;
    var tmp0_mapTo_0_1_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(s, 10));
    var tmp0_iterator_1_2_0 = s.iterator_51();
    while (tmp0_iterator_1_2_0.hasNext_43()) {
      var item_2_3_0 = tmp0_iterator_1_2_0.next_48();
      tmp0_mapTo_0_1_0.add_22(splineSegment.deriv$default_3(item_2_3_0, 0.0, 2, null)._x);
      Unit_getInstance();
    }
    var dx = tmp0_mapTo_0_1_0;
    var tmp0_mapTo_0_1_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(s, 10));
    var tmp0_iterator_1_2_1 = s.iterator_51();
    while (tmp0_iterator_1_2_1.hasNext_43()) {
      var item_2_3_1 = tmp0_iterator_1_2_1.next_48();
      tmp0_mapTo_0_1_1.add_22(splineSegment.secondDeriv$default_3(item_2_3_1, 0.0, 2, null)._x);
      Unit_getInstance();
    }
    var d2x = tmp0_mapTo_0_1_1;
    var tmp0_mapTo_0_1_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(s, 10));
    var tmp0_iterator_1_2_2 = s.iterator_51();
    while (tmp0_iterator_1_2_2.hasNext_43()) {
      var item_2_3_2 = tmp0_iterator_1_2_2.next_48();
      tmp0_mapTo_0_1_2.add_22(splineSegment.get$default_3(item_2_3_2, 0.0, 2, null)._y);
      Unit_getInstance();
    }
    var y = tmp0_mapTo_0_1_2;
    var tmp0_mapTo_0_1_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(s, 10));
    var tmp0_iterator_1_2_3 = s.iterator_51();
    while (tmp0_iterator_1_2_3.hasNext_43()) {
      var item_2_3_3 = tmp0_iterator_1_2_3.next_48();
      tmp0_mapTo_0_1_3.add_22(splineSegment.deriv$default_3(item_2_3_3, 0.0, 2, null)._y);
      Unit_getInstance();
    }
    var dy = tmp0_mapTo_0_1_3;
    var tmp0_mapTo_0_1_4 = ArrayList_init_$Create$_0(collectionSizeOrDefault(s, 10));
    var tmp0_iterator_1_2_4 = s.iterator_51();
    while (tmp0_iterator_1_2_4.hasNext_43()) {
      var item_2_3_4 = tmp0_iterator_1_2_4.next_48();
      tmp0_mapTo_0_1_4.add_22(splineSegment.secondDeriv$default_3(item_2_3_4, 0.0, 2, null)._y);
      Unit_getInstance();
    }
    var d2y = tmp0_mapTo_0_1_4;
    var tmp0_mapTo_0_1_5 = ArrayList_init_$Create$_0(collectionSizeOrDefault(s, 10));
    var tmp0_iterator_1_2_5 = s.iterator_51();
    while (tmp0_iterator_1_2_5.hasNext_43()) {
      var item_2_3_5 = tmp0_iterator_1_2_5.next_48();
      tmp0_mapTo_0_1_5.add_22(splineSegment.get$default_3(item_2_3_5, 0.0, 2, null)._heading);
      Unit_getInstance();
    }
    var heading = tmp0_mapTo_0_1_5;
    var tmp0_mapTo_0_1_6 = ArrayList_init_$Create$_0(collectionSizeOrDefault(s, 10));
    var tmp0_iterator_1_2_6 = s.iterator_51();
    while (tmp0_iterator_1_2_6.hasNext_43()) {
      var item_2_3_6 = tmp0_iterator_1_2_6.next_48();
      tmp0_mapTo_0_1_6.add_22(splineSegment.deriv$default_3(item_2_3_6, 0.0, 2, null)._heading);
      Unit_getInstance();
    }
    var headingDeriv = tmp0_mapTo_0_1_6;
    var tmp0_mapTo_0_1_7 = ArrayList_init_$Create$_0(collectionSizeOrDefault(s, 10));
    var tmp0_iterator_1_2_7 = s.iterator_51();
    while (tmp0_iterator_1_2_7.hasNext_43()) {
      var item_2_3_7 = tmp0_iterator_1_2_7.next_48();
      tmp0_mapTo_0_1_7.add_22(splineSegment.secondDeriv$default_3(item_2_3_7, 0.0, 2, null)._heading);
      Unit_getInstance();
    }
    var headingSecondDeriv = tmp0_mapTo_0_1_7;
    var tmp_2 = TestUtil_getInstance();
    var tmp_3 = tmp_2.assertDerivEquals$default(x, dx, ds, 0.01, 0.0, 16, null);
    assertTrue$default(tmp_3, null, 2, null);
    var tmp_4 = TestUtil_getInstance();
    var tmp_5 = tmp_4.assertDerivEquals$default(dx, d2x, ds, 0.01, 0.0, 16, null);
    assertTrue$default(tmp_5, null, 2, null);
    var tmp_6 = TestUtil_getInstance();
    var tmp_7 = tmp_6.assertDerivEquals$default(y, dy, ds, 0.01, 0.0, 16, null);
    assertTrue$default(tmp_7, null, 2, null);
    var tmp_8 = TestUtil_getInstance();
    var tmp_9 = tmp_8.assertDerivEquals$default(dy, d2y, ds, 0.01, 0.0, 16, null);
    assertTrue$default(tmp_9, null, 2, null);
    var tmp_10 = TestUtil_getInstance();
    var tmp_11 = tmp_10.assertDerivEquals$default(heading, headingDeriv, ds, 0.01, 0.0, 16, null);
    assertTrue$default(tmp_11, null, 2, null);
    var tmp_12 = TestUtil_getInstance();
    var tmp_13 = tmp_12.assertDerivEquals$default(headingDeriv, headingSecondDeriv, ds, 0.01, 0.0, 16, null);
    assertTrue$default(tmp_13, null, 2, null);
  };
  PathTest.$metadata$ = {
    simpleName: 'PathTest',
    kind: 'class',
    interfaces: []
  };
  function numericalDerivative($this, x, ds) {
    var tmp0_map_0 = until(0, x._get_size__36() - 2 | 0);
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var inductionVariable = tmp0_map_0._get_first__9();
    var last_2 = tmp0_map_0._get_last__10();
    if (inductionVariable <= last_2)
      do {
        var item_2_3 = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        tmp0_mapTo_0_1.add_22((x.get_39(item_2_3 + 2 | 0) - x.get_39(item_2_3)) / (2 * ds));
        Unit_getInstance();
      }
       while (!(item_2_3 === last_2));
    var deriv = toMutableList_0(tmp0_mapTo_0_1);
    deriv.add_20(0, first_1(deriv));
    deriv.add_22(last_0(deriv));
    Unit_getInstance();
    return deriv;
  }
  function TestUtil() {
    TestUtil_instance = this;
  }
  TestUtil.prototype.assertDerivEquals = function (x, dx, ds, epsilon, errorFreq) {
    var numDx = numericalDerivative(this, x, ds);
    var tmp0_map_0 = zip(dx, numDx);
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_51();
    while (tmp0_iterator_1_2.hasNext_43()) {
      var item_2_3 = tmp0_iterator_1_2.next_48();
      var tmp0_abs_0_5 = item_2_3._first - item_2_3._second;
      tmp0_mapTo_0_1.add_22(Math.abs(tmp0_abs_0_5));
      Unit_getInstance();
    }
    var tmp1_filter_0 = tmp0_mapTo_0_1;
    var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
    var tmp0_iterator_1_2_0 = tmp1_filter_0.iterator_51();
    while (tmp0_iterator_1_2_0.hasNext_43()) {
      var element_2_3 = tmp0_iterator_1_2_0.next_48();
      if (element_2_3 > epsilon) {
        tmp0_filterTo_0_1.add_22(element_2_3);
        Unit_getInstance();
      } else {
      }
    }
    var tmp2_count_0 = tmp0_filterTo_0_1;
    var count_0 = tmp2_count_0._get_size__36();
    var freq = count_0 / x._get_size__36();
    return freq <= errorFreq;
  };
  TestUtil.prototype.assertDerivEquals$default = function (x, dx, ds, epsilon, errorFreq, $mask0, $handler) {
    if (!(($mask0 & 16) === 0))
      errorFreq = 0.01;
    return this.assertDerivEquals(x, dx, ds, epsilon, errorFreq);
  };
  TestUtil.prototype.assertContinuous = function (values_8, epsilon) {
    var tmp0_map_0 = zip(drop(values_8, 1), dropLast(values_8, 1));
    var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
    var tmp0_iterator_1_2 = tmp0_map_0.iterator_51();
    while (tmp0_iterator_1_2.hasNext_43()) {
      var item_2_3 = tmp0_iterator_1_2.next_48();
      tmp0_mapTo_0_1.add_22(item_2_3._first - item_2_3._second);
      Unit_getInstance();
    }
    var tmp0_elvis_lhs = maxOrNull(tmp0_mapTo_0_1);
    return (tmp0_elvis_lhs == null ? 0.0 : tmp0_elvis_lhs) < 1.0E-6;
  };
  TestUtil.$metadata$ = {
    simpleName: 'TestUtil',
    kind: 'object',
    interfaces: []
  };
  var TestUtil_instance;
  function TestUtil_getInstance() {
    if (TestUtil_instance == null)
      new TestUtil();
    return TestUtil_instance;
  }
  function test_fun() {
    suite_0('', false, _no_name_provided_$factory_72());
  }
  function _no_name_provided__92() {
  }
  _no_name_provided__92.prototype.invoke_20 = function () {
    var tmp = new DoubleProgressionTest();
    tmp.testNormalSplit();
    return Unit_getInstance();
  };
  _no_name_provided__92.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__93() {
  }
  _no_name_provided__93.prototype.invoke_20 = function () {
    var tmp = new DoubleProgressionTest();
    tmp.testLowSplit();
    return Unit_getInstance();
  };
  _no_name_provided__93.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__94() {
  }
  _no_name_provided__94.prototype.invoke_20 = function () {
    var tmp = new DoubleProgressionTest();
    tmp.testHighSplit();
    return Unit_getInstance();
  };
  _no_name_provided__94.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__95() {
  }
  _no_name_provided__95.prototype.invoke_20 = function () {
    var tmp = new DoubleProgressionTest();
    tmp.testIndexing();
    return Unit_getInstance();
  };
  _no_name_provided__95.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__96() {
  }
  _no_name_provided__96.prototype.invoke_20 = function () {
    var tmp = new DoubleProgressionTest();
    tmp.testIterator();
    return Unit_getInstance();
  };
  _no_name_provided__96.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__97() {
  }
  _no_name_provided__97.prototype.invoke_20 = function () {
    var tmp = new DoubleProgressionTest();
    tmp.testClosedIntervalConstruction();
    return Unit_getInstance();
  };
  _no_name_provided__97.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__98() {
  }
  _no_name_provided__98.prototype.invoke_20 = function () {
    var tmp = new PathBuilderTest();
    tmp.testTangentReversal();
    return Unit_getInstance();
  };
  _no_name_provided__98.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__99() {
  }
  _no_name_provided__99.prototype.invoke_20 = function () {
    var tmp = new PathBuilderTest();
    tmp.testImproperHeadingInterpSeq();
    return Unit_getInstance();
  };
  _no_name_provided__99.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__100() {
  }
  _no_name_provided__100.prototype.invoke_20 = function () {
    var tmp = new PathBuilderTest();
    tmp.testNoContinuityException();
    return Unit_getInstance();
  };
  _no_name_provided__100.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__101() {
  }
  _no_name_provided__101.prototype.invoke_20 = function () {
    var tmp = new PathTest();
    tmp.testPathDerivatives();
    return Unit_getInstance();
  };
  _no_name_provided__101.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__102() {
  }
  _no_name_provided__102.prototype.invoke_20 = function () {
    test_0('testNormalSplit', false, _no_name_provided_$factory_76());
    test_0('testLowSplit', false, _no_name_provided_$factory_77());
    test_0('testHighSplit', false, _no_name_provided_$factory_78());
    test_0('testIndexing', false, _no_name_provided_$factory_79());
    test_0('testIterator', false, _no_name_provided_$factory_80());
    test_0('testClosedIntervalConstruction', false, _no_name_provided_$factory_81());
  };
  _no_name_provided__102.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__103() {
  }
  _no_name_provided__103.prototype.invoke_20 = function () {
    test_0('testTangentReversal', false, _no_name_provided_$factory_82());
    test_0('testImproperHeadingInterpSeq', false, _no_name_provided_$factory_83());
    test_0('testNoContinuityException', false, _no_name_provided_$factory_84());
  };
  _no_name_provided__103.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__104() {
  }
  _no_name_provided__104.prototype.invoke_20 = function () {
    test_0('testPathDerivatives', false, _no_name_provided_$factory_85());
  };
  _no_name_provided__104.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__105() {
  }
  _no_name_provided__105.prototype.invoke_20 = function () {
    suite_0('DoubleProgressionTest', false, _no_name_provided_$factory_73());
    suite_0('PathBuilderTest', false, _no_name_provided_$factory_74());
    suite_0('PathTest', false, _no_name_provided_$factory_75());
  };
  _no_name_provided__105.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_72() {
    var i = new _no_name_provided__105();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_73() {
    var i = new _no_name_provided__102();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_74() {
    var i = new _no_name_provided__103();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_75() {
    var i = new _no_name_provided__104();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_76() {
    var i = new _no_name_provided__92();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_77() {
    var i = new _no_name_provided__93();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_78() {
    var i = new _no_name_provided__94();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_79() {
    var i = new _no_name_provided__95();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_80() {
    var i = new _no_name_provided__96();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_81() {
    var i = new _no_name_provided__97();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_82() {
    var i = new _no_name_provided__98();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_83() {
    var i = new _no_name_provided__99();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_84() {
    var i = new _no_name_provided__100();
    return function () {
      return i.invoke_20();
    };
  }
  function _no_name_provided_$factory_85() {
    var i = new _no_name_provided__101();
    return function () {
      return i.invoke_20();
    };
  }
  AbstractMap.prototype._get_entries__5 = Map_0.prototype._get_entries__5;
  CombinedContext.prototype.plus_3 = CoroutineContext.prototype.plus_3;
  UByteIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  UIntIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  ULongIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  UShortIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  ByteIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  IntIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  DoubleIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  FloatIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  LongIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  CharIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  BooleanIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  ShortIterator.prototype.hasNext_43 = Iterator_3.prototype.hasNext_43;
  AbstractMutableList.prototype.get_39 = List.prototype.get_39;
  AbstractMutableMap.prototype._get_entries__5 = MutableMap.prototype._get_entries__5;
  InternalHashCodeMap.prototype.createJsMap_0 = InternalMap.prototype.createJsMap_0;
  KClassImpl.prototype._get_simpleName__4 = KClass.prototype._get_simpleName__4;
  KClassImpl.prototype.isInstance_4 = KClass.prototype.isInstance_4;
  PI = 3.141592653589793;
  UNDEFINED_RESULT = UNDEFINED_RESULT$init$();
  _stableSortingIsSupported = null;
  output = output$init$();
  EmptyContinuation = EmptyContinuation$init$();
  INV_2_26 = INV_2_26$init$();
  INV_2_53 = INV_2_53$init$();
  functionClasses = functionClasses$init$();
  STRING_CASE_INSENSITIVE_ORDER = STRING_CASE_INSENSITIVE_ORDER$init$();
  REPLACEMENT_BYTE_SEQUENCE = REPLACEMENT_BYTE_SEQUENCE$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufFloat32 = bufFloat32$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  OBJECT_HASH_CODE_PROPERTY_NAME = 'kotlinHashCodeValue$';
  POW_2_32 = 4.294967296E9;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  TWO_PWR_32_DBL_ = 4.294967296E9;
  TWO_PWR_63_DBL_ = 9.223372036854776E18;
  propertyRefClassMetadataCache = propertyRefClassMetadataCache$init$();
  EPSILON = 1.0E-6;
  _asserter = null;
  value = 5;
  tests = null;
  assertHook = assertHook$init$();
  currentAdapter = null;
  NAME_TO_ADAPTER = NAME_TO_ADAPTER$init$();
  ACCEL_CONSTRAINT = new ProfileAccelerationConstraint(25.0);
  MAX_WHEEL_VEL = 10.0;
  TRACK_WIDTH = 5.0;
  test_fun();
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
}));
