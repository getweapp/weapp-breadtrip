const apiURL = 'https://api.getweapp.com/thirdparty/breadtrip';

const user = {
  info(userId, callback) {
    wx.request({
      url: `${apiURL}/users?userId=${userId}`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
};

const trip = {
  waypoints(tripId, callback) {
    wx.request({
      url: `${apiURL}/trips?id=`+tripId,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
  hot(data, callback) {
    wx.request({
      url: `${apiURL}/v2/index`,
      method: 'GET',
      data,
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
};

const destination = {
  list(callback) {
    wx.request({
      url: `${apiURL}/destination/v3`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
  place(type, id, callback) {
    wx.request({
      url: `${apiURL}/destination/place?type=${type}&id=${id}`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
  poi(type, id, poiType, data, callback) {
    let poi = 'all/';
    if (poiType) {
      poi = `${poiType}/`;
    }
    wx.request({
      url: `${apiURL}/destination/place/pois?type=${type}&id=${id}&poi=${poi}`,
      method: 'GET',
      data,
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
};

const waypoint = {
  detail(tripId, waypointId, callback) {
    wx.request({
      url: `${apiURL}/trips/waypoints?tripId=${tripId}&waypointId=${waypointId}`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
  replies(tripId, waypointId, callback) {
    wx.request({
      url: `${apiURL}/trips/waypoints/replies?tripId=${tripId}&waypointId=${waypointId}`,
      method: 'GET',
      header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      success(res) {
        callback('success', res);
      },
      fail(res) {
        callback('fail', res);
      },
      complete(res) {
        callback('complete', res);
      },
    });
  },
};

module.exports = {
  user,
  trip,
  destination,
  waypoint,
};
