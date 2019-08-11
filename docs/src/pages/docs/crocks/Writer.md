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


</article>

<article id="topic-instance">

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
