import sys
import json
import subprocess

commit_message = "This is from deploy.py script: " + str(sys.argv[1])
deploy_branch = str(sys.argv[2])
input_file_path = "./src/assets/user.json"
output_file_path = "./docs/user.json"

build = ['ng', 'build', '--base-href', '/saifullahjailani_com/']

commands = [
    ['git', 'checkout', '-b', deploy_branch],
    ['git', 'add', '.'],
    ['git', 'commit', '-m', commit_message],
    ['git', 'push', 'origin', deploy_branch]
]

try:
    print(build)
    result = subprocess.run(build, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
    print("Output:", result.stdout)
except subprocess.CalledProcessError as e:
    print(f"Error in build: {e}")

try:
    with open(input_file_path, 'r') as input_file:
        data = json.load(input_file)

    with open(output_file_path, 'w') as output_file:
        json.dump(data, output_file, indent=4)

    print("Json file successfully copied ...")

except Exception as e:  # Use 'Exception' to catch all exceptions
    print("Can not load or write JSON file")
    print(e)

for command in commands:
    print(command)
    try:
        result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=True)
        print("Output:", result.stdout)

    except subprocess.CalledProcessError as e:
        print(f"Error in command: {e}")

print("Deployed to saifullahjailani_com")
