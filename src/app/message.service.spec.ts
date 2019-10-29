import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MessageService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add message to messages', () =>{
    expect(service.messages.length).toEqual(0);
    service.add('test message');
    expect(service.messages[0]).toEqual('test message');
  });

  it('should clear mesages', () =>{
    expect(service.messages.length).toEqual(0);
    service.add('test message');
    service.clear();
    expect(service.messages.length).toEqual(0);

  });


});
