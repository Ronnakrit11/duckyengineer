import { apiSlice } from "../api/apiSlice";

export const knowledgeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createKnowledge: builder.mutation({
      query: (data) => ({
        url: "create-knowledge",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
    // getAllCourses: builder.query({
    //   query: () => ({
    //     url: "get-admin-courses",
    //     method: "GET",
    //     credentials: "include" as const,
    //   }),
    // }),
    deleteKnowledge: builder.mutation({
      query: (id) => ({
        url: `delete-knowledge/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    editKnowledge: builder.mutation({
      query: ({ id, data }) => ({
        url: `/edit-knowledge/${id}`,
        method: "PUT",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getAllKnowlege: builder.query({
      query: () => ({
        url: "get-all-knowledge",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getBlogContent: builder.query({
      query: (id: any) => ({
        url: `get-blog/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getKnowledgeContentById: builder.query({
      query: (id: any) => ({
        url: `/get-knowledge-byid/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    // getCourseContent: builder.query({
    //   query: (id) => ({
    //     url: `get-course-content/${id}`,
    //     method: "GET",
    //     credentials: "include" as const,
    //   }),
    // }),
    // addNewQuestion: builder.mutation({
    //   query: ({ question, courseId, contentId }) => ({
    //     url: "add-question",
    //     body: {
    //       question,
    //       courseId,
    //       contentId,
    //     },
    //     method: "PUT",
    //     credentials: "include" as const,
    //   }),
    // }),
    // addAnswerInQuestion: builder.mutation({
    //   query: ({ answer, courseId, contentId, questionId }) => ({
    //     url: "add-answer",
    //     body: {
    //       answer,
    //       courseId,
    //       contentId,
    //       questionId,
    //     },
    //     method: "PUT",
    //     credentials: "include" as const,
    //   }),
    // }),
    // addReviewInCourse: builder.mutation({
    //   query: ({ review, rating, courseId }: any) => ({
    //     url: `add-review/${courseId}`,
    //     body: {
    //       review,
    //       rating,
    //     },
    //     method: "PUT",
    //     credentials: "include" as const,
    //   }),
    // }),
    // addReplyInReview: builder.mutation({
    //   query: ({ comment, courseId, reviewId }: any) => ({
    //     url: `add-reply`,
    //     body: {
    //       comment, courseId, reviewId
    //     },
    //     method: "PUT",
    //     credentials: "include" as const,
    //   }),
    // }),
  }),
});

export const {
  useCreateKnowledgeMutation,
  useGetAllKnowlegeQuery,
  useDeleteKnowledgeMutation,
  useEditKnowledgeMutation,
  // useGetUsersAllCoursesQuery,
  useGetBlogContentQuery,
  useGetKnowledgeContentByIdQuery,
  // useGetCourseContentQuery,
  // useAddNewQuestionMutation,
  // useAddAnswerInQuestionMutation,
  // useAddReviewInCourseMutation,
  // useAddReplyInReviewMutation
} = knowledgeApi;
