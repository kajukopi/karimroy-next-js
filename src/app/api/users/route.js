import connectToDatabase from "../../lib/mongodb"
import User from "../../models/User"

export async function GET() {
  await connectToDatabase()

  const users = await User.find({})
  return new Response(JSON.stringify(users), {status: 200})
}

export async function POST(request) {
  await connectToDatabase()
  const {name, email} = await request.json()

  const newUser = new User({name, email})
  await newUser.save()

  return new Response(JSON.stringify(newUser), {status: 201})
}
