import { OAuth2Client } from "google-auth-library";
import models from "../database/models";

const CLIENT_ID =
  "886352831577-nad8j9up60v9v36jg9p1h0vr7j0d5s43.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

class Authentication {
  static Login = async (req, res) => {
    res.render("login");
  };

  static SignIn = async (req, res) => {
    let token = req.body.token;
    console.log(token);
    try {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];
      // If request specified a G Suite domain:
      // const domain = payload['hd'];
      console.log(payload);
      res.cookie("session-token", token);
      res.send("success");
      const post = await models.User.create({
        name: payload.name,
        email: payload.email,
        googleid: payload.sub,
      });
      return res.status(201).json({
        post,
      });
    } catch (error) {
      console.error;
    }
  };
}

export default Authentication;
