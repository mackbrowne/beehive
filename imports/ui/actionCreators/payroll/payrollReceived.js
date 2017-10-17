// Actoon Types
import { PAYROLL_RECEIVED } from "../../actionTypes/payroll";

// Action Creator
export const payrollReceived = payroll => {
  return { type: PAYROLL_RECEIVED, payload: payroll };
};
export default payrollReceived;
