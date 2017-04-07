//   Copyright David Herrera, 2017.
//   All Rights Reserved.
function MessageHandler(context, event) {
    //Command (Current-Trainees)
    if (event.senderobj.display === 'David Diaz' === true) {
        if (event.message === '(Current-Trainees)')
        context.sendResponse('*Listing Current Trainees.....*' + '\n\n>_promysticgamer_' + '\n\n>_tbnrmeg_' + '\n\n>_featherfalling_' + '\n\n>_sharky_' +  '\n\n>_blazenplayzmcpe_' + '\n\n>_mikemnd_');
    }
    if (event.senderobj.display === 'Brandon Valencia' === true) {
        if (event.message === '(Current-Trainees)')
        context.sendResponse('*Listing Current Trainees.....*' + '\n\n>_promysticgamer_' + '\n\n>_xxheyitznaomixx_' + '\n\n>_tbnrmeg_' + '\n\n>_thematrix25aldo_' + '\n\n>_featherfalling_' + '\n\n>_sharky_' +  '\n\n>_blazenplayzmcpe_' + '\n\n>_mikemnd_');
    }

    //Command (Changelog)
    if (event.senderobj.display === 'David Diaz' === true) {
        if (event.message === '(Changelog)')
        context.sendResponse('_*Listing V3 Changelog.....*_' + '\n\n>*-Added premissions, overall making it more sucure!*');
    }
    if (event.senderobj.display === 'Brandon Valencia' === true) {
        if (event.message === '(Changelog)')
        context.sendResponse('_*Listing V3 Changelog.....*_' + '\n\n>*-Added premissions, overall making it more sucure!*');
    }

    //command (Graduation_Date)
    if (event.senderobj.display === 'David Diaz' === true) {
	  if (event.message === '(Graduation_Date) promysticgamer')  
        context.sendResponse('>*Trainee Name:* promysticgamer' + '\n\n>*Date Added:* Thu Dec 08, 2016' + '\n\n>*Predicted Graduation:* Thu Dec 29, 2016' + '\n\n>*Extended Date:* Thu Jan 19, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_'); 
    }
    if (event.senderobj.display === 'David Diaz' === true) {
	  if (event.message === '(Graduation_Date) featherfalling__')
        context.sendResponse(">*Trainee Name:* featherfalling__" + "\n\n>*Date Added:* Sun Jan 22, 2017" + "\n\n>*Predicted Graduation:* Mon Feb 6, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
    }
    if (event.senderobj.display === 'David Diaz' === true) {
	  if (event.message === '(Graduation_Date) blazenplayzmcpe')
        context.sendResponse(">*Trainee Name:* blazenplayzmcpe" + "\n\n>*Date Added:* Sat Jan 28, 2017" + "\n\n>*Predicted Graduation:* Sat Feb 11, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
    }
    if (event.senderobj.display === 'David Diaz' === true) {
		if (event.message === '(Graduation_Date) sharky')
		context.sendResponse(">*Trainee Name:* sharky" + "\n\n>*Date Added:* Sun Jan 22, 2017" + "\n\n>*Predicted Graduation:* Mon Feb 6, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
    }
    if (event.senderobj.display === 'David Diaz' === true) {
		if (event.message === '(Graduation_Date) mikemnd')
		context.sendResponse(">*Trainee Name:* mikemnd" + "\n\n>*Date Added:* Sat Jan 28, 2017" + "\n\n>*Predicted Graduation:* Sat Feb 11, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
    }
    if (event.senderobj.display === 'Brandon Valencia' === true) {
        if (event.message === '(Graduation_Date) promysticgamer')  
        context.sendResponse('>*Trainee Name:* promysticgamer' + '\n\n>*Date Added:* Thu Dec 08, 2016' + '\n\n>*Predicted Graduation:* Thu Dec 29, 2016' + '\n\n>*Extended Date:* Thu Jan 19, 2017' + '\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_'); 
    }
    
    if (event.senderobj.display === 'Brandon Valencia' === true) {
       if (event.message === '(Graduation_Date) featherfalling__')
       context.sendResponse(">*Trainee Name:* featherfalling__" + "\n\n>*Date Added:* Sun Jan 22, 2017" + "\n\n>*Predicted Graduation:* Mon Feb 6, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
    }
    
    if (event.senderobj.display === 'Brandon Valencia' === true) {
        if (event.message === '(Graduation_Date) blazenplayzmcpe')
        context.sendResponse(">*Trainee Name:* blazenplayzmcpe" + "\n\n>*Date Added:* Sat Jan 28, 2017" + "\n\n>*Predicted Graduation:* Sat Feb 11, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
    }
    if (event.senderobj.display === 'Brandon Valencia' === true) {
        if (event.message === '(Graduation_Date) sharky')
        context.sendResponse(">*Trainee Name:* sharky" + "\n\n>*Date Added:* Sun Jan 22, 2017" + "\n\n>*Predicted Graduation:* Mon Feb 6, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
    }
	
    if (event.senderobj.display === 'Brandon Valencia' === true) {
        if (event.message === '(Graduation_Date) mikemnd')
        context.sendResponse(">*Trainee Name:* mikemnd" + "\n\n>*Date Added:* Sat Jan 28, 2017" + "\n\n>*Predicted Graduation:* Sat Feb 11, 2017" + "\n\n>*Extened Date:* _Pending_" + "\n\n_*The date shown is not final and may change at anytime depending on the Leads.*_");
    }
   
    //command (Current-Week-Grads)
    if (event.senderobj.display === 'David Diaz' === true ){
        if (event.message == '(Current-Week-Grads)')
        context.sendResponse('_*Listing this weeks possible grads..*_' + '\n\n>*featherfalling*');
    }
          
    if (event.senderobj.display === 'Brandon Valencia' === true) {
        if (event.message == '(Current-Week-Grads)')
        context.sendResponse('_*Listing this weeks possible grads..*_' + '\n\n>*featherfalling*');
    }
}

function EventHandler(context, event) {}
function HttpResponseHandler(context, event) {}
function DbGetHandler(context, event) {}
function DbPutHandler(context, event) {}
