import { Course, Dept, Prisma, User } from ".prisma/client";

export const TEST_USER_UUID = "e8b7ad6d-7086-4d8d-b831-079d5be7caa8";
export const TEST_USER: Partial<User> = {
  email: "test@mcmaster.ca",
  name: "Test User",
  imageUrl: "https://book-bazar-images.s3.us-east-2.amazonaws.com",
  id: TEST_USER_UUID,
};
export const TEST_POST_UUID = "a510b3dd-1ffb-4fdb-b2d3-9b8e3c4c0f63";
export const TEST_OTHER_PERSON_POST_UUID =
  "230beb00-48e8-4e93-8b20-da77e69dc5cb";

export const TEST_POST_1_UUID = "60f8de7d-9362-42fe-a9c9-fc9e4af28aae";
export const TEST_POST_2_UUID = "68b94647-b3d3-4ed7-90a3-e25c1abe8a07";

export const TEST_BOOK_1_ISBN = "9780321573513";
export const TEST_BOOK_2_ISBN = "281000000877B";

export const TEST_DEPARTMENT_UUID = "40237be4-cfee-4648-8420-d90e1ed3e6eb";
export const TEST_DEPARTMENT: Dept = {
  id: TEST_DEPARTMENT_UUID,
  name: "Computer Science",
  abbreviation: "COMPSCI",
};

export const TEST_COURSE_UUID = "d6e59eb0-dcb8-49f6-b6b7-23798b1fafff";
export const TEST_COURSE: Course = {
  id: TEST_COURSE_UUID,
  name: "Algorithms and Complexity",
  code: "3AC3",
  term: "Winter 2022",
  deptId: TEST_DEPARTMENT_UUID,
};

export const TEST_BOOK_UUID = "a176ef48-56cc-4fc5-bf9e-7b40e3e8e884";
export const TEST_BOOK = {
  courses: {
    connect: {
      id: TEST_COURSE_UUID,
    },
  },
  id: TEST_BOOK_UUID,
  isbn: TEST_BOOK_1_ISBN,
  name: "Algorithms",
  imageUrl:
    "https://book-bazar-images.s3.us-east-2.amazonaws.com/77498c29-6771-4786-a5b7-fcfeea506d11",
  campusStorePrice: 4000,
  isCampusStoreBook: true,
};

export const TEST_POSTS: Prisma.PostCreateManyInput[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
].map((price) => {
  return {
    bookId: TEST_BOOK_UUID,
    userId: TEST_USER_UUID,
    description: "TEST POST " + price,
    price: price,
    imageUrl:
      "https://book-bazar-images.s3.us-east-2.amazonaws.com/77498c29-6771-4786-a5b7-fcfeea506d11",
  };
});
