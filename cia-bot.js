//   Copyright David Herrera, 2017.
//   All Rights Reserved.
function MessageHandler(context, event) {
   
   if(event.message == "(Graduation_Date) promysticgamer"){
       context.sendResponse('>*Trainee Name:* promysticgamer' + '\n\n>*Date Added:* Thu Dec 08, 2016' + '\n\n>*Predicted Graduation:* Thu Dec 29, 2016' + '\n\n>*Extended Date:* Thu Jan 19, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_'); 
    }
    else if(event.message == "(Graduation_Date) xxheyitznaomixx") {
        context.sendResponse('>*Trainee Name:* xxheyitznaomixx' + '\n\n>*Date Added:* Mon Jan 02, 2017' + '\n\n>*Predicted Graduation:* Mon Jan 23, 2017' + '\n\n>*Extended Date:* Mon Feb 13, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_');
    }
    else if(event.message == "(Graduation_Date) tbnrmeg") {
        context.sendResponse('>*Trainee Name:* tbnrmeg' + '\n\n>*Date Added:* Fri Dec 30, 2016' + '\n\n>*Predicted Graduation:* Fri Jan 20, 2017' + '\n\n>*Extended Date:* Fri Feb 10, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_');
    }
    
    else if(event.message == "(Graduation_Date) thematrix25aldo") {
        context.sendResponse(">*Trainee Name:* thematrix25aldo" + "\n\n>*Date Added:* Thur Jan 19, 2017" + "\n\n>*Predicted Graduation:* Mon Feb 6, 2017" + '\n\n>*Extened Date:* _Pending_' + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_"); 
    }
 else if(event.message == "(Graduation_Date) featherfalling__"){
      context.sendResponse(">*Trainee Name:* featherfalling__" + "\n\n>*Date Added:* Sun Jan 22, 2017" + "\n\n>*Predicted Graduation:* Mon Feb 6, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
 }
  else if(event.message == "(Graduation_Date) blazenplayzmcpe"){
     context.sendResponse(">*Trainee Name:* blazenplayzmcpe" + "\n\n>*Date Added:* Sat Jan 28, 2017" + "\n\n>*Predicted Graduation:* Sat Feb 11, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
 }
    else if(event.message == "(Graduation_Date) sharky"){
        context.sendResponse(">*Trainee Name:* sharky" + "\n\n>*Date Added:* Sun Jan 22, 2017" + "\n\n>*Predicted Graduation:* Mon Feb 6, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
    }
     if(event.message == '(Current-Trainees)'){
          context.sendResponse('*Listing Current Trainees.....*' + '\n\n>_promysticgamer_' + '\n\n>_xxheyitznaomixx_' + '\n\n>_tbnrmeg_' + '\n\n>_thematrix25aldo_' + '\n\n>_featherfalling_' + '\n\n>_sharky_');
     }
      if(event.message == '(Changelog)'){
           context.sendResponse('_*Listing V2 Changelog.....*_' + '\n\n>*New Commands:* `(Current-Trainees)` and `(Changelog)`' + '\n\n>*Updates:* Updated Graduation dates and added new Trainees');
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
     context.sendResponse('_*Listing This Weeks Possible Grads...*_' + '\n\n>_Updating to upcoming week, checkin on Monday!_');
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
//Hi
