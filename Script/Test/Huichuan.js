const url = 'http://bbs.inovance.com/plugin.php?id=k_misign:sign&operation=qiandao&format=global_usernav_extra&formhash=3d8cd55c&inajax=1&ajaxtarget=k_misign_topb';
const method = 'GET';
const headers = {
  'Accept-Encoding': 'gzip, deflate',
  'Cookie': 'Rnuy_2132_lastact=1681142628%09forum.php%09; Rnuy_2132_popadv=a%3A1%3A%7Bi%3A12%3Bi%3A1681142593%3B%7D; Rnuy_2132_seccode=14091.2c885682330cb33a75; Rnuy_2132_sid=l5zqvj; Rnuy_2132_st_p=49654%7C1681142626%7Cd4fbbff651ff08d33d59e9f14edc89df; Rnuy_2132_viewid=tid_18983; Rnuy_2132_visitedfid=88; Rnuy_2132_sendmail=1; Rnuy_2132_nofavfid=1; Rnuy_2132_onlineusernum=515; Rnuy_2132_home_diymode=1; Rnuy_2132_auth=6e7dfIav1JyhybgFW8lepjMGLkZr9NJ3SUUg7jaYnS0E6eOm5BYu9IdNtZwMZKULfMQAoP%2Fi%2BRVd0V2KdhPMmv0A9A; Rnuy_2132_lastcheckfeed=49654%7C1681142557; Rnuy_2132_ulastactivity=4f68jjGEenElxIV24cO4DfOJHG68bhM7RGi7xJH%2BLUuWsi8lNDyj; PHPSESSID=amtrglo4q2c07lffb76t6t2uf4; Rnuy_2132_lastvisit=1681095203; Rnuy_2132_saltkey=Mi4y7DWd',
  'Connection': 'keep-alive',
  'Referer': 'http://bbs.inovance.com/',
  'Accept': '*/*',
  'Host': 'bbs.inovance.com',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Safari/605.1.15',
  'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
  'X-Requested-With': 'XMLHttpRequest'
};

const myRequest = {
  url,
  method,
  headers
};

$task.fetch(myRequest).then(response => {
  console.log(response.statusCode + '\n\n' + response.body);
  $notify('HTTP请求成功', '签到成功', '签到请求已成功发送');
  $done();
}).catch(error => {
  console.log(error);
  $notify('HTTP请求失败', '签到失败', '签到请求发送失败，请检查网络或配置');
  $done();
});
