const workingHoursMiddleware = (req, res, next) => {
	const now = new Date();
	const day = now.getDay(); // Sunday: 0, Monday: 1, ..., Saturday: 6
	const hour = now.getHours();

	if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
		next(); // Allow access
	} else {
		res.send(
			"The web application is only available from Monday to Friday, 9 AM - 5 PM."
		);
	}
};
module.exports = workingHoursMiddleware;