import Mock from "mockjs";
import userApi from "./user";

Mock.mock(/\/user\/login/, "post", userApi.userLogin);
