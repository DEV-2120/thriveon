const multer = require("multer");

// Set storage
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "uploads/");
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + "-" + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Update POST route
router.post("/apply", upload.single("resume"), async (req, res) => {
    try {
        const candidateData = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            visaStatus: req.body.visaStatus,
            skills: req.body.skills,
            resume: req.file.filename
        };
// GET all candidates
router.get("/candidates", async (req, res) => {
    try {
        const candidates = await Candidate.find();  // fetch all candidates from MongoDB
        res.json(candidates);                      // send as JSON to frontend
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
        const candidate = new Candidate(candidateData);
        await candidate.save();

        res.json({ message: "Application submitted successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
