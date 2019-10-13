import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer O-c5gfn1PzZ-w1LIsS4nnxBOBNqL17jDkEMlIHKpJLOnM8J1J_wG1zEIf92Wfge60JJfjefDXCF410r9IDQEKAI2E05Sm6txF729nLQ8qyq9t4t17P_TZXMHoQijXXYx',
  },
});
