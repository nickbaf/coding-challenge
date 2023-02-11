const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ReportSchema = new Schema({
    "id": {
      "type": Schema.Types.ObjectId
    },
    "source": {
      "type": String
    },
    "sourceIdentityId": {
      "type": String
    },
    "reference": {
      "referenceId": {
        "type": String
      },
      "referenceType": {
        "type": String
      }
    },
    "state": {
      "type": String
    },
    "payload": {
      "source": {
        "type": String
      },
      "reportType": {
        "type": String
      },
      "message": {
        "type": Schema.Types.Mixed
      },
      "reportId": {
        "type": String
      },
      "referenceResourceId": {
        "type": String
      },
      "referenceResourceType": {
        "type": String
      }
    },
    "created": {
      "type": Date
    }
  }
);

module.exports = mongoose.model("Report", ReportSchema);