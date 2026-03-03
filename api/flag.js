export default function handler(req, res) {
    const expected = process.env.FLAG_API_SECRET;
    const supplied = req.headers['x-ctf-auth'];

    if (!expected || supplied !== expected) {
        return res.status(403).json({
            flag: "flag{decoy_direct_api_access_denied}",
            error: "forbidden"
        });
    }

    return res.status(200).json({
        flag: process.env.FLAG
    });
}
