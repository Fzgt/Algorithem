// 860. 柠檬水找零
function lemonadeChange(bills: number[]): boolean {
    let five = 0, ten = 0;
    for (const bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            ten++;
            five--;
        } else if (bill === 20) {
            if (ten > 0) {
                ten--;
                five--;
            } else {
                five -= 3;
            }
        }
        if (five < 0) {
            return false;
        }
    }

    return true;
};