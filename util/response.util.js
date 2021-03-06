/**
 *
 * @param {any} res
 * @param {number} status
 * @param {string} message
 * @param {any} data
 * @returns
 */
export const response = (res, status, message, data) => {
	const resData = { status, message, data };
	return res.status(status).json(resData);
};
