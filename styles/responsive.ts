const size = {
	xs: '320px',
	mobile: '400px',
	sm: '768px',
	md: '800px',
	lg: '1200px',
	xlg: '1400px',
};
const screenSize = {
	xs: `(min-width :${size.xs})`,
	mobile: `(min-width :${size.mobile})`,
	sm: `(min-width : ${size.sm})`,
	md: `(min-width : ${size.md})`,
	lg: `(min-width : ${size.lg})`,
	xlg: `(min-width : ${size.xlg})`,
};
const screenSizeMax = {
	xs: `(max-width :${size.xs})`,
	mobile: `(max-width :${size.mobile})`,
	sm: `(max-width : ${size.sm})`,
	md: `(max-width : ${size.md})`,
	lg: `(max-width : ${size.lg})`,
	xlg: `(max-width : ${size.xlg})`,
};
const breakpoints = {
	xs: `@media only screen and ${screenSize.xs}`,
	mobile: `@media only screen and ${screenSize.mobile}`,
	sm: `@media only screen and ${screenSize.sm}`,
	md: `@media only screen and ${screenSize.md}`,
	lg: `@media only screen and ${screenSize.lg}`,
	xlg: `@media only screen and ${screenSize.xlg}`,
};
const breakpointsMax = {
	xs: `@media only screen and ${screenSizeMax.xs}`,
	mobile: `@media only screen and ${screenSizeMax.mobile}`,
	sm: `@media only screen and ${screenSizeMax.sm}`,
	md: `@media only screen and ${screenSizeMax.md}`,
	lg: `@media only screen and ${screenSizeMax.lg}`,
	xlg: `@media only screen and ${screenSizeMax.xlg}`,
};
export default { min: breakpoints, max: breakpointsMax };