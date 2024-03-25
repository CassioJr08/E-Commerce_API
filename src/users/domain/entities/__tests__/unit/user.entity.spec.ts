import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;
  beforeEach(() => {
    UserEntity.validate = jest.fn();
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Constructor method test', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.isSeller).toEqual(props.isSeller);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    console.log(props);
  });

  it('Getter of name field', () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toEqual(props.name);
    expect(typeof sut.name).toBe('string');
  });

  it('Setter of name field', () => {
    sut['name'] = 'bill gates';
    expect(sut.props.name).toEqual('bill gates');
    expect(typeof sut.props.name).toBe('string');
  });

  it('Getter of isSeller field', () => {
    expect(sut.isSeller).toBeDefined();
    expect(sut.isSeller).toEqual(props.isSeller);
    expect(typeof sut.isSeller).toBe('boolean');
  });

  it('Setter of isSeller field', () => {
    sut['isSeller'] = true;
    expect(sut.props.isSeller).toEqual(true);
    expect(typeof sut.props.isSeller).toBe('boolean');
  });

  it('Getter of email field', () => {
    expect(sut.email).toBeDefined();
    expect(sut.email).toEqual(props.email);
    expect(typeof sut.email).toBe('string');
  });

  it('Setter of email field', () => {
    sut['email'] = 'billgates@gmail.com';
    expect(sut.props.email).toEqual('billgates@gmail.com');
    expect(typeof sut.props.email).toBe('string');
  });

  it('Getter of password field', () => {
    expect(sut.password).toBeDefined();
    expect(sut.password).toEqual(props.password);
    expect(typeof sut.password).toBe('string');
  });

  it('Setter of password field', () => {
    sut['password'] = 'bill345gates';
    expect(sut.props.password).toEqual('bill345gates');
    expect(typeof sut.props.password).toBe('string');
  });

  it('Should update the name field', () => {
    sut.updateName('other name');
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.name).toEqual('other name');
  });

  it('Should update the isSeller field', () => {
    sut.updateIsSeller(true);
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.isSeller).toBeTruthy();
  });

  it('Should update the email field', () => {
    sut.updateEmail('emailtest@gmail.com');
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.email).toEqual('emailtest@gmail.com');
  });

  it('Should update the password field', () => {
    sut.updatePassword('other password');
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.password).toEqual('other password');
  });
});
