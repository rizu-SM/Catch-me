export default function handler(req, res) {
    const flag = process.env.FLAG;

    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    if (!flag) {
        return res.status(500).json({ error: "flag_not_configured" });
    }

    return res.status(200).json({ flag });
}
