import { StatusCodes } from "http-status-codes";

export const notFound = (req, res) => {
    return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        status: StatusCodes.NOT_FOUND,
        message: `La route ${req.method}=${req.protocol}://${req.headers.host}${req.originalUrl} est introuvable !`
    })
}