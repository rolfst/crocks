---
title: "Writer"
description: "Writer Crock"
layout: "guide"
functions: ["log", "read"]
weight: 160
---


```haskell
Monoid m => Writer m a
```

The `Writer` monad makes it possible to represent and compose computations that produce  some 
additional data along with their computed values. `Writer` is a `Product` type that consists 
of a `Monoid` as a the first value that typically holds meta-data such as log lines, while the 
second value holds the result of the computation. 

<article id="topic-implements">

## Implements
`Functor`, `Apply`, `Chain`, `Applicative`, `Monad`

</article>

<article id="topic-construction">

## Construction

```haskell
Writer :: MonoidTypeRep M, Monoid m => M -> (m, a) -> Writer m a
```

`Writer` is a type constructor that takes a `Monoid` constructor and returns a new constructor. The new constructor is a binary function that accepts a `Monoid` instance and a value `a`, and returns a `Writer` instance.

```javascript
import Writer from 'crocks/Writer'

const StringWriter =  Writer(String)

StringWriter('value: zero', 0)
// Writer String Number

StringWriter('adding inputs', (a, b) => a + b)
// Writer String Number
```

</article>

<article id="topic-constructor">

## Constructor Methods

#### of 


```haskell
Writer.of :: a -> Writer m a
```

`of` is a construction helper that can be used to construct an `Writer` with any given value, with an empty instance of the `Monoid` that was passed to the type constructor.

```javascript
import Writer from 'crocks/Writer'

import List from 'crocks/List'

const ListWriter =  Writer(List)

ListWriter.of(42)
// Writer List Number
```

</article>

<article id="topic-instance">

## Instance Methods

#### equals

#### map

#### ap

#### chain

#### read

#### log

</article>

<article id="topic-pointfree">

## Pointfree Functions

#### read (pointfree)

#### log (pointfree)

</article>
