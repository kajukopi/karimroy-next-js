import connectToDatabase from "../../../lib/mongodb"
import User from "../../../models/User"

export async function GET(request, {params}) {
  await connectToDatabase()

  const user = await User.findById(params.id)

  if (!user) {
    return new Response(JSON.stringify({message: "User not found"}), {status: 404})
  }

  return new Response(JSON.stringify(user), {status: 200})
}

export async function PUT(request, {params}) {
  await connectToDatabase()

  const {name, email} = await request.json()

  const user = await User.findByIdAndUpdate(params.id, {name, email}, {new: true})

  if (!user) {
    return new Response(JSON.stringify({message: "User not found"}), {status: 404})
  }

  return new Response(JSON.stringify(user), {status: 200})
}

export async function DELETE(request, {params}) {
  await connectToDatabase()

  const user = await User.findByIdAndDelete(params.id)

  if (!user) {
    return new Response(JSON.stringify({message: "User not found"}), {status: 404})
  }

  return new Response(JSON.stringify({message: "User deleted"}), {status: 200})
}
