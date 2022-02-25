// Google Auth
import { OAuth2Client } from "google-auth-library";
const CLIENT_ID =
  "886352831577-nad8j9up60v9v36jg9p1h0vr7j0d5s43.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

class VerifyToken {
  static checkAuthenticated = async (req, res, next) => {
    let token = req.cookies["session-token"];

    console.log(token);

    let user = {};
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
      });
      const payload = ticket.getPayload();
      user.name = payload.name;
      user.email = payload.email;
      user.googleid = payload.sub;
    }
    verify()
      .then(() => {
        req.user = user;
        next();
      })
      .catch((err) => {
        res.redirect("/api/login");
      });
  };
}

export default VerifyToken;
