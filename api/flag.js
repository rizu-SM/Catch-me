export default function handler(req, res) {
    const flag = process.env.FLAG;

    const mode = String(req.headers["sec-fetch-mode"] || "");
    const dest = String(req.headers["sec-fetch-dest"] || "");
    const accept = String(req.headers["accept"] || "");
    const clientProof = String(req.headers["x-ctf-client"] || "");

    const isDirectNavigation =
        mode === "navigate" ||
        dest === "document" ||
        accept.includes("text/html");

    const expectedProof = "console-printer-v1";

    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    if (isDirectNavigation || clientProof !== expectedProof) {
        return res.status(403).json({
            error: "nice_try_but_this_is_blocked"
        });
    }

    if (!flag) {
        return res.status(500).json({ error: "flag_not_configured" });
    }

    return res.status(200).json({ flag });
}
