function MessageHandler(context, event) {
   
   if(event.message == "(Graduation_Date) promysticgamer"){
       context.sendResponse('>*Trainee Name:* promysticgamer' + '\n\n>*Date Added:* Thu Dec 08, 2016' + '\n\n>*Predicted Graduation:* Thu Dec 29, 2016' + '\n\n>*Extended Date:* Thu Jan 19, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the situation.*_'); 
    }
    
    
    else if(event.message == "(Graduation_Date) kmsfruit") {
        context.sendResponse('>*Trainee Name:* kmsfruit' + '\n\n>*Date Added:* Thu Dec 29, 2016' + '\n\n>*Predicted Graduation:* Thu Jan 19, 2017' + '\n\n>*Extended Date:* Thu Feb 9, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the situation.*_'); 
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
    else if(event.message == "(Graduation_Date) mikemnd"){
        context.sendResponse('>*Trainee Name:* mikemnd' + '\n\n>*Date Added:* Thu Jan 05, 2017' + '\n\n>*Predicted Graduation:* Thu Jan 26, 2017' + '\n\n>*Extended Date:* Thu Feb 16, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the situation.*_');
    }
    else if(event.message == "(Graduation_Date) bouncyjeffer"){
        context.sendResponse('>*Trainee Name:* bouncyjeffer' + '\n\n>*Date Added:* Fri Jan 06, 2017' + '\n\n>*Predicted Graduation:* Fri Jan 27, 2017' + '\n\n>*Extended Date:* Fri Feb 17, 2017' +'\n\n_*The date shown is not final and may change at anytime depending on the situation.*_');
    }else{
     
    }
    if(event.message == 'Hey') {
   context.sendResponse('Hello ' + event.senderobj.display+' I see you are wanting to check the graduation date for a trainee! Well, you came to the right place! Message me `(Graduation_Date) "TraineeName"`');
   }
    if(event.message == 'Hello'){
     context.sendResponse('Hi ' +event.senderobj.display+ ' I see you are wanting to check the graduation date for a trainee! Well, you came to the right place! Message me `(Graduation_Date) "TraineeName"`');
   }
    
   if(event.message == 'Hi'){
       context.sendResponse('Hello '+ event.senderobj.display);
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
