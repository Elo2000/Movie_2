const config = {
	url: `mongodb://127.0.0.1/movies_database`,
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
};

const connect = async mongoose => {
	try {
		const connection = await mongoose.connect(config.url, config.options);
		console.log(`MongoDB connected: ${connection.connection.name}`);
	} catch (error) {
		console.log(`500 - Could not connect to MongoDB: ${error.message}`);
	}
};

module.exports = { connect };
