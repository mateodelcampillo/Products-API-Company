import jwt from "jsonwebtoken"
import config from "../config"
import Role from "../models/Role"
import User from "../models/User"


export const verifyToken = async (req, res, next) => {

   try {
      const token = req.headers["x-access-token"]
      console.log(token)

      if (!token) return res.status(403).json({ message: "No token provided" })
      const decoded = jwt.verify(token, config.SECRET)
      req.userId = decoded.id
      const user = await User.findById(decoded.id, { password: 0 })
      if (!user) {
         return res.status(404).json({ message: "No user found" })
      }
      next()
   } catch (error) {

      res.status(404).json({ message: "Token invalido" })
   }




}

export const isModerator = async (req, res, next) => {
   const user = await User.findById(req.userId)
   const roles = await Role.find({ _id: { $in: user.roles } })
   console.log(roles)
   for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "moderator" || roles[i].name === "admin") {
         next()
         return
      }

   }
   return res.status(403).json({ message: "Requiere moderator role" })
}

export const isAdmin = async (req, res, next) => {
   const user = await User.findById(req.userId)
   const roles = await Role.find({ _id: { $in: user.roles } })
   console.log(roles)
   for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
         next()
         return
      }

   }
   return res.status(403).json({ message: "Requiere admin role" })
}