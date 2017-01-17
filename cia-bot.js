/**
                    Experimental Version
**/
function MessageHandler(context, event) {
   
   if(event.message == "(Graduation_Date) promysticgamer"){
       context.sendResponse('>*Trainee Name:* promysticgamer' + '\n\n>*Date Added:* Thu Dec 08, 2016' + '\n\n>*Predicted Graduation:* Thu Dec 29, 2016' + '\n\n>*Extended Date:* Thu Jan 19, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the situation.*_'); 
    }
    else if(event.message == "(Graduation_Date) nexdrq_yt") {
        context.sendResponse('>*Trainee Name:* nexdrq_yt' + '\n\n>*Date Added:* Fri Dec 30, 2016' + '\n\n>*Predicted Graduation:* Fri Jan 20, 2017' + '\n\n>*Extended Date:* Fri Feb 10, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the situation.*_');
    }
    else if(event.message == "(Graduation_Date) xxheyitznaomixx") {
        context.sendResponse('>*Trainee Name:* xxheyitznaomixx' + '\n\n>*Date Added:* Mon Jan 02, 2017' + '\n\n>*Predicted Graduation:* Mon Jan 23, 2017' + '\n\n>*Extended Date:* Mon Feb 13, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the situation.*_');
    }
    else if(event.message == "(Graduation_Date) Xxsniper___"){
        context.sendResponse('>*Trainee Name:* Xxsniper___' + '\n\n>*Date Added:* Mon Jan 02, 2017' + '\n\n>*Predicted Graduation:* Mon Jan 23, 2017' + '\n\n>*Extended Date:* Mon Feb 13, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the situation.*_');
    }
    else if(event.message == "(Graduation_Date) tbnrmeg") {
        context.sendResponse('>*Trainee Name:* tbnrmeg' + '\n\n>*Date Added:* Fri Dec 30, 2016' + '\n\n>*Predicted Graduation:* Fri Jan 20, 2017' + '\n\n>*Extended Date:* Fri Feb 10, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the situation.*_');
    }
    if(event.message == 'Hey') {
   context.sendResponse('Hello ' + event.senderobj.display+' ,I see you are wanting to check the graduation date for a trainee! Well, you came to the right place! Message me `(Graduation_Date) "TraineeName"` to get a trainees certain date or to get this weeks possible grads, message me `(Current-Week-Grads)`');
   }
    if(event.message == 'Hello'){
     context.sendResponse('Hi ' +event.senderobj.display+ ' ,I see you are wanting to check the graduation date for a trainee! Well, you came to the right place! Message me `(Graduation_Date) "TraineeName"` to get a trainees certain date or to get this weeks possible grads, message me `(Current-Week-Grads)`');
   }
    
   if(event.message == 'Hi'){
       context.sendResponse('Hello '+ event.senderobj.display);
   }
   if(event.message == '(Current-Week-Grads)'){
     context.sendResponse('_*Listing This Weeks Possible Grads...*_' + '\n\n>*bounceyjeffer- Graduated*' + '\n\n>*kmsfruit- Graduated*' + '\n\n>*tbnrmeg-* _Jan 20, 2017_' + '\n\n_*These dates are not final and may change depending on the Leads decision!*_');
   }
}

function EventHandler(context, event) {
    
}
function HttpResponseHandler(context, event) {
    
}
function DbGetHandler(context, event) {
    
}
function DbPutHandler(context, event) {
    
}
