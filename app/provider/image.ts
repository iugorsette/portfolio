import angular from '../../public/assert/angular.png'
import react from '../../public/assert/react.png'
import reactNative from '../../public/assert/react-native.png'
import nodejs from '../../public/assert/nodejs.png'
import nestjs from '../../public/assert/nestjs.png'
import dotnet from '../../public/assert/dotnet.png'

export function getImage(tech: string) {
  switch (tech.toLowerCase()) {
    case 'reactjs':
      return react
    case 'react native':
      return reactNative
    case 'nodejs':
      return nodejs
    case 'angularjs':
      return angular
    case 'nestjs':
      return nestjs
    case '.net c#':
      return dotnet
    default:
      return ''
  }
}
