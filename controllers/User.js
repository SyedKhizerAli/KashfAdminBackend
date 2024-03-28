const {
  User,
  validation,
  authValidation,
  updateProfileScheme,
} = require('../models/User')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res) => {
  console.log('Entered Backend Login')
  //   try {
  //     const { error } = authValidation.validate(req.body);
  //     if (error) return res.status(400).send(error.details[0].message);

  //     // Assuming 'username' is now a 13-digit CNIC number and 'otp' is the 4-digit OTP
  //     let user = await User.findOne({ cnic: req.body.username });
  //     if (!user)
  //         return res.status(400).send({ error: 'Wrong CNIC or OTP' });

  //     // Assuming 'password' is now the 4-digit OTP code
  //     const validOTP = await bcrypt.compare(req.body.password, user.otp);
  //     if (!validOTP)
  //         return res.status(400).send({ error: 'Wrong CNIC or OTP' });

  //     // Remove the 'save' operation if not needed
  //     // await user.save();

  //     const token = user.genAuthToken();

  //     const { password, otp, ...restUser } = user._doc;

  //     res.status(200).send({ token, user: restUser });
  // } catch (error) {
  //     res.status(500).send({ error: error.message });
  // }
  // return res.status(201).send({message: 'success'});
  try {
    const { username } = req.body;
    const token = jwt.sign({ username }, 'secret-key', { expiresIn: '1h' });

    // const token = createdUser.genAuthToken()

    return res.status(201).send({
      token,
      message: 'Account Created Successfully',
    })
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
  return res.status(201).send({ token, message: 'success' });
}


exports.dashboardLoanDetails = async (req, res) => {
  // Data
  const loanDataForLC = [
    { month: "Jan", count: 20 },
    { month: "Feb", count: 35 },
    { month: "Mar", count: 12 },
    { month: "Apr", count: 1 },
    { month: "May", count: 23 },
    { month: "Jun", count: 28 },
    { month: "Jul", count: 12 },
    { month: "Aug", count: 6 },
    { month: "Sep", count: 15 },
    { month: "Oct", count: 20 },
    { month: "Nov", count: 3 },
    { month: "Dec", count: 5 },
  ];
  res.json(loanDataForLC);
}

exports.dashboardComplaintDetails = async (req, res) => {
  const complaintsDataForLC = [
    { month: "Jan", count: 10 },
    { month: "Feb", count: 15 },
    { month: "Mar", count: 8 },
    { month: "Apr", count: 12 },
    { month: "May", count: 20 },
    { month: "Jun", count: 18 },
    { month: "Jul", count: 22 },
    { month: "Aug", count: 16 },
    { month: "Sep", count: 25 },
    { month: "Oct", count: 28 },
    { month: "Nov", count: 30 },
    { month: "Dec", count: 35 },
  ];
  res.json(complaintsDataForLC);
}



exports.LoanRequestAreas = async (req, res) => {

  const areas = [
    "Islamabad",
    "Karachi",
    "Lahore",
    "Peshawar",
    "Quetta",
    "Faisalabad",
    "Multan",
    "Hyderabad",
    "Rawalpindi",
    "Gujranwala"
  ];
  res.json(areas);
}

exports.LoanRequestBranches = async (req, res) => {
  const branches = [
    "Defence",
    "Gulberg",
    "Model Town",
    "Johar Town",
    "Cantonment",
    "Allama Iqbal Town",
    "Shadman",
    "Raiwind",
    "Wapda Town",
    "Samanabad"
  ];
  
  
  res.json(branches);
}

exports.LoanRequests = async (req, res) => {
  const loanRequests = [
    {
      id: 1,
      name: "زینب عبداللہ",
      amountRequested: "10000 PKR",
      date: "12 March 2024",
      clientInfo: {
        name: "زینب عبداللہ",
        cnic: "12345-6789012-3",
        cellNumber: "123456789",
        activeStatus: "Yes"
      }
    },
    {
      id: 2,
      name: "مریم طاہر",
      amountRequested: "15000 PKR",
      date: "11 January 2024",
      clientInfo: {
        name: "مریم طاہر",
        cnic: "12345-6789013-4",
        cellNumber: "987654321",
        activeStatus: "No"
      }
    },
    {
      id: 3,
      name: "احمد راشد",
      amountRequested: "20000 PKR",
      date: "1 February 2024",
      clientInfo: {
        name: "احمد راشد",
        cnic: "12345-6789014-5",
        cellNumber: "456123789",
        activeStatus: "Yes"
      }
    }
    // Add more loan requests as needed
  ];
  res.json(loanRequests);
}

// Route to get promotions
exports.getPromotions = async (req, res) => {
  // Fetch promotions data from the database or any other data source
  // Send promotions data as JSON response

  const promotions = [
    {
      id: 1,
      area: "Islamabad",
      sentDate: "2024-03-07",
      info: {
        promoText: "کشف ہنر کاری لون: زندگی کو بہتر بنائیں! آپ کی راہیں آسان، خوابوں کو حقیقت بنائیں۔",
        promoImg: "../assets/images/promotionalpic.png",
      },
    },
    {
      id: 2,
      area: "Lahore",
      sentDate: "2024-03-06",
      info: {
        promoText: "کشف ہنر کاری لون: زندگی کو بہتر بنائیں! آپ کی راہیں آسان، خوابوں کو حقیقت بنائیں۔",
        promoImg: "../assets/images/promotionalpic.png",
      },
    },
    {
      id: 3,
      area: "Karachi",
      sentDate: "2024-03-05",
      info: {
        promoText: "کشف ہنر کاری لون: زندگی کو بہتر بنائیں! آپ کی راہیں آسان، خوابوں کو حقیقت بنائیں۔",
        promoImg: "path/to/image3.jpg",
      },
    },
  ];
  res.json(promotions);
};

exports.currentLoanDetails = async (req, res) => {
  console.log('Entered Backend currentloandetails');
  const token = req.headers.authorization;

  jwt.verify(token.replace('Bearer ', ''), 'secret-key', (err, user) => {
    // if (err) {
    //   // If the token is not valid, return unauthorized status
    //   return res.status(401).json({ error: 'Unauthorized' });
    // }

    // Attach the user information to the request object for further processing
    req.user = user;

    const data = [
      { status: 'رقم ادا ہو گئی', date: '29 جون 2023', type: 'Rs 35000', number: '1' },
      { status: 'رقم ادا ہو گئی', date: '29 جولائی2023', type: 'Rs 3500', number: '2' },
      { status: 'رقم ادا ہو گئی', date: '29 اگست2023', type: 'Rs 25000', number: '3' },
      { status: 'رقم ادا ہو گئی', date: '29 ستمبر 2023', type: 'Rs 5000', number: '4' },
      { status: 'رقم ادا ہو گئی', date: '29 اکتوبر 2023', type: 'Rs 30000', number: '5' },
      { status: 'باقی', date: '29 جون 2023', type: 'Rs 12000', number: '6' },
      { status: 'باقی', date: '29 جون 2023', type: 'Rs 13000', number: '7' },
    ];

    const installmentDetails = {
      totalAmountDue: 10000,
      currentInstallmentAmountDue: 6000,
      installmentNumber: 6,
      dueDate: "31 جنوری 2024",
      previousInstallmentAmountDue: 4000,
    }

    // Send the response after verifying the token and constructing the data array
    return res.status(201).send({ loandetails: data, installmentDetails: installmentDetails, message: 'success' });
  });
};
