import datita from "../../../public/mock-blog/mock-data.json";

export default (req, res) => {
	res.statusCode = 200;
	res.json(datita);
};
