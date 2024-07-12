const express = require( "express" );
//*   const router = express.Route();
//* it should be express.Router() // not Route()
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ book: "Love story" });
});

module.exports = router;
