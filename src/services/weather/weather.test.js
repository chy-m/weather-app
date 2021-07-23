import api from '../api'

const closedLoopId = 1
const hierarchyType = 'hierarchyType'
const accountId = '5432432'
const expectedData = 'data'

let mock: MockAdapter

describe('Transactions', () => {
  const apiTransactionsEndpoint = generatePath(API_TRANSACTIONS_ENDPOINT, {
    closedLoopId,
    hierarchyType,
    accountId,
  })

  beforeEach(() => {
    mock = new MockAdapter(api)

    mock.onGet(apiTransactionsEndpoint).reply(200, expectedData)
  })

  afterEach(() => {
    mock.reset()
  })

  it('call the correct endpoint and return the correct data', async () => {
    const response = await getTransactions(
      closedLoopId,
      hierarchyType,
      accountId,
      {
        page: 1,
      }
    )

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].url).toContain(hierarchyType)
    expect(mock.history.get[0].url).toContain(accountId)
    expect(response.data).toEqual(expectedData)
  })

  it('should specify the correct page for encoding into a query parameter when page is specified', async () => {
    const expectedPage = 77
    await getTransactions(closedLoopId, hierarchyType, accountId, {
      page: expectedPage,
    })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.page).toEqual(expectedPage)
  })

  it('should specify search for encoding into a query parameter when a search is specified', async () => {
    const expectedSearch = 'search'

    await getTransactions(closedLoopId, hierarchyType, accountId, {
      search: expectedSearch,
    })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.search).toEqual(expectedSearch)
  })

  it('should specify a given start date for encoding into a query parameter when a date range is specified', async () => {
    const startDate = new Date('05 October 2011 14:48 UTC')

    await getTransactions(closedLoopId, hierarchyType, accountId, {
      from: startDate,
    })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.from).toEqual('2011-10-05T14:48:00.000Z')
  })

  it('specifies given end date for encoding into a query parameter when a date range is specified', async () => {
    const endDate = new Date('25 October 2011 14:48 UTC')

    await getTransactions(closedLoopId, hierarchyType, accountId, {
      to: endDate,
    })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.to).toEqual('2011-10-25T14:48:00.000Z')
  })
})

describe('Transactions Export Csv', () => {
  const apiTransactionsExportCsvEndpoint = generatePath(
    API_TRANSACTIONS_EXPORT_CSV_ENDPOINT,
    { closedLoopId, hierarchyType, accountId }
  )

  beforeEach(() => {
    mock = new MockAdapter(api)

    mock.onGet(apiTransactionsExportCsvEndpoint).reply(200, expectedData)
  })

  afterEach(() => {
    mock.reset()
  })

  it('call the correct endpoint and return the correct data', async () => {
    const response = await getTransactionsExportCsv(
      closedLoopId,
      hierarchyType,
      accountId,
      {
        page: 1,
      }
    )

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].url).toContain(hierarchyType)
    expect(mock.history.get[0].url).toContain(accountId)
    expect(response.data).toEqual(expectedData)
  })

  it('should specify the correct page for encoding into a query parameter when page is specified', async () => {
    const expectedPage = 77
    await getTransactionsExportCsv(closedLoopId, hierarchyType, accountId, {
      page: expectedPage,
    })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.page).toEqual(expectedPage)
  })

  it('should specify search for encoding into a query parameter when a search is specified', async () => {
    const expectedSearch = 'search'

    await getTransactionsExportCsv(closedLoopId, hierarchyType, accountId, {
      search: expectedSearch,
    })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.search).toEqual(expectedSearch)
  })

  it('should specify a given start date for encoding into a query parameter when a date range is specified', async () => {
    const startDate = new Date('05 October 2011 14:48 UTC')

    await getTransactionsExportCsv(closedLoopId, hierarchyType, accountId, {
      from: startDate,
    })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.from).toEqual('2011-10-05T14:48:00.000Z')
  })

  it('specifies given end date for encoding into a query parameter when a date range is specified', async () => {
    const endDate = new Date('25 October 2011 14:48 UTC')

    await getTransactionsExportCsv(closedLoopId, hierarchyType, accountId, {
      to: endDate,
    })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.to).toEqual('2011-10-25T14:48:00.000Z')
  })
})

