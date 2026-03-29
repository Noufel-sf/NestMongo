import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { ItemsController } from '../src/items/items.controller';
import { ItemsService } from '../src/items/items.service';

describe('Items API (e2e)', () => {
  let app: INestApplication;

  const mockItemsService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        {
          provide: ItemsService,
          useValue: mockItemsService,
        },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('POST /items creates an item', async () => {
    const payload = {
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 120,
      isActive: true,
    };

    const createdItem = {
      _id: '507f1f77bcf86cd799439011',
      ...payload,
    };

    mockItemsService.create.mockResolvedValue(createdItem);

    await request(app.getHttpServer())
      .post('/items')
      .send(payload)
      .expect(201)
      .expect(createdItem);

    expect(mockItemsService.create).toHaveBeenCalledWith(payload);
  });

  it('GET /items returns all items', async () => {
    const items = [
      {
        _id: '507f1f77bcf86cd799439011',
        name: 'Keyboard',
        description: 'Mechanical keyboard',
        price: 120,
        isActive: true,
      },
      {
        _id: '507f191e810c19729de860ea',
        name: 'Mouse',
        description: 'Wireless mouse',
        price: 60,
        isActive: true,
      },
    ];

    mockItemsService.findAll.mockResolvedValue(items);

    await request(app.getHttpServer()).get('/items').expect(200).expect(items);

    expect(mockItemsService.findAll).toHaveBeenCalledTimes(1);
  });

  it('GET /items/:id returns one item', async () => {
    const itemId = '507f1f77bcf86cd799439011';
    const item = {
      _id: itemId,
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 120,
      isActive: true,
    };

    mockItemsService.findOne.mockResolvedValue(item);

    await request(app.getHttpServer())
      .get(`/items/${itemId}`)
      .expect(200)
      .expect(item);

    expect(mockItemsService.findOne).toHaveBeenCalledWith(itemId);
  });

  it('PATCH /items/:id updates an item', async () => {
    const itemId = '507f1f77bcf86cd799439011';
    const updatePayload = { price: 99 };
    const updatedItem = {
      _id: itemId,
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 99,
      isActive: true,
    };

    mockItemsService.update.mockResolvedValue(updatedItem);

    await request(app.getHttpServer())
      .patch(`/items/${itemId}`)
      .send(updatePayload)
      .expect(200)
      .expect(updatedItem);

    expect(mockItemsService.update).toHaveBeenCalledWith(itemId, updatePayload);
  });

  it('DELETE /items/:id removes an item', async () => {
    const itemId = '507f1f77bcf86cd799439011';

    mockItemsService.remove.mockResolvedValue(undefined);

    await request(app.getHttpServer()).delete(`/items/${itemId}`).expect(200);

    expect(mockItemsService.remove).toHaveBeenCalledWith(itemId);
  });
});
