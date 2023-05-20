import mongoose from "mongoose";

const BestellungSchema = new mongoose.Schema({
    kunde: {
        type: String,
        required: true,
        maxlength: 100
    },
    adresse: {
        type: String,
        required: true,
        maxlength: 250
    },
    betrag: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
    zahlung: {
        type: Number,
        required: true,
    },
}

)

export default mongoose.models.Bestellung || mongoose.model("Bestellung", BestellungSchema)