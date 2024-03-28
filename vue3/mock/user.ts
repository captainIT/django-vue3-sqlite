export default [
  {
    url: "/mock/login",
    method: "post",
    response: () => {
      return {
        code: 0,
        message: "ok",
        result: {"avatar":"","id":1},
      };
    },
  }
]
