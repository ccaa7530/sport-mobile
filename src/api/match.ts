import request from '@/plugins/axios'

export function getList(data: object) {
  return request({
    url: '/v1/match/getList',
    method: 'post',
    data
  })
}