"use strict";

exports.PROVIDER = {
    FILE: {
        S3: "s3",
        CLOUDINARY: "cloudinary"
    },
};

exports.COMMENT = {
    TYPE: {
        COMMENT: "comment",
        DEFAULT: "default",
        NOTE: "note"
    }
};

exports.SUBSCRIPTION = {
    TENURE:{
        WEEK:"week",
        MONTH:"month",
        QUARTER:"quarter",
        HALF_YEAR:"halfyear",
        YEAR:"year",
        ONE_OFF:"one_off"
    }
};
