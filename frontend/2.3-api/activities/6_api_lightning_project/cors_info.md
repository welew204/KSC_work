NOTE: The `solo_instructions` and `group_instructions` files are where you
start. This file only contains supplemental information.


Picking APIs
------------------------------------

While all APIs are available from backed servers, only some APIs are accessible
directly from front-end JavaScript. This means that only some of the APIs you
see in the list above are available for you to use in this exercise.

1. Any that require secret API keys are strictly forbidden.

2. For security purposes, most APIs don't allow CORS (cross-origin resource
sharing).

3. Some CORS-disabled APIs might still be usable via a proxy such as
    - <https://corsproxy.github.io/>


CORS reflection questions
------------------------------------

- Why can't you use one that has a API secret in frontend development? Why
  would that be a security issue?
- CORS is a Header sent back from the server in the response. APIs that allow
  front-end APIs like what we are building must send back a special Header in
  the response that tells the browser to accept the response, even though the
  request came from a different domain. Why would cross-domain requests be a
  security issue?
- Why is CORS only an issue for frontend APIs, while backend APIs don't have
  that issue?

