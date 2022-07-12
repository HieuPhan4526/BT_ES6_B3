
export default class Validation {

    kiemTraRong(Value, spanID, messager) {
        if (Value.trim() == "") {
            //Không hợp lệ
            document.getElementById(spanID).innerHTML = messager;
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    }

}  