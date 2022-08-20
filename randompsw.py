import random
import string

output_string = ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits) for _ in range(8))

print(output_string)