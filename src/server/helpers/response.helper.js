import express from 'express';
import HttpStatus from 'http-status-codes'

class ResponseHelper {
    
    init(){
        express.response.success = this.success;
        express.response.error = this.error;
        express.response.notFound = this.notFound;
        express.response.badRequest = this.badRequest;
        express.response.notAuthorized = this.notAuthorized;
    }
    
    success(data){
        this.status(HttpStatus.OK).send({
            success: true,
            data
        });
    }

    error(error){
        this.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            success: false,
            error
        });
    }

    notFound(message){
        this.status(HttpStatus.NOT_FOUND).send({
            success: false,
            error: message || 'Not found.'
        });
    }

    badRequest(errors){
        this.status(HttpStatus.BAD_REQUEST).json({
            success : false,
            errors
        });
    }

    notAuthorized(error) {
    	this.status(HttpStatus.UNAUTHORIZED).send({
            success: false,
            error: error
        });
    }
}

export default ResponseHelper;