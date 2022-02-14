module.exports = {
    paths: {
      "/posts": {
        get: {
          tags: {
            Posts: "Get Posts",
          },
          description: "Get Posts",
          operationId: "getPosts",
          parameters: [],
          responses: {
            200: {
              description: "Posts were obtained",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/post",
                  },
                },
              },
            },
          },
        },
        post: {
          tags: {
            Tasks: "Create a post",
          },
          description: "Create post",
          operationId: "createPost",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/PostInput",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Post created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
  
      },
      "/posts/{_id}": {
        put: {
          tags: {
            Tasks: "Update a post",
          },
          description: "Update Post",
          operationId: "updatePost",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of Post to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/PostInput" },
              },
            },
          },
          responses: {
            200: { description: "Post updated successfully" },
            404: { description: "Post not found" },
            500: { description: "Server error" },
          },
        },
        delete: {
          tags: {
            Tasks: "Update a task",
          },
          description: "Deleting a Task",
          operationId: "deleteTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Deleting a done Task",
            },
          ],
          responses: {
            200: { description: "Task deleted successfully" },
            404: { description: "Task not found" },
            500: { description: "Server error" },
          },
        },
  
      },
  
    },
  };
  