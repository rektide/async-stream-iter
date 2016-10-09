# Async Stream Iter

Read from a WHATWG Stream via a Asynchronous Iterator.

From the Streams FAQ we have,

> As the async iterable proposal progresses, we anticipate making readable streams into async iterables proper, so that you could use the proposed for async (const chunk of rs) syntax

― ["How do readable streams relate to async iterables"](https://github.com/whatwg/streams/blob/master/FAQ.md#how-do-readable-streams-related-to-async-iterables)

This library implements that async iteration on readers.
