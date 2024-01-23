const BASE_URL = "http://34.245.88.242/api/insurer";
const API_KEY =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3ODg2Mjc5LCJpYXQiOjE3MDUyOTQyNzksImp0aSI6ImJkZTU2OTVkNzc2ZjRhNzU5NWMwZTVlNmQ1YmJlNGIxIiwidXNlcl9pZCI6ImViZjlhYmNlLWU0ODEtNGVkNC1iZjdjLWVkODYzMWEzZTI0MCJ9.SBJyQidR7WF1JZpBsOxIGUEWmWnvGNDTq7uG_3q55qY";
const headers = {
  Authorization: API_KEY,
};
export const fetchAllMembers = async () => {
  try {
    let allMembers = [];
    let currentPage = 1;
    let totalPages;

    do {
      const response = await fetch(`${BASE_URL}/member?page=${currentPage}`, {
        next: { revalidate: 120 },
        headers,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const pageData = await response.json();
      totalPages = pageData.page.pages;
      allMembers = allMembers.concat(pageData.data);

      // Move to the next page
      currentPage++;
    } while (currentPage <= totalPages);

    return allMembers;
  } catch (err) {
    console.error(err.message);
  }
};
const response = await fetch(`${BASE_URL}/network/physician?page=1`, {
  next: { revalidate: 120 },
  headers,
});
export const fetchAllProviders = async () => {
  try {
    let allProviders = [];
    let currentPage = 1;
    let totalPages;

    do {
      const response = await fetch(
        `${BASE_URL}/network/physician?page=${currentPage}`,
        {
          next: { revalidate: 120 },
          headers,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const pageData = await response.json();
      totalPages = pageData.page.pages;
      allProviders = allProviders.concat(pageData.data);

      // Move to the next page
      currentPage++;
    } while (currentPage <= totalPages);
    return allProviders;
  } catch (err) {
    console.error(err.message);
  }
};
export const fetchMemberInfo = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/member/profile?q=${id}`, {
      next: { revalidate: 120 },
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const memberInfo = await response.json();
    return memberInfo;
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchCard = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/member/card?q=${id}`, {
      next: { revalidate: 120 },
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const memberInfo = await response.json();
    return memberInfo;
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchConsumption = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/member/consumption?q=${id}`, {
      next: { revalidate: 120 },
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const memberInfo = await response.json();
    return memberInfo;
  } catch (err) {
    console.error(err.message);
  }
};
export const fetchVitalSigns = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/member/record?q=${id}&category=vital_signs`,
      { next: { revalidate: 120 }, headers }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const memberInfo = await response.json();
    return memberInfo;
  } catch (err) {
    console.error(err.message);
  }
};
export const fetchMedicalSummary = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/member/medical_summary?q=${id}`, {
      next: { revalidate: 120 },
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const memberInfo = await response.json();
    return memberInfo;
  } catch (err) {
    console.error(err.message);
  }
};
export const fetchVisitsClinic = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/member/visit/clinic?q=${id}&page=1`,
      { next: { revalidate: 120 }, headers }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const memberInfo = await response.json();
    return memberInfo;
  } catch (err) {
    console.error(err.message);
  }
};
export const fetchInsurance = async () => {
  try {
    const response = await fetch(`${BASE_URL}/settings/insurance`, {
      next: { revalidate: 120 },
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const memberInfo = await response.json();
    return memberInfo;
  } catch (err) {
    console.error(err.message);
  }
};
export const fetchNetwork = async () => {
  try {
    const response = await fetch(`${BASE_URL}/settings/medical_network`, {
      next: { revalidate: 120 },
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const memberInfo = await response.json();
    return memberInfo;
  } catch (err) {
    console.error(err.message);
  }
};
