import BookInfo from "../../../../../models/bookinfo";
import { connectToDB } from "../../../../../utils/database";
export const POST = async (request) => {
  const { name, topic } = await request.json();
  try {
    await connectToDB();
    const newBook = new BookInfo({ name, topic });
    await newBook.save();
    return new Response(JSON.stringify(newBook), {status:201});
  } catch (error) {
    return new Response("Fail to create", {status:500});
  }
};