describe('Transactions Csv', () => {
  beforeEach(() => {
    mock = new MockAdapter(api)

    mock
      .onGet(generatePath(API_TRANSACTIONS_CSV_ENDPOINT, { closedLoopId }))
      .reply(200, expectedData)
  })

  afterEach(() => {
    mock.reset()
  })

  it('call the correct endpoint and return the correct data', async () => {
    const response = await getTransactionsCsv(closedLoopId, {
      page: 1,
    })

    expect(mock.history.get.length).toBe(1)
    expect(response.data).toEqual(expectedData)
  })

  it('should specify the correct page for encoding into a query parameter when page is specified', async () => {
    const expectedPage = 77
    await getTransactionsCsv(closedLoopId, { page: expectedPage })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.page).toEqual(expectedPage)
  })

  it('should specify a given start date for encoding into a query parameter when a date range is specified', async () => {
    const startDate = new Date('05 October 2011 14:48 UTC')

    await getTransactionsCsv(closedLoopId, { from: startDate })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.from).toEqual('2011-10-05T14:48:00.000Z')
  })

  it('specifies given end date for encoding into a query parameter when a date range is specified', async () => {
    const endDate = new Date('25 October 2011 14:48 UTC')

    await getTransactionsCsv(closedLoopId, { to: endDate })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.to).toEqual('2011-10-25T14:48:00.000Z')
  })
})

describe('Billing Accounts Csv', () => {
  beforeEach(() => {
    mock = new MockAdapter(api)

    mock
      .onGet(generatePath(API_BILLING_ACCOUNTS_CSV_ENDPOINT, { closedLoopId }))
      .reply(200, expectedData)
  })

  afterEach(() => {
    mock.reset()
  })

  it('call the correct endpoint and return the correct data', async () => {
    const response = await getBillingAccountsCsv(closedLoopId, {
      page: 1,
    })

    expect(mock.history.get.length).toBe(1)
    expect(response.data).toEqual(expectedData)
  })

  it('should specify the correct page for encoding into a query parameter when page is specified', async () => {
    const expectedPage = 77
    await getBillingAccountsCsv(closedLoopId, { page: expectedPage })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.page).toEqual(expectedPage)
  })

  it('should specify a given start date for encoding into a query parameter when a date range is specified', async () => {
    const startDate = new Date('05 October 2011 14:48 UTC')

    await getBillingAccountsCsv(closedLoopId, { from: startDate })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.from).toEqual('2011-10-05T14:48:00.000Z')
  })

  it('specifies given end date for encoding into a query parameter when a date range is specified', async () => {
    const endDate = new Date('25 October 2011 14:48 UTC')

    await getBillingAccountsCsv(closedLoopId, { to: endDate })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.to).toEqual('2011-10-25T14:48:00.000Z')
  })
})

describe('Rejected Payments Csv', () => {
  beforeEach(() => {
    mock = new MockAdapter(api)

    mock
      .onGet(
        generatePath(API_UNALLOCATED_PAYMENTS_CSV_ENDPOINT, { closedLoopId })
      )
      .reply(200, expectedData)
  })

  afterEach(() => {
    mock.reset()
  })

  it('call the correct endpoint and return the correct data', async () => {
    const response = await getRejectedPaymentsCsv(closedLoopId, {
      page: 1,
    })

    expect(mock.history.get.length).toBe(1)
    expect(response.data).toEqual(expectedData)
  })

  it('should specify the correct page for encoding into a query parameter when page is specified', async () => {
    const expectedPage = 77
    await getRejectedPaymentsCsv(closedLoopId, { page: expectedPage })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.page).toEqual(expectedPage)
  })

  it('should specify a given start date for encoding into a query parameter when a date range is specified', async () => {
    const startDate = new Date('05 October 2011 14:48 UTC')

    await getRejectedPaymentsCsv(closedLoopId, { from: startDate })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.from).toEqual('2011-10-05T14:48:00.000Z')
  })

  it('specifies given end date for encoding into a query parameter when a date range is specified', async () => {
    const endDate = new Date('25 October 2011 14:48 UTC')

    await getRejectedPaymentsCsv(closedLoopId, { to: endDate })

    expect(mock.history.get.length).toBe(1)
    expect(mock.history.get[0].params.to).toEqual('2011-10-25T14:48:00.000Z')
  })
})
