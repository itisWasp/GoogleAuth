import models from "../database/models";

class User {
  static updateProfile = async (req, res) => {
    let user = req.user;
    let currentUser = user.googleid;
    try {
      const post = await models.Profile.create({
        age: req.body.age,
        gender: req.body.gender,
        address: req.body.address,
        education: req.body.education,
        UserId: currentUser,
        userId: currentUser,
      });
      return res.status(201).json({
        post,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static getProfile = async (req, res) => {
    let user = req.user;
    let currentUser = user.googleid;
    try {
      const singleProfile = await models.User.findOne({
        where: { googleid: currentUser },
        // include: [
        //   {
        //     model: models.Profile,
        //     as: "Profile",
        //   },
        // ],
      });

      if (singleProfile) {
        return res.status(200).json({ singleProfile });
      }
      return res.status(400).send("Post with the specified ID does not exists");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
}

export default User;
